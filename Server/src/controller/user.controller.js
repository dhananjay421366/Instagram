import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Post } from "../model/post.model.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong when generating access and refresh tokens"
    );
  }
};
const register = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { email, username, password } = req.body;
  console.log("email: ", email, "Password: ", password);

  // validation
  if ([email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  //  check if user is already exists - username ,email
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User  with email or username already exists");
  }

  // log files
  console.log(req.files);
  const profileFile = req.files?.profilePicture[0]?.path;
  console.log(profileFile);
  if (!profileFile) {
    throw new ApiError(400, "profile file is required");
  }

  // upload them cloudinary
  const profileImg = await uploadOnCloudinary(profileFile);

  if (!profileImg) {
    throw new ApiError(400, "profile  file is required");
  }

  const user = await User.create({
    username,
    email,
    password,
    profilePicture: profileImg?.url || "",
  });
  return res
    .status(201)
    .json(new ApiResponse("200", user, "User registered successfully"));
});

const login = asyncHandler(async (req, res) => {
  // req body -> data
  // username or email
  // find the user
  // password check
  // access and refresh token
  // send cookies
  // response
  const { email, username, password } = req.body;
  // console.log(email, username, password);

  if (!username && !email) {
    throw new ApiError(400, "username or email is required");
  }
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );
  const populatedPosts = await Promise.all(
    user.posts.map(async (postId) => {
      const post = await Post.findById(postId);
      if (post && post.author.equals(user._id)) {
        return post;
      }
      return null;
    })
  );
  
  
  console.log(populatedPosts);

  const loggedInUser = await User.findOne(user._id).select(
    "-password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User loggedIn successfully"
      )
    );
});
const logout = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const getProfile = asyncHandler(async (req, res) => {
  return res.json(
    new ApiResponse(200, req.user, "User profile fetched successfully")
  );
});
const editProfile = asyncHandler(async (req, res) => {
  const { username, email, Bio } = req.body;
  // check validation
  if ([username, email, Bio].some((field) => field?.trim() == "")) {
    throw new ApiError(400, "All fields are required");
  }
  let profilePictureLocalpath = req.file?.path;
  if (!profilePictureLocalpath) {
    throw new ApiError(404, "Profile picture is required");
  }
  const profilePicture = await uploadOnCloudinary(profilePictureLocalpath);
  if (!profilePicture) {
    throw new ApiError(400, "Error to uploading profile picture");
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        username: username,
        email: email,
        Bio: Bio,
        profilePicture: profilePicture.url,
      },
    },
    {
      new: true,
    }
  );
  return res
    .status(200)
    .json(
      new ApiResponse(200, updatedUser, "Account details updated successfully")
    );
});

const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "Old password and new password are required");
  }
  const user = await User.findById(req.user._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Invalid  password");
  }
  user.password = newPassword;
  user.save({ validateBeforeSave: true });
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

const getSuggestedUsers = asyncHandler(async (req, res) => {
  const suggestedUsers = await User.find({
    _id: { $ne: req.user._id },
  }).select("-password -refreshToken");
  if (!suggestedUsers) {
    throw new ApiError(404, "Currently do No users found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, { users: suggestedUsers }, "Suggested users fetched")
    );
});

const followOrUnfollow = asyncHandler(async (req, res) => {
  // Get the ID of the logged-in user
  const currentUserId = req.user._id;

  // Get the ID of the target user (the one being followed or unfollowed)
  const targetUserId = req.params.id;

  // Prevent the user from following/unfollowing themselves
  if (currentUserId.equals(targetUserId)) {
    throw new ApiError(400, "You cannot follow/unfollow yourself.");
  }

  // Fetch both the current user and the target user from the database
  const [currentUser, targetUser] = await Promise.all([
    User.findById(currentUserId),
    User.findById(targetUserId),
  ]);

  // Check if both users exist in the database
  if (!currentUser || !targetUser) {
    throw new ApiError(404, "User not found.");
  }

  // Check if the current user is already following the target user
  const isFollowing = currentUser.following.includes(targetUser._id);

  // Start a database session and transaction to ensure atomicity
  const session = await User.startSession();
  session.startTransaction();

  try {
    if (isFollowing) {
      // Unfollow logic: remove the target user from the current user's following list
      // and remove the current user from the target user's followers list
      await Promise.all([
        User.updateOne(
          { _id: currentUserId },
          { $pull: { following: targetUserId } },
          { session }
        ),
        User.updateOne(
          { _id: targetUserId },
          { $pull: { followers: currentUserId } },
          { session }
        ),
      ]);
      await session.commitTransaction();
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Unfollowed successfully"));
    } else {
      // Follow logic: add the target user to the current user's following list
      // and add the current user to the target user's followers list
      await Promise.all([
        User.updateOne(
          { _id: currentUserId },
          { $push: { following: targetUserId } },
          { session }
        ),
        User.updateOne(
          { _id: targetUserId },
          { $push: { followers: currentUserId } },
          { session }
        ),
      ]);
      await session.commitTransaction();
      return res
        .status(200)
        .json(new ApiResponse(200, {}, "Followed successfully"));
    }
  } catch (error) {
    // If an error occurs, abort the transaction and throw an API error
    await session.abortTransaction();
    throw new ApiError(
      500,
      "An error occurred while toggling the follow status."
    );
  } finally {
    // End the database session
    session.endSession();
  }
});

export {
  register,
  login,
  logout,
  getProfile,
  editProfile,
  changePassword,
  getSuggestedUsers,
  followOrUnfollow,
};
