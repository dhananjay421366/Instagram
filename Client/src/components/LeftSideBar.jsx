// // import {
// //   Heart,
// //   Home,
// //   LogOut,
// //   Menu,
// //   MessageCircle,
// //   PlusSquare,
// //   Search,
// //   TrendingUp,
// // } from "lucide-react";
// // import React from "react";
// // import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// // import { toast } from "sonner";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   Cloud,
// //   CreditCard,
// //   Github,
// //   Keyboard,
// //   LifeBuoy,
// //   Mail,
// //   MessageSquare,
// //   Plus,
// //   PlusCircle,
// //   Settings,
// //   User,
// //   UserPlus,
// //   Users,
// // } from "lucide-react";

// // import { Button } from "@/components/ui/button";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuGroup,
// //   DropdownMenuItem,
// //   DropdownMenuLabel,
// //   DropdownMenuPortal,
// //   DropdownMenuSeparator,
// //   DropdownMenuShortcut,
// //   DropdownMenuSub,
// //   DropdownMenuSubContent,
// //   DropdownMenuSubTrigger,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";

// // const sidebarItems = [
// //   {
// //     icon: <Home />,
// //     text: "Home",
// //   },
// //   {
// //     icon: <Search />,
// //     text: "Search",
// //   },
// //   {
// //     icon: <TrendingUp />,
// //     text: "Explore",
// //   },
// //   {
// //     icon: <MessageCircle />,
// //     text: "Messages",
// //   },
// //   {
// //     icon: <Heart />,
// //     text: "Notification",
// //   },
// //   {
// //     icon: <PlusSquare />,
// //     text: "Creaet",
// //   },
// //   {
// //     icon: (
// //       <Avatar className="w-6 h-6">
// //         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
// //         <AvatarFallback>CN</AvatarFallback>
// //       </Avatar>
// //     ),
// //     text: "profile",
// //   },
// // ];

// // export const LeftSideBar = () => {
// //   const navigate = useNavigate();
// //   const logoutHandle = async () => {
// //         try {
// //           const response = await axios.get("/api/v1/users/logout", {
// //             withCredentials: true,
// //           });
// //           if (response.data.success) {
// //             navigate("/login");
// //             toast.success(response.data.message);
// //           }
// //         } catch (error) {
// //           toast.error(error.response.data.message);
// //         }finally{
// //           navigate("/login");
// //         }
// //       };
// //   const sideBarHandler = (textType) => {
// //     if (textType === "Logout") {
// //       logoutHandle();
// //     }
// //   };


