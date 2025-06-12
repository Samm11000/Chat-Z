// import React from 'react'
// import { useAuthStore } from '../store/useAuthStore'
// import { MessageSquare ,LogOut,Settings,User} from 'lucide-react';
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//    const {logout,authUser}= useAuthStore();

//   return (
// //   <header className='bg-base-100 border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80'>
// //     <div className='container mx-auto px-4 h-16'>
// //         <div className='flex items-center gap-8'>
// //         <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
// //             <div className='w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center'>
// //                 <MessageSquare className='w-5 h-5 text-primary'/>
// //             </div>
// //             <h1 className='text-lg font-bold'>Chatty</h1>
// //         </Link>
             
// //         </div>
// //         <div className='flex items-center gap-2'>
// //             <Link
// //             to={"/settings"}
// //             className={`btn btn-sm gap-2 transition-colors`}>
// //                 <Settings className="w-4 h-4"/>
// //                 <span className='hidden sm:inline'>
// //                     Settings
// //                 </span>
// //             </Link>
// //             {
// //                 authUser && (
// //                     <>
// //                     <Link to ={"/profile"} className={`btn btn-sm gap-2`}>
// //                         <User className="size-5"/>
// //                         <span className='hidden sm:inline'>Profile</span>
// //                     </Link>
// //                     <button className='flex gap-2 items-center' onClick={logout}>
// //                         <LogOut className="size-5"/>
// //                         <span className='hidden sm:inline'>Logout</span>
// //                     </button>
// //                     </>
// //                 )
// //                 }
            
// //         </div>
// //     </div>
// //   </header>
// <header className='bg-base-100 border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80'>
//   <div className='container mx-auto px-4'>
//     <div className='flex justify-between items-center h-16'>
      
//       {/* Left part */}
//       <div className='flex items-center gap-8'>
//         <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
//           <div className='w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center'>
//             <MessageSquare className='w-5 h-5 text-primary'/>
//           </div>
//           <h1 className='text-lg font-bold'>Chatty</h1>
//         </Link>
//       </div>
      
//       {/* Right part */}
//       <div className='flex items-center gap-2'>
//         <Link to={"/settings"} className={`btn btn-sm gap-2 transition-colors`}>
//           <Settings className="w-4 h-4"/>
//           <span className='hidden sm:inline'>Settings</span>
//         </Link>

//         {authUser && (
//           <>
//             <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//               <User className="w-5 h-5"/>
//               <span className='hidden sm:inline'>Profile</span>
//             </Link>
//             <button className='flex gap-2 items-center btn btn-sm' onClick={logout}>
//               <LogOut className="w-5 h-5"/>
//               <span className='hidden sm:inline'>Logout</span>
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   </div>
// </header>

//   )
// }

// export default Navbar



//v2
// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/useAuthStore";
// import { LogOut, MessageSquare, Settings, User } from "lucide-react";

// const Navbar = () => {
//   const { logout, authUser } = useAuthStore();

//   return (
//     <header
//       className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
//     backdrop-blur-lg bg-base-100/80"
//     >
//       <div className="container mx-auto px-4 h-16">
//         <div className="flex items-center justify-between h-full">
//           <div className="flex items-center gap-8">
//             <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Chatty</h1>
//             </Link>
//           </div>

//           <div className="flex items-center gap-2">
//             <Link
//               to={"/settings"}
//               className={`
//               btn btn-sm gap-2 transition-colors
              
//               `}
//             >
//               <Settings className="w-4 h-4" />
//               <span className="hidden sm:inline">Settings</span>
//             </Link>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Navbar;



//v3c
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User, Bell, Search } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base-100/95 backdrop-blur-xl border-b border-base-300/50 shadow-lg"
          : "bg-base-100/80 backdrop-blur-lg border-b border-base-300/30"
      }`}
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:opacity-80 transition-all duration-200 group"
            >
              <div className="relative">
                <div className="size-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 
                  flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 
                  transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <MessageSquare className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 
                  blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-base-content to-base-content/80 bg-clip-text">
                Chat-Z
              </h1>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Search Button (Optional) */}
            <button className="btn btn-ghost btn-sm hover:bg-base-200/50 transition-all duration-200">
              <Search className="w-4 h-4" />
            </button>

            {/* Notifications (Optional) */}
            <button className="btn btn-ghost btn-sm hover:bg-base-200/50 transition-all duration-200 relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </button>

            {/* Settings */}
            <Link
              to="/settings"
              className={`btn btn-sm gap-2 transition-all duration-200 hover:scale-105 active:scale-95
                ${activeItem === 'settings' 
                  ? 'bg-primary/10 text-primary border-primary/20' 
                  : 'btn-ghost hover:bg-base-200/50'
                }`}
              onMouseEnter={() => setActiveItem('settings')}
              onMouseLeave={() => setActiveItem('')}
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Profile */}
                <Link 
                  to="/profile" 
                  className={`btn btn-sm gap-2 transition-all duration-200 hover:scale-105 active:scale-95
                    ${activeItem === 'profile' 
                      ? 'bg-primary/10 text-primary border-primary/20' 
                      : 'btn-ghost hover:bg-base-200/50'
                    }`}
                  onMouseEnter={() => setActiveItem('profile')}
                  onMouseLeave={() => setActiveItem('')}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                {/* Logout */}
                <button 
                  className="btn btn-sm gap-2 btn-ghost hover:bg-error/10 hover:text-error 
                    transition-all duration-200 hover:scale-105 active:scale-95"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent"></div>
    </header>
  );
};

export default Navbar;