// import {
//   Heart,
//   Home,
//   LogOut,
//   Menu,
//   MenuIcon,
//   MessageCircle,
//   PlusSquare,
//   Search,
//   TrendingUp,
// } from "lucide-react";
// import React, { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { toast } from "sonner";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Cloud,
//   CreditCard,
//   Github,
//   Keyboard,
//   LifeBuoy,
//   Mail,
//   MessageSquare,
//   Plus,
//   PlusCircle,
//   Settings,
//   User,
//   UserPlus,
//   Users,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useDispatch, useSelector } from "react-redux";
// import { setAuthUser } from "@/redux/AuthSlice";
// import { CreatePost } from "./CreatePost";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { selectedPost, setPost } from "@/redux/postSlice";



// export const LeftSideBar = () => {
//   const navigate = useNavigate();
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);
//   let username = user ? user?.data.user.username : "Profile";
//   let completedUsername = username.slice(0, 10); // Limit username to 10 characters
//   let profileName = user ? `${completedUsername}` : "Profile"

//   const logoutHandle = async () => {
//     try {
//       const response = await axios.get("/api/v1/users/logout", {
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         dispatch(setAuthUser(null));
//         navigate("/login");
//         toast.success(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     } finally {
//       navigate("/login");
//     }
//   };

//   const sideBarHandler = (textType) => {
//     if (textType === "Logout") {
//       logoutHandle();
//     } else if (textType === "Create") {
//       setOpen(true);
//     } else if (textType === "Shorts") {
//       navigate("/reels");
//     } else if (textType === "Home") {
//       navigate("/home");
//     } else if (textType === profileName) {
//       navigate(`/profile/${user?.data.user._id}`); // Navigate to user's profile using username
//     }
//   };



//   const sidebarItems = [
//     {
//       icon: <Home />,
//       text: "Home",
//     },
//     {
//       icon: <Search />,
//       text: "Search",
//     },
//     {
//       icon: <TrendingUp />,
//       text: "Explore",
//     },
//     {
//       icon: <MessageCircle />,
//       text: "Messages",
//     },
//     {
//       icon: <Heart />,
//       text: "Notification",
//     },
//     {
//       icon: <PlusSquare />,
//       text: "Create",
//     },
//     {
//       icon: (
//         <Avatar className="w-6 h-6 text-black">
//           <AvatarImage
//             src={user ? `${user.data.user.profilePicture}` : ""}
//             alt={user?.data.user.username}
//           />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       ),
//       text: profileName,
//     },
//     {
//       icon: <FontAwesomeIcon icon={faPlay} size="2x" />,
//       text: "Shorts",
//     },
//   ];

//   return (
//     <>

//       <div className="md:fixed  hidden  md:block top-0 z-10 mt-20 left-0 md:px-4  border-r-[1px] border-gray-700 h-screen  md:w-[16%]">
//         <div className="flex flex-col  ">
//           <div>
//             {sidebarItems.map((item, index) => {
//               return (
//                 <div
//                   onClick={() => sideBarHandler(item.text)}
//                   key={index}
//                   className="flex items-center gap-3  relative  hover:bg-gray-900 cursor-pointer rounded-lg p-3 my-3 "
//                 >
//                   {item.icon}
//                   <span className=" hidden md:flex"> {item.text}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="flex flex-col gap-3 threads left-0 bottom-0 py-4 md:px-3 mb-4">
//           <div class="x9f619 md:flex hover:bg-gray-900 hidden cursor-pointer rounded-lg md:p-3 items-center gap-3  w-[210px] x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//             <div
//               class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
//               className="opacity:1"
//             >
//               <div className="width:100%">
//                 <div class="" className="width:100%">
//                   <span
//                     class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
//                     dir="auto"
//                     className="line-height:var(--base-line-clamp-line-height);--base-line-clamp-line-height:20px"
//                   >