// //   return (
// //     <>
// //       <div className="md:flex w-full px-6 p-8 hidden">
// //         <div class="x2lah0s x1to3lk4 x1n2onr6  xh8yej3">
// //           <div class="x9f619 hidden md:flex fixed  x1r3wxaz x9tmck8 xn6708d x1l90r2v x1ye3gou xh8yej3 xxz18i5 x10l6tqk x17qophe x13vifvy">
// //             <div className="opacity: 0.270306;">
// //               <a
// //                 class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
// //                 href="/"
// //                 role="link"
// //                 tabindex="0"
// //               >
// //                 <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1">
// //                   <div class="x1qjc9v5 x9f619 x78zum5 xdt5ytf xln7xf2 xk390pu x1xmf6yo x1n2onr6 x1y2wqyl x11njtxf">
// //                     <svg
// //                       aria-label="Instagram"
// //                       class="x1lliihq x1n2onr6 x5n08af"
// //                       fill="currentColor"
// //                       height="29"
// //                       role="img"
// //                       viewBox="32 4 113 32"
// //                       width="103"
// //                     >
// //                       <title>Instagram</title>
// //                       <path
// //                         clip-rule="evenodd"
// //                         d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
// //                         fill="currentColor"
// //                         fill-rule="evenodd"
// //                       ></path>
// //                     </svg>
// //                   </div>
// //                 </div>
// //               </a>
// //             </div>
// //           </div>
// //           <div class="xxz18i5 md:hidden flex x10l6tqk x17qophe x13vifvy x1lliihq x14vqqas x1kjsxda x1useyqa">
// //             <div className="transform: scale(0.729694);">
// //               <span
// //                 aria-describedby=":rp:"
// //                 class="x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j"
// //               >
// //                 <div class="x1n2onr6">
// //                   <a
// //                     class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
// //                     href="/"
// //                     role="link"
// //                     tabindex="0"
// //                   >
// //                     <div class="x9f619 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
// //                       <div>
// //                         <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
// //                           <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
// //                             <svg
// //                               aria-label="Instagram"
// //                               class="x1lliihq x1n2onr6 x5n08af"
// //                               fill="currentColor"
// //                               height="24"
// //                               role="img"
// //                               viewBox="0 0 24 24"
// //                               width="24"
// //                             >
// //                               <title>Instagram</title>
// //                               <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
// //                             </svg>
// //                           </div>
// //                         </div>
// //                       </div>
// //                       <div
// //                         class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
// //                         className="opacity: 1;"
// //                       >
// //                         <div className="width: 100%;">
// //                           <div class="" className="width: 100%;">
// //                             <span
// //                               class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
// //                               dir="auto"
// //                               className="line-height: var(--base-line-clamp-line-height); --base-line-clamp-line-height: 20px;"
// //                             >
// //                               <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"></span>
// //                             </span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </a>
// //                 </div>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="fixed hidden  md:block top-0 z-10 mt-16 left-0 px-4 border-r h-screen  md:w-[16%]">
// //         <div className="flex flex-col  ">
// //           <div>
// //             {sidebarItems.map((item, index) => {
// //               return (
// //                 <div
// //                   onClick={() => sideBarHandler(item.text)}
// //                   key={index}
// //                   className="flex items-center gap-3  relative  hover:bg-gray-900 cursor-pointer rounded-lg p-3 my-3 "
// //                 >
// //                   {item.icon}
// //                   <span className="hidden md:flex"> {item.text}</span>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //         <div className="flex flex-col gap-3 threads left-0 bottom-0 py-4 md:px-3 mb-4">
// //           {/* First main div */}
// //           <div class="x9f619 md:flex hover:bg-gray-900 hidden cursor-pointer rounded-lg md:p-3 items-center gap-3  w-[210px] x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
// //             <div>
// //               <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
// //                 <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
// //                   <svg
// //                     aria-label=""
// //                     class="x1lliihq x1n2onr6 x5n08af"
// //                     fill="currentColor"
// //                     height="24"
// //                     role="img"
// //                     viewBox="0 0 192 192"
// //                     width="24"
// //                   >
// //                     <title></title>
// //                     <path
// //                       class="xcslo1z"
// //                       d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
// //                     ></path>
// //                   </svg>
// //                 </div>
// //                 <div data-visualcompletion="ignore" class=""></div>
// //               </div>
// //             </div>
// //             <div
// //               class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
// //               className="opacity:1"
// //             >
// //               <div className="width:100%">
// //                 <div class="" className="width:100%">
// //                   <span
// //                     class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
// //                     dir="auto"
// //                     className="line-height:var(--base-line-clamp-line-height);--base-line-clamp-line-height:20px"
// //                   >
// //                     <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
// //                       Threads
// //                     </span>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //             <div class="x6s0dn4 x78zum5 xds687c x5yr21d xg01cxk x1ye3gou xn6708d x10l6tqk x13vifvy">
// //               <svg
// //                 aria-label=""
// //                 class="x1lliihq x1n2onr6 x1cp0k07"
// //                 fill="currentColor"
// //                 height="16"
// //                 role="img"
// //                 viewBox="0 0 24 24"
// //                 width="16"
// //               >
// //                 <title></title>
// //                 <path d="M22 14a1 1 0 0 0-1 1v4a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2V5a2.002 2.002 0 0 1 2-2h4a1 1 0 0 0 0-2H5a4.004 4.004 0 0 0-4 4v14a4.004 4.004 0 0 0 4 4h14a4.004 4.004 0 0 0 4-4v-4a1 1 0 0 0-1-1Zm0-13h-7a1 1 0 0 0 0 2h4.586L7.293 15.293a1 1 0 1 0 1.414 1.414L21 4.414V9a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Z"></path>
// //               </svg>
// //             </div>
// //           </div>
// //           {/* second main div for menu button */}
// //           <div class="x9f619 block md:flex  items-center w-[210px] hover:bg-gray-900  text-white gap-3 md:px-3 cursor-pointer rounded-lg md:p-3  x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
// //             <div className="hidden md:flex">
// //               <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
// //                 <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
// //                   <svg
// //                     aria-label="Settings"
// //                     class="x1lliihq x1n2onr6 x5n08af"
// //                     fill="currentColor"
// //                     height="24"
// //                     role="img"
// //                     viewBox="0 0 24 24"
// //                     width="24"
// //                   >
// //                     <title>Settings</title>
// //                     <line
// //                       fill="none"
// //                       stroke="currentColor"
// //                       stroke-linecap="round"
// //                       stroke-linejoin="round"
// //                       stroke-width="2"
// //                       x1="3"
// //                       x2="21"
// //                       y1="4"
// //                       y2="4"
// //                     ></line>
// //                     <line
// //                       fill="none"
// //                       stroke="currentColor"
// //                       stroke-linecap="round"
// //                       stroke-linejoin="round"
// //                       stroke-width="2"
// //                       x1="3"
// //                       x2="21"
// //                       y1="12"
// //                       y2="12"
// //                     ></line>
// //                     <line
// //                       fill="none"
// //                       stroke="currentColor"
// //                       stroke-linecap="round"
// //                       stroke-linejoin="round"
// //                       stroke-width="2"
// //                       x1="3"
// //                       x2="21"
// //                       y1="20"
// //                       y2="20"
// //                     ></line>
// //                   </svg>
// //                 </div>
// //               </div>
// //             </div>
// //             <div
// //               class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
// //               className="opacity:1"
// //             >
// //               <div className="width:100%">
// //                 <div class="" className="width:100%">
// //                   <span
// //                     class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
// //                     dir="auto"
// //                     className=""
// //                   >
// //                     <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
// //                       <DropdownMenu className="text-white translate-x-0 translate-y-0">
// //                         <DropdownMenuTrigger asChild>
// //                           <Button>More</Button>
// //                         </DropdownMenuTrigger>
// //                         <DropdownMenuContent className="w-56">
// //                           <DropdownMenuLabel>Saved</DropdownMenuLabel>
// //                           <DropdownMenuSeparator />
// //                           <DropdownMenuGroup>
// //                             <DropdownMenuItem>
// //                               <Settings className="mr-2 h-4 w-4" />
// //                               <span>Settings</span>
// //                               <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
// //                             </DropdownMenuItem>
// //                           </DropdownMenuGroup>
// //                           <DropdownMenuSeparator />
// //                           <DropdownMenuGroup>
// //                             <DropdownMenuItem>
// //                               <Users className="mr-2 h-4 w-4" />
// //                               <span>Switch apperence</span>
// //                             </DropdownMenuItem>
// //                             <DropdownMenuSub>
// //                               <DropdownMenuSubTrigger>
// //                                 <UserPlus className="mr-2 h-4 w-4" />
// //                                 <span>Invite users</span>
// //                               </DropdownMenuSubTrigger>
// //                               <DropdownMenuPortal>
// //                                 <DropdownMenuSubContent>
// //                                   <DropdownMenuItem>
// //                                     <Mail className="mr-2 h-4 w-4" />
// //                                     <span>Email</span>
// //                                   </DropdownMenuItem>
// //                                   <DropdownMenuItem>
// //                                     <MessageSquare className="mr-2 h-4 w-4" />
// //                                     <span>Message</span>
// //                                   </DropdownMenuItem>
// //                                   <DropdownMenuSeparator />
// //                                   <DropdownMenuItem>
// //                                     <PlusCircle className="mr-2 h-4 w-4" />
// //                                     <span>More...</span>
// //                                   </DropdownMenuItem>
// //                                 </DropdownMenuSubContent>
// //                               </DropdownMenuPortal>
// //                             </DropdownMenuSub>
// //                             <DropdownMenuItem>
// //                               <Plus className="mr-2 h-4 w-4" />
// //                               <span>New Team</span>
// //                               <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
// //                             </DropdownMenuItem>
// //                           </DropdownMenuGroup>
// //                           <DropdownMenuSeparator />
// //                           <DropdownMenuItem>
// //                             <Github className="mr-2 h-4 w-4" />
// //                             <span>GitHub</span>
// //                           </DropdownMenuItem>
// //                           <DropdownMenuItem>
// //                             <LifeBuoy className="mr-2 h-4 w-4" />
// //                             <span>Support</span>
// //                           </DropdownMenuItem>
// //                           <DropdownMenuItem disabled>
// //                             <Cloud className="mr-2 h-4 w-4" />
// //                             <span>API</span>
// //                           </DropdownMenuItem>
// //                           <DropdownMenuSeparator  onClick={logoutHandle}/>
// //                           <DropdownMenuItem>
// //                             <LogOut  className="mr-2 h-4 w-4" />
// //                             <span>Log out</span>
// //                             <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
// //                           </DropdownMenuItem>
// //                         </DropdownMenuContent>
// //                       </DropdownMenu>
// //                     </span>
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// import {
//   Heart,
//   Home,
//   LogOut,
//   Menu,
//   MessageCircle,
//   PlusSquare,
//   Search,
//   TrendingUp,
// } from "lucide-react";
// import React, { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { toast } from "sonner";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
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



