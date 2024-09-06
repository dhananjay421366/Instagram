import {
  Heart,
  Home,
  LogOut,
  Menu,
  MenuIcon,
  MessageCircle,
  PlusSquare,
  Search,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "@/redux/AuthSlice";
import { CreatePost } from "./CreatePost";



export const LeftSideBar = () => {
  let response;
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const logoutHandle = async () => {
    try {
      const response = await axios.get("/api/v1/users/logout", {
        withCredentials: true,
      });
      if (response.data.success) {
        dispatch(setAuthUser(null))
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      navigate("/login");
    }
  };

  const sideBarHandler = (textType) => {
    if (textType === "Logout") {
      logoutHandle();
    } else if (textType == "Create") {
      setOpen(true)
    }
  };
  let username = `${user?.data.user.username}`
  // username only contain 10 letters
  let completedUsername = username.slice(0, 10);
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
          {/* profilePicture */}
          <AvatarImage src={user ? `${user?.data.user.profilePicture}` : <AvatarFallback>CN</AvatarFallback>} alt={user?.data.user.username} />

          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      text: user ? `${completedUsername}` : "Profile",
    },
  ];
  return (
    <>

      <div className="fixed   md:block top-0 z-10 mt-20 left-0 md:px-4  border-r-[1px] border-gray-700 h-screen  md:w-[16%]">
        <div className="flex flex-col  ">
          <div>
            {sidebarItems.map((item, index) => {
              return (
                <div
                  onClick={() => sideBarHandler(item.text)}
                  key={index}
                  className="flex items-center gap-3  relative  hover:bg-gray-900 cursor-pointer rounded-lg p-3 my-3 "
                >
                  {item.icon}
                  <span className=" hidden md:flex"> {item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 threads left-0 bottom-0 py-4 md:px-3 mb-4">
          <div class="x9f619 md:flex hover:bg-gray-900 hidden cursor-pointer rounded-lg md:p-3 items-center gap-3  w-[210px] x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
            <div>
              <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                  <svg
                    aria-label=""
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 192 192"
                    width="24"
                  >
                    <title></title>
                    <path
                      class="xcslo1z"
                      d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
                    ></path>
                  </svg>
                </div>
                <div data-visualcompletion="ignore" class=""></div>
              </div>
            </div>
            <div
              class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
              className="opacity:1"
            >
              <div className="width:100%">
                <div class="" className="width:100%">
                  <span
                    class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
                    dir="auto"
                    className="line-height:var(--base-line-clamp-line-height);--base-line-clamp-line-height:20px"
                  >
                    <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
                      Threads
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="x6s0dn4 x78zum5 xds687c x5yr21d xg01cxk x1ye3gou xn6708d x10l6tqk x13vifvy">
              <svg
                aria-label=""
                class="x1lliihq x1n2onr6 x1cp0k07"
                fill="currentColor"
                height="16"
                role="img"
                viewBox="0 0 24 24"
                width="16"
              >
                <title></title>
                <path d="M22 14a1 1 0 0 0-1 1v4a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2V5a2.002 2.002 0 0 1 2-2h4a1 1 0 0 0 0-2H5a4.004 4.004 0 0 0-4 4v14a4.004 4.004 0 0 0 4 4h14a4.004 4.004 0 0 0 4-4v-4a1 1 0 0 0-1-1Zm0-13h-7a1 1 0 0 0 0 2h4.586L7.293 15.293a1 1 0 1 0 1.414 1.414L21 4.414V9a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Z"></path>
              </svg>
            </div>
          </div>

          {/* Second main div for menu button */}
          <div className="x9f619 block md:flex items-center w-[210px] hover:bg-gray-900 text-white gap-3 md:px-3 cursor-pointer rounded-lg md:p-3 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
            {/* <div className="hidden md:flex">
              <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
                  <svg
                    aria-label="Settings"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Settings</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="3"
                      x2="21"
                      y1="4"
                      y2="4"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="3"
                      x2="21"
                      y1="12"
                      y2="12"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="3"
                      x2="21"
                      y1="20"
                      y2="20"
                    ></line>
                  </svg>
                </div>
              </div>
            </div> */}
            <div className="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx">
              <DropdownMenu className="text-white translate-x-0 translate-y-0">
                <DropdownMenuTrigger asChild>
                  <div className="dm:flex lg:flex  justify-center items-center gap-2">
                    <span className="block p-3 lg:hidden"><MenuIcon /></span>   {/* Visible on small screens */}
                    <Button className="hidden lg:block"><MenuIcon /></Button>   {/* Visible on small screens */}
                    <span className="hidden lg:block">More</span>   {/* Visible on large screens */}
                  </div>

                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {/* Dropdown Menu Items */}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logoutHandle}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <CreatePost open={open} setOpen={setOpen} />
      </div>
    </>
  );
};