//                   </span>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* Second main div for menu button */}
//           <div className="x9f619 block md:flex items-center w-[210px] hover:bg-gray-900 text-white gap-3 md:px-3 cursor-pointer rounded-lg md:p-3 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//             <div className="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx">
//               <DropdownMenu className="text-white translate-x-0 translate-y-0">
//                 <DropdownMenuTrigger asChild>
//                   <div className="dm:flex lg:flex  justify-center items-center gap-2">
//                     <span className="block p-3 lg:hidden"><MenuIcon /></span>   {/* Visible on small screens */}
//                     <Button className="hidden lg:block"><MenuIcon /></Button>   {/* Visible on small screens */}
//                     <span className="hidden lg:block">More</span>   {/* Visible on large screens */}
//                   </div>

//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56">
//                   {/* Dropdown Menu Items */}
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem onClick={logoutHandle}>
//                     <LogOut className="mr-2 h-4 w-4" />
//                     <span>Log out</span>
//                     <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>
//         </div>
//         <CreatePost open={open} setOpen={setOpen} />
//       </div>
//     </>
//   );
// };

import {
  Heart,
  Home,
  LogOut,
  MenuIcon,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "@/redux/AuthSlice";
import { CreatePost } from "./CreatePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export const LeftSideBar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // Check if user is authenticated; if not, redirect to login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const username = user ? user?.data.user.username : "Profile";
  const completedUsername = username.slice(0, 10); // Limit username to 10 characters
  const profileName = user ? `${completedUsername}` : "Profile";

  const logoutHandle = async () => {
    try {
      const response = await axios.get("/api/v1/users/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(setAuthUser(null));
        navigate("/login");
        toast.success(response.data.message, {
          duration: 2000, // 2 seconds
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000, // 2 seconds
      });
    } finally {
      navigate("/login");
    }
  };

  const sideBarHandler = (textType) => {
    if (textType === "Logout") {
      logoutHandle();
    } else if (textType === "Create") {
      setOpen(true);
    } else if (textType === "Shorts") {
      navigate("/reels");
    } else if (textType === "Home") {
      navigate("/home");
    } else if (textType === profileName) {
      navigate(`/profile/${user?.data.user._id}`);
    }
  };

  const sidebarItems = [
    {
      icon: <Home />,
      text: "Home",
    },
    {
      icon: <Search />,
      text: "Search",
    },
    {
      icon: <TrendingUp />,
      text: "Explore",
    },
    {
      icon: <MessageCircle />,
      text: "Messages",
    },
    {
      icon: <Heart />,
      text: "Notification",
    },
    {
      icon: <PlusSquare />,
      text: "Create",
    },
    {
      icon: (
        <Avatar className="w-6 h-6 text-black">
          <AvatarImage
            src={user ? `${user.data.user.profilePicture}` : ""}
            alt={user?.data.user.username}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: profileName,
    },
    {
      icon: <FontAwesomeIcon icon={faPlay} size="2x" />,
      text: "Shorts",
    },
  ];

  return (
    <>
      <div className="md:fixed hidden md:block top-0 z-10 mt-20 left-0 md:px-4 border-r-[1px] border-gray-700 h-screen md:w-[16%]">
        <div className="flex flex-col">
          <div>
            {sidebarItems.map((item, index) => (
              <div
                onClick={() => sideBarHandler(item.text)}
                key={index}
                className="flex items-center gap-3 relative hover:bg-gray-900 cursor-pointer rounded-lg p-3 my-3"
              >
                {item.icon}
                <span className="hidden md:flex">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 threads left-0 bottom-0 py-4 md:px-3 mb-4">
          <div className="hidden md:flex hover:bg-gray-900 cursor-pointer rounded-lg md:p-3 items-center gap-3 w-[210px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <MenuIcon />
                  <span>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logoutHandle}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <CreatePost open={open} setOpen={setOpen} />
      </div>
    </>
  );
};