// export const LeftSideBar = () => {
//   let response;
//   const navigate = useNavigate();
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch()
//   const [open, setOpen] = useState(false)
//   const logoutHandle = async () => {
//     try {
//       const response = await axios.get("/api/v1/users/logout", {
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         dispatch(setAuthUser(null))
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
//     } else if (textType == "Create") {
//       setOpen(true)
//     }
//   };
//   let username = `${user?.data.user?.username}`
//   // username only contain 10 letters
//   let completedUsername = username.slice(0, 10);
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
//           {/* profilePicture */}
//           <AvatarImage src={user ? `${user?.data.user?.profilePicture}` : <AvatarFallback>CN</AvatarFallback>} alt={user?.data.user.username} />

//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       ),
//       text: user ? `${completedUsername}` : "Profile",
//     },
//   ];
//   return (
//     <>
//       {
//         user ? <> <div className="md:flex w-full px-6 p-8 hidden text-black ">
//           <div class="x2lah0s x1to3lk4 x1n2onr6  xh8yej3">
//             <div class="x9f619 hidden md:flex fixed  x1r3wxaz x9tmck8 xn6708d x1l90r2YYYv x1ye3gou xh8yej3 xxz18i5 x10l6tqk x17qophe x13vifvy">
//               <div className="opacity: 0.270306;">
//                 <a
//                   class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
//                   href="/"
//                   role="link"
//                   tabindex="0"
//                 >
//                   <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1">
//                     <div class="x1qjc9v5 x9f619 x78zum5 xdt5ytf xln7xf2 xk390pu x1xmf6yo x1n2onr6 x1y2wqyl x11njtxf">
//                       <svg
//                         aria-label="Instagram"
//                         class="x1lliihq x1n2onr6 x5n08af"
//                         fill="currentColor"
//                         height="29"
//                         role="img"
//                         viewBox="32 4 113 32"
//                         width="103"
//                       >
//                         <title>Instagram</title>
//                         <path
//                           clip-rule="evenodd"
//                           d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
//                           fill="currentColor"
//                           fill-rule="evenodd"
//                         ></path>
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//             <div class="xxz18i5 md:hidden flex x10l6tqk x17qophe x13vifvy x1lliihq x14vqqas x1kjsxda x1useyqa">
//               <div className="transform: scale(0.729694);">
//                 <span
//                   aria-describedby=":rp:"
//                   class="x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j"
//                 >
//                   <div class="x1n2onr6">
//                     <a
//                       class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
//                       href="/"
//                       role="link"
//                       tabindex="0"
//                     >
//                       <div class="x9f619 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//                         <div>
//                           <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//                             <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
//                               <svg
//                                 aria-label="Instagram"
//                                 class="x1lliihq x1n2onr6 x5n08af"
//                                 fill="currentColor"
//                                 height="24"
//                                 role="img"
//                                 viewBox="0 0 24 24"
//                                 width="24"
//                               >
//                                 <title>Instagram</title>
//                                 <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
//                               </svg>
//                             </div>
//                           </div>
//                         </div>
//                         <div
//                           class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
//                           className="opacity: 1;"
//                         >
//                           <div className="width: 100%;">
//                             <div class="" className="width: 100%;">
//                               <span
//                                 class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
//                                 dir="auto"
//                                 className="line-height: var(--base-line-clamp-line-height); --base-line-clamp-line-height: 20px;"
//                               >
//                                 <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"></span>
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//           <div className="fixed hidden  md:block top-0 z-10 mt-16 left-0 px-4  border-r-[1px] border-gray-700 h-screen  md:w-[16%]">
//             <div className="flex flex-col  ">
//               <div>
//                 {sidebarItems.map((item, index) => {
//                   return (
//                     <div
//                       onClick={() => sideBarHandler(item.text)}
//                       key={index}
//                       className="flex items-center gap-3  relative  hover:bg-gray-900 cursor-pointer rounded-lg p-3 my-3 "
//                     >
//                       {item.icon}
//                       <span className="hidden md:flex"> {item.text}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//             <div className="flex flex-col gap-3 threads left-0 bottom-0 py-4 md:px-3 mb-4">
//               <div class="x9f619 md:flex hover:bg-gray-900 hidden cursor-pointer rounded-lg md:p-3 items-center gap-3  w-[210px] x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//                 <div>
//                   <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//                     <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
//                       <svg
//                         aria-label=""
//                         class="x1lliihq x1n2onr6 x5n08af"
//                         fill="currentColor"
//                         height="24"
//                         role="img"
//                         viewBox="0 0 192 192"
//                         width="24"
//                       >
//                         <title></title>
//                         <path
//                           class="xcslo1z"
//                           d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div data-visualcompletion="ignore" class=""></div>
//                   </div>
//                 </div>
//                 <div
//                   class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
//                   className="opacity:1"
//                 >
//                   <div className="width:100%">
//                     <div class="" className="width:100%">
//                       <span
//                         class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
//                         dir="auto"
//                         className="line-height:var(--base-line-clamp-line-height);--base-line-clamp-line-height:20px"
//                       >
//                         <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
//                           Threads
//                         </span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="x6s0dn4 x78zum5 xds687c x5yr21d xg01cxk x1ye3gou xn6708d x10l6tqk x13vifvy">
//                   <svg
//                     aria-label=""
//                     class="x1lliihq x1n2onr6 x1cp0k07"
//                     fill="currentColor"
//                     height="16"
//                     role="img"
//                     viewBox="0 0 24 24"
//                     width="16"
//                   >
//                     <title></title>
//                     <path d="M22 14a1 1 0 0 0-1 1v4a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2V5a2.002 2.002 0 0 1 2-2h4a1 1 0 0 0 0-2H5a4.004 4.004 0 0 0-4 4v14a4.004 4.004 0 0 0 4 4h14a4.004 4.004 0 0 0 4-4v-4a1 1 0 0 0-1-1Zm0-13h-7a1 1 0 0 0 0 2h4.586L7.293 15.293a1 1 0 1 0 1.414 1.414L21 4.414V9a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Z"></path>
//                   </svg>
//                 </div>
//               </div>

//               {/* Second main div for menu button */}
//               <div className="x9f619 block md:flex items-center w-[210px] hover:bg-gray-900 text-white gap-3 md:px-3 cursor-pointer rounded-lg md:p-3 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//                 <div className="hidden md:flex">
//                   <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//                     <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
//                       <svg
//                         aria-label="Settings"
//                         class="x1lliihq x1n2onr6 x5n08af"
//                         fill="currentColor"
//                         height="24"
//                         role="img"
//                         viewBox="0 0 24 24"
//                         width="24"
//                       >
//                         <title>Settings</title>
//                         <line
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           x1="3"
//                           x2="21"
//                           y1="4"
//                           y2="4"
//                         ></line>
//                         <line
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           x1="3"
//                           x2="21"
//                           y1="12"
//                           y2="12"
//                         ></line>
//                         <line
//                           fill="none"
//                           stroke="currentColor"
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           x1="3"
//                           x2="21"
//                           y1="20"
//                           y2="20"
//                         ></line>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx">
//                   <DropdownMenu className="text-white translate-x-0 translate-y-0">
//                     <DropdownMenuTrigger asChild>
//                       <Button>More</Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="w-56">
//                       {/* Dropdown Menu Items */}
//                       <DropdownMenuSeparator />
//                       <DropdownMenuItem onClick={logoutHandle}>
//                         <LogOut className="mr-2 h-4 w-4" />
//                         <span>Log out</span>
//                         <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//               </div>
//             </div>
//             <CreatePost open={open} setOpen={setOpen} />
//           </div>:</> : ""
//       }
//     </>
//   );
// };

// import {
//   Heart,
//   Home,
//   LogOut,
//   Menu,
//   MessageCircle,
//   PlusSquare,
//   Search,
//   TrendingUp,
// } from "lucide-react";
// import React from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { toast } from "sonner";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
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

// const sidebarItems = [
//   {
//     icon: <Home />,
//     text: "Home",
//   },
//   {
//     icon: <Search />,
//     text: "Search",
//   },
//   {
//     icon: <TrendingUp />,
//     text: "Explore",
//   },
//   {
//     icon: <MessageCircle />,
//     text: "Messages",
//   },
//   {
//     icon: <Heart />,
//     text: "Notification",
//   },
//   {
//     icon: <PlusSquare />,
//     text: "Creaet",
//   },
//   {
//     icon: (
//       <Avatar className="w-6 h-6">
//         <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//         <AvatarFallback>CN</AvatarFallback>
//       </Avatar>
//     ),
//     text: "profile",
//   },
// ];

// export const LeftSideBar = () => {
//   const navigate = useNavigate();
//   const logoutHandle = async () => {
//         try {
//           const response = await axios.get("/api/v1/users/logout", {
//             withCredentials: true,
//           });
//           if (response.data.success) {
//             navigate("/login");
//             toast.success(response.data.message);
//           }
//         } catch (error) {
//           toast.error(error.response.data.message);
//         }finally{
//           navigate("/login");
//         }
//       };
//   const sideBarHandler = (textType) => {
//     if (textType === "Logout") {
//       logoutHandle();
//     }
//   };


//   return (
//     <>
//       <div className="md:flex w-full px-6 p-8 hidden">
//         <div class="x2lah0s x1to3lk4 x1n2onr6  xh8yej3">
//           <div class="x9f619 hidden md:flex fixed  x1r3wxaz x9tmck8 xn6708d x1l90r2v x1ye3gou xh8yej3 xxz18i5 x10l6tqk x17qophe x13vifvy">
//             <div className="opacity: 0.270306;">
//               <a
//                 class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
//                 href="/"
//                 role="link"
//                 tabindex="0"
//               >
//                 <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1">
//                   <div class="x1qjc9v5 x9f619 x78zum5 xdt5ytf xln7xf2 xk390pu x1xmf6yo x1n2onr6 x1y2wqyl x11njtxf">
//                     <svg
//                       aria-label="Instagram"
//                       class="x1lliihq x1n2onr6 x5n08af"
//                       fill="currentColor"
//                       height="29"
//                       role="img"
//                       viewBox="32 4 113 32"
//                       width="103"
//                     >
//                       <title>Instagram</title>
//                       <path
//                         clip-rule="evenodd"
//                         d="M37.82 4.11c-2.32.97-4.86 3.7-5.66 7.13-1.02 4.34 3.21 6.17 3.56 5.57.4-.7-.76-.94-1-3.2-.3-2.9 1.05-6.16 2.75-7.58.32-.27.3.1.3.78l-.06 14.46c0 3.1-.13 4.07-.36 5.04-.23.98-.6 1.64-.33 1.9.32.28 1.68-.4 2.46-1.5a8.13 8.13 0 0 0 1.33-4.58c.07-2.06.06-5.33.07-7.19 0-1.7.03-6.71-.03-9.72-.02-.74-2.07-1.51-3.03-1.1Zm82.13 14.48a9.42 9.42 0 0 1-.88 3.75c-.85 1.72-2.63 2.25-3.39-.22-.4-1.34-.43-3.59-.13-5.47.3-1.9 1.14-3.35 2.53-3.22 1.38.13 2.02 1.9 1.87 5.16ZM96.8 28.57c-.02 2.67-.44 5.01-1.34 5.7-1.29.96-3 .23-2.65-1.72.31-1.72 1.8-3.48 4-5.64l-.01 1.66Zm-.35-10a10.56 10.56 0 0 1-.88 3.77c-.85 1.72-2.64 2.25-3.39-.22-.5-1.69-.38-3.87-.13-5.25.33-1.78 1.12-3.44 2.53-3.44 1.38 0 2.06 1.5 1.87 5.14Zm-13.41-.02a9.54 9.54 0 0 1-.87 3.8c-.88 1.7-2.63 2.24-3.4-.23-.55-1.77-.36-4.2-.13-5.5.34-1.95 1.2-3.32 2.53-3.2 1.38.14 2.04 1.9 1.87 5.13Zm61.45 1.81c-.33 0-.49.35-.61.93-.44 2.02-.9 2.48-1.5 2.48-.66 0-1.26-1-1.42-3-.12-1.58-.1-4.48.06-7.37.03-.59-.14-1.17-1.73-1.75-.68-.25-1.68-.62-2.17.58a29.65 29.65 0 0 0-2.08 7.14c0 .06-.08.07-.1-.06-.07-.87-.26-2.46-.28-5.79 0-.65-.14-1.2-.86-1.65-.47-.3-1.88-.81-2.4-.2-.43.5-.94 1.87-1.47 3.48l-.74 2.2.01-4.88c0-.5-.34-.67-.45-.7a9.54 9.54 0 0 0-1.8-.37c-.48 0-.6.27-.6.67 0 .05-.08 4.65-.08 7.87v.46c-.27 1.48-1.14 3.49-2.09 3.49s-1.4-.84-1.4-4.68c0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81-.01-.5-.87-.75-1.27-.85-.4-.09-.76-.13-1.03-.11-.4.02-.67.27-.67.62v.55a3.71 3.71 0 0 0-1.83-1.49c-1.44-.43-2.94-.05-4.07 1.53a9.31 9.31 0 0 0-1.66 4.73c-.16 1.5-.1 3.01.17 4.3-.33 1.44-.96 2.04-1.64 2.04-.99 0-1.7-1.62-1.62-4.4.06-1.84.42-3.13.82-4.99.17-.8.04-1.2-.31-1.6-.32-.37-1-.56-1.99-.33-.7.16-1.7.34-2.6.47 0 0 .05-.21.1-.6.23-2.03-1.98-1.87-2.69-1.22-.42.39-.7.84-.82 1.67-.17 1.3.9 1.91.9 1.91a22.22 22.22 0 0 1-3.4 7.23v-.7c-.01-3.36.03-6 .05-6.95.02-.94.06-1.63.06-1.8 0-.36-.22-.5-.66-.67-.4-.16-.86-.26-1.34-.3-.6-.05-.97.27-.96.65v.52a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.94-.05-4.07 1.53a10.1 10.1 0 0 0-1.66 4.72c-.15 1.57-.13 2.9.09 4.04-.23 1.13-.89 2.3-1.63 2.3-.95 0-1.5-.83-1.5-4.67 0-2.24.07-3.21.1-4.83.02-.94.06-1.65.06-1.81 0-.5-.87-.75-1.27-.85-.42-.1-.79-.13-1.06-.1-.37.02-.63.35-.63.6v.56a3.7 3.7 0 0 0-1.84-1.49c-1.44-.43-2.93-.04-4.07 1.53-.75 1.03-1.35 2.17-1.66 4.7a15.8 15.8 0 0 0-.12 2.04c-.3 1.81-1.61 3.9-2.68 3.9-.63 0-1.23-1.21-1.23-3.8 0-3.45.22-8.36.25-8.83l1.62-.03c.68 0 1.29.01 2.19-.04.45-.02.88-1.64.42-1.84-.21-.09-1.7-.17-2.3-.18-.5-.01-1.88-.11-1.88-.11s.13-3.26.16-3.6c.02-.3-.35-.44-.57-.53a7.77 7.77 0 0 0-1.53-.44c-.76-.15-1.1 0-1.17.64-.1.97-.15 3.82-.15 3.82-.56 0-2.47-.11-3.02-.11-.52 0-1.08 2.22-.36 2.25l3.2.09-.03 6.53v.47c-.53 2.73-2.37 4.2-2.37 4.2.4-1.8-.42-3.15-1.87-4.3-.54-.42-1.6-1.22-2.79-2.1 0 0 .69-.68 1.3-2.04.43-.96.45-2.06-.61-2.3-1.75-.41-3.2.87-3.63 2.25a2.61 2.61 0 0 0 .5 2.66l.15.19c-.4.76-.94 1.78-1.4 2.58-1.27 2.2-2.24 3.95-2.97 3.95-.58 0-.57-1.77-.57-3.43 0-1.43.1-3.58.19-5.8.03-.74-.34-1.16-.96-1.54a4.33 4.33 0 0 0-1.64-.69c-.7 0-2.7.1-4.6 5.57-.23.69-.7 1.94-.7 1.94l.04-6.57c0-.16-.08-.3-.27-.4a4.68 4.68 0 0 0-1.93-.54c-.36 0-.54.17-.54.5l-.07 10.3c0 .78.02 1.69.1 2.09.08.4.2.72.36.91.15.2.33.34.62.4.28.06 1.78.25 1.86-.32.1-.69.1-1.43.89-4.2 1.22-4.31 2.82-6.42 3.58-7.16.13-.14.28-.14.27.07l-.22 5.32c-.2 5.37.78 6.36 2.17 6.36 1.07 0 2.58-1.06 4.2-3.74l2.7-4.5 1.58 1.46c1.28 1.2 1.7 2.36 1.42 3.45-.21.83-1.02 1.7-2.44.86-.42-.25-.6-.44-1.01-.71-.23-.15-.57-.2-.78-.04-.53.4-.84.92-1.01 1.55-.17.61.45.94 1.09 1.22.55.25 1.74.47 2.5.5 2.94.1 5.3-1.42 6.94-5.34.3 3.38 1.55 5.3 3.72 5.3 1.45 0 2.91-1.88 3.55-3.72.18.75.45 1.4.8 1.96 1.68 2.65 4.93 2.07 6.56-.18.5-.69.58-.94.58-.94a3.07 3.07 0 0 0 2.94 2.87c1.1 0 2.23-.52 3.03-2.31.09.2.2.38.3.56 1.68 2.65 4.93 2.07 6.56-.18l.2-.28.05 1.4-1.5 1.37c-2.52 2.3-4.44 4.05-4.58 6.09-.18 2.6 1.93 3.56 3.53 3.69a4.5 4.5 0 0 0 4.04-2.11c.78-1.15 1.3-3.63 1.26-6.08l-.06-3.56a28.55 28.55 0 0 0 5.42-9.44s.93.01 1.92-.05c.32-.02.41.04.35.27-.07.28-1.25 4.84-.17 7.88.74 2.08 2.4 2.75 3.4 2.75 1.15 0 2.26-.87 2.85-2.17l.23.42c1.68 2.65 4.92 2.07 6.56-.18.37-.5.58-.94.58-.94.36 2.2 2.07 2.88 3.05 2.88 1.02 0 2-.42 2.78-2.28.03.82.08 1.49.16 1.7.05.13.34.3.56.37.93.34 1.88.18 2.24.11.24-.05.43-.25.46-.75.07-1.33.03-3.56.43-5.21.67-2.79 1.3-3.87 1.6-4.4.17-.3.36-.35.37-.03.01.64.04 2.52.3 5.05.2 1.86.46 2.96.65 3.3.57 1 1.27 1.05 1.83 1.05.36 0 1.12-.1 1.05-.73-.03-.31.02-2.22.7-4.96.43-1.79 1.15-3.4 1.41-4 .1-.21.15-.04.15 0-.06 1.22-.18 5.25.32 7.46.68 2.98 2.65 3.32 3.34 3.32 1.47 0 2.67-1.12 3.07-4.05.1-.7-.05-1.25-.48-1.25Z"
//                         fill="currentColor"
//                         fill-rule="evenodd"
//                       ></path>
//                     </svg>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//           <div class="xxz18i5 md:hidden flex x10l6tqk x17qophe x13vifvy x1lliihq x14vqqas x1kjsxda x1useyqa">
//             <div className="transform: scale(0.729694);">
//               <span
//                 aria-describedby=":rp:"
//                 class="x4k7w5x x1h91t0o x1h9r5lt x1jfb8zj xv2umb2 x1beo9mf xaigb6o x12ejxvf x3igimt xarpa2k xedcshv x1lytzrv x1t2pt76 x7ja8zs x1qrby5j"
//               >
//                 <div class="x1n2onr6">
//                   <a
//                     class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
//                     href="/"
//                     role="link"
//                     tabindex="0"
//                   >
//                     <div class="x9f619 x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//                       <div>
//                         <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//                           <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
//                             <svg
//                               aria-label="Instagram"
//                               class="x1lliihq x1n2onr6 x5n08af"
//                               fill="currentColor"
//                               height="24"
//                               role="img"
//                               viewBox="0 0 24 24"
//                               width="24"
//                             >
//                               <title>Instagram</title>
//                               <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                       <div
//                         class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
//                         className="opacity: 1;"
//                       >
//                         <div className="width: 100%;">
//                           <div class="" className="width: 100%;">
//                             <span
//                               class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
//                               dir="auto"
//                               className="line-height: var(--base-line-clamp-line-height); --base-line-clamp-line-height: 20px;"
//                             >
//                               <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft"></span>
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fixed hidden  md:block top-0 z-10 mt-16 left-0 px-4 border-r h-screen  md:w-[16%]">
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
//                   <span className="hidden md:flex"> {item.text}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <div className="flex flex-col gap-3 threads left-0 bottom-0 py-4 md:px-3 mb-4">
//           {/* First main div */}
//           <div class="x9f619 md:flex hover:bg-gray-900 hidden cursor-pointer rounded-lg md:p-3 items-center gap-3  w-[210px] x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//             <div>
//               <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//                 <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
//                   <svg
//                     aria-label=""
//                     class="x1lliihq x1n2onr6 x5n08af"
//                     fill="currentColor"
//                     height="24"
//                     role="img"
//                     viewBox="0 0 192 192"
//                     width="24"
//                   >
//                     <title></title>
//                     <path
//                       class="xcslo1z"
//                       d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
//                     ></path>
//                   </svg>
//                 </div>
//                 <div data-visualcompletion="ignore" class=""></div>
//               </div>
//             </div>
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
//                     <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
//                       Threads
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div class="x6s0dn4 x78zum5 xds687c x5yr21d xg01cxk x1ye3gou xn6708d x10l6tqk x13vifvy">
//               <svg
//                 aria-label=""
//                 class="x1lliihq x1n2onr6 x1cp0k07"
//                 fill="currentColor"
//                 height="16"
//                 role="img"
//                 viewBox="0 0 24 24"
//                 width="16"
//               >
//                 <title></title>
//                 <path d="M22 14a1 1 0 0 0-1 1v4a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2V5a2.002 2.002 0 0 1 2-2h4a1 1 0 0 0 0-2H5a4.004 4.004 0 0 0-4 4v14a4.004 4.004 0 0 0 4 4h14a4.004 4.004 0 0 0 4-4v-4a1 1 0 0 0-1-1Zm0-13h-7a1 1 0 0 0 0 2h4.586L7.293 15.293a1 1 0 1 0 1.414 1.414L21 4.414V9a1 1 0 0 0 2 0V2a1 1 0 0 0-1-1Z"></path>
//               </svg>
//             </div>
//           </div>
//           {/* second main div for menu button */}
//           <div class="x9f619 block md:flex  items-center w-[210px] hover:bg-gray-900  text-white gap-3 md:px-3 cursor-pointer rounded-lg md:p-3  x3nfvp2 xr9ek0c xjpr12u xo237n4 x6pnmvc x7nr27j x12dmmrz xz9dl7a xn6708d xsag5q8 x1ye3gou x80pfx3 x159b3zp x1dn74xm xif99yt x172qv1o x10djquj x1lhsz42 xzauu7c xdoji71 x1dejxi8 x9k3k5o xs3sg5q x11hdxyr x12ldp4w x1wj20lx x1lq5wgf xgqcy7u x30kzoy x9jhf4c">
//             <div className="hidden md:flex">
//               <div class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//                 <div class="x9f619 xxk0z11 xii2z7h x11xpdln x19c4wfv xvy4d1p">
//                   <svg
//                     aria-label="Settings"
//                     class="x1lliihq x1n2onr6 x5n08af"
//                     fill="currentColor"
//                     height="24"
//                     role="img"
//                     viewBox="0 0 24 24"
//                     width="24"
//                   >
//                     <title>Settings</title>
//                     <line
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       x1="3"
//                       x2="21"
//                       y1="4"
//                       y2="4"
//                     ></line>
//                     <line
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       x1="3"
//                       x2="21"
//                       y1="12"
//                       y2="12"
//                     ></line>
//                     <line
//                       fill="none"
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       x1="3"
//                       x2="21"
//                       y1="20"
//                       y2="20"
//                     ></line>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <div
//               class="x6s0dn4 x9f619 xxk0z11 x6ikm8r xeq5yr9 x1swvt13 x1s85apg xzzcqpx"
//               className="opacity:1"
//             >
//               <div className="width:100%">
//                 <div class="" className="width:100%">
//                   <span
//                     class="x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xl565be xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
//                     dir="auto"
//                     className=""
//                   >
//                     <span class="x1lliihq x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft">
//                       <DropdownMenu className="text-white translate-x-0 translate-y-0">
//                         <DropdownMenuTrigger asChild>
//                           <Button>More</Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className="w-56">
//                           <DropdownMenuLabel>Saved</DropdownMenuLabel>
//                           <DropdownMenuSeparator />
//                           <DropdownMenuGroup>
//                             <DropdownMenuItem>
//                               <Settings className="mr-2 h-4 w-4" />
//                               <span>Settings</span>
//                               <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//                             </DropdownMenuItem>
//                           </DropdownMenuGroup>
//                           <DropdownMenuSeparator />
//                           <DropdownMenuGroup>
//                             <DropdownMenuItem>
//                               <Users className="mr-2 h-4 w-4" />
//                               <span>Switch apperence</span>
//                             </DropdownMenuItem>
//                             <DropdownMenuSub>
//                               <DropdownMenuSubTrigger>
//                                 <UserPlus className="mr-2 h-4 w-4" />
//                                 <span>Invite users</span>
//                               </DropdownMenuSubTrigger>
//                               <DropdownMenuPortal>
//                                 <DropdownMenuSubContent>
//                                   <DropdownMenuItem>
//                                     <Mail className="mr-2 h-4 w-4" />
//                                     <span>Email</span>
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem>
//                                     <MessageSquare className="mr-2 h-4 w-4" />
//                                     <span>Message</span>
//                                   </DropdownMenuItem>
//                                   <DropdownMenuSeparator />
//                                   <DropdownMenuItem>
//                                     <PlusCircle className="mr-2 h-4 w-4" />
//                                     <span>More...</span>
//                                   </DropdownMenuItem>
//                                 </DropdownMenuSubContent>
//                               </DropdownMenuPortal>
//                             </DropdownMenuSub>
//                             <DropdownMenuItem>
//                               <Plus className="mr-2 h-4 w-4" />
//                               <span>New Team</span>
//                               <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//                             </DropdownMenuItem>
//                           </DropdownMenuGroup>
//                           <DropdownMenuSeparator />
//                           <DropdownMenuItem>
//                             <Github className="mr-2 h-4 w-4" />
//                             <span>GitHub</span>
//                           </DropdownMenuItem>
//                           <DropdownMenuItem>
//                             <LifeBuoy className="mr-2 h-4 w-4" />
//                             <span>Support</span>
//                           </DropdownMenuItem>
//                           <DropdownMenuItem disabled>
//                             <Cloud className="mr-2 h-4 w-4" />
//                             <span>API</span>
//                           </DropdownMenuItem>
//                           <DropdownMenuSeparator  onClick={logoutHandle}/>
//                           <DropdownMenuItem>
//                             <LogOut  className="mr-2 h-4 w-4" />
//                             <span>Log out</span>
//                             <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                           </DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

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