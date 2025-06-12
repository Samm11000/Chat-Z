// import { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { useAuthStore } from "../store/useAuthStore";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";

// const Sidebar = () => {
//   const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

//   const { onlineUsers } = useAuthStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

//   const filteredUsers = showOnlineOnly
//     ? users.filter((user) => onlineUsers.includes(user._id))
//     : users;

//   if (isUsersLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="size-6" />
//           <span className="font-medium hidden lg:block">Contacts</span>
//         </div>
//         {/* TODO: Online filter toggle */}
//         <div className="mt-3 hidden lg:flex items-center gap-2">
//           <label className="cursor-pointer flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={showOnlineOnly}
//               onChange={(e) => setShowOnlineOnly(e.target.checked)}
//               className="checkbox checkbox-sm"
//             />
//             <span className="text-sm">Show online only</span>
//           </label>
//           <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
//         </div>
//       </div>

//       <div className="overflow-y-auto w-full py-3">
//         {filteredUsers.map((user) => (
           
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`
//               w-full p-3 flex items-center gap-3
//               hover:bg-base-300 transition-colors
//               ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
//             `}
//           >
//             <div className="relative mx-auto lg:mx-0">
//               <img
//                 src={user.profilePic || "/avatar.png"}
//                 alt={user.name}
//                 className="size-12 object-cover rounded-full"
//               />
//               {onlineUsers.includes(user._id) && (
//                 <span
//                   className="absolute bottom-0 right-0 size-3 bg-green-500 
//                   rounded-full ring-2 ring-zinc-900"
//                 />
//               )}
//             </div>

//             {/* User info - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0">
//               <div className="font-medium truncate">{user.fullName}</div>
//               <div className="text-sm text-zinc-400">
//                 {onlineUsers.includes(user._id) ? "Online" : "Offline"}
//               </div>
//             </div>
//           </button>
//         ))}

//         {filteredUsers.length === 0 && (
//           <div className="text-center text-zinc-500 py-4">No online users</div>
//         )}
//       </div>
//     </aside>
//   );
// };
// export default Sidebar;

//v2

// import { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { useAuthStore } from "../store/useAuthStore";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";

// const Sidebar = () => {
//   const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

//   const { onlineUsers } = useAuthStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

//   const filteredUsers = showOnlineOnly
//     ? users.filter((user) => onlineUsers.includes(user._id))
//     : users;

//   if (isUsersLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2">
//           <Users className="size-6" />
//           <span className="font-medium hidden lg:block">Contacts</span>
//         </div>
//         {/* TODO: Online filter toggle */}
//         <div className="mt-3 hidden lg:flex items-center gap-2">
//           <label className="cursor-pointer flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={showOnlineOnly}
//               onChange={(e) => setShowOnlineOnly(e.target.checked)}
//               className="checkbox checkbox-sm"
//             />
//             <span className="text-sm">Show online only</span>
//           </label>
//           <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
//         </div>
//       </div>

//       <div className="overflow-y-auto w-full py-3">
//         {filteredUsers.map((user) => (
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`
//               w-full p-3 flex items-center gap-3
//               hover:bg-base-300 transition-colors
//               ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
//             `}
//           >
//             <div className="relative mx-auto lg:mx-0">
//               <img
//                 src={user.profilePic || "/avatar.png"}
//                 alt={user.name}
//                 className="size-12 object-cover rounded-full"
//               />
//               {onlineUsers.includes(user._id) && (
//                 <span
//                   className="absolute bottom-0 right-0 size-3 bg-green-500 
//                   rounded-full ring-2 ring-zinc-900"
//                 />
//               )}
//             </div>

//             {/* User info - only visible on larger screens */}
//             <div className="hidden lg:block text-left min-w-0">
//               <div className="font-medium truncate">{user.fullName}</div>
//               <div className="text-sm text-zinc-400">
//                 {onlineUsers.includes(user._id) ? "Online" : "Offline"}
//               </div>
//             </div>
//           </button>
//         ))}

//         {filteredUsers.length === 0 && (
//           <div className="text-center text-zinc-500 py-4">No online users</div>
//         )}
//       </div>
//     </aside>
//   );
// };
// export default Sidebar;





//v3
import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, Search, Filter, UserCheck, UserX } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredUser, setHoveredUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.fullName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOnlineFilter = showOnlineOnly ? onlineUsers.includes(user._id) : true;
    return matchesSearch && matchesOnlineFilter;
  });

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300/50 flex flex-col transition-all duration-300 bg-gradient-to-b from-base-100 to-base-200/30">
      {/* Header Section */}
      <div className="border-b border-base-300/50 w-full p-4 lg:p-6 bg-base-100/80 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div className="hidden lg:block">
            <h2 className="font-bold text-lg text-base-content">Contacts</h2>
            <p className="text-sm text-base-content/60">
              {filteredUsers.length} contact{filteredUsers.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden lg:block mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-base-content/40" />
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-base-200/50 border border-base-300/50 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                transition-all duration-200 text-sm"
            />
          </div>
        </div>

        {/* Online Filter Toggle */}
        <div className="hidden lg:flex items-center justify-between">
          <label className="cursor-pointer flex items-center gap-3 group">
            <div className="relative">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full transition-all duration-200 ${
                showOnlineOnly ? 'bg-primary' : 'bg-base-300'
              }`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 mt-1 ${
                  showOnlineOnly ? 'translate-x-6 ml-1' : 'translate-x-1'
                }`} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              {showOnlineOnly ? (
                <UserCheck className="w-4 h-4 text-primary" />
              ) : (
                <Filter className="w-4 h-4 text-base-content/60" />
              )}
              <span className="text-sm font-medium text-base-content/80">
                {showOnlineOnly ? 'Online Only' : 'All Contacts'}
              </span>
            </div>
          </label>
          
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-primary">
              {onlineUsers.length - 1} online
            </span>
          </div>
        </div>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto p-2 lg:p-3 space-y-1">
        {filteredUsers.map((user, index) => {
          const isOnline = onlineUsers.includes(user._id);
          const isSelected = selectedUser?._id === user._id;
          const isHovered = hoveredUser === user._id;
          
          return (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              onMouseEnter={() => setHoveredUser(user._id)}
              onMouseLeave={() => setHoveredUser(null)}
              className={`w-full p-3 lg:p-4 flex items-center gap-3 rounded-2xl
                transition-all duration-200 transform group relative overflow-hidden
                ${isSelected 
                  ? 'bg-primary/10 scale-[0.98] shadow-lg ring-2 ring-primary/20' 
                  : isHovered 
                    ? 'bg-base-200/70 scale-[0.99] shadow-md' 
                    : 'hover:bg-base-200/50 hover:scale-[0.995]'
                }
              `}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Background gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Avatar */}
              <div className="relative mx-auto lg:mx-0 flex-shrink-0">
                <div className="relative">
                  <img
                    src={user.profilePic || "/avatar.png"}
                    alt={user.fullName}
                    className={`w-12 h-12 lg:w-14 lg:h-14 object-cover rounded-full border-2 
                      transition-all duration-200 ${
                        isSelected ? 'border-primary/30' : 'border-base-300/50'
                      } ${isHovered ? 'scale-105' : ''}`}
                  />
                  
                  {/* Online Status Indicator */}
                  {isOnline && (
                    <div className="absolute -bottom-1 -right-1">
                      <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-base-100 
                        shadow-lg animate-pulse" />
                      <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full 
                        animate-ping opacity-75" />
                    </div>
                  )}
                  
                  {/* Offline indicator */}
                  {!isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-base-300 
                      rounded-full border-2 border-base-100" />
                  )}
                </div>
              </div>

              {/* User Info - Desktop Only */}
              <div className="hidden lg:block text-left min-w-0 flex-1 relative z-10">
                <div className={`font-semibold truncate transition-colors duration-200 ${
                  isSelected ? 'text-primary' : 'text-base-content'
                }`}>
                  {user.fullName}
                </div>
                
                <div className="flex items-center gap-2 mt-1">
                  <div className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 
                    rounded-full transition-all duration-200 ${
                      isOnline 
                        ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' 
                        : 'text-base-content/50 bg-base-200/50'
                    }`}>
                    {isOnline ? (
                      <>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Online
                      </>
                    ) : (
                      <>
                        <div className="w-1.5 h-1.5 bg-base-content/30 rounded-full" />
                        Offline
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Selection Indicator */}
              {isSelected && (
                <div className="hidden lg:block w-1 h-8 bg-primary rounded-full ml-auto" />
              )}
            </button>
          );
        })}

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-base-200 flex items-center justify-center mb-4">
              {searchTerm ? (
                <Search className="w-6 h-6 text-base-content/40" />
              ) : showOnlineOnly ? (
                <UserX className="w-6 h-6 text-base-content/40" />
              ) : (
                <Users className="w-6 h-6 text-base-content/40" />
              )}
            </div>
            <h3 className="font-medium text-base-content/80 mb-1">
              {searchTerm ? 'No contacts found' : showOnlineOnly ? 'No online users' : 'No contacts'}
            </h3>
            <p className="text-sm text-base-content/50 max-w-32 lg:max-w-none">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : showOnlineOnly 
                  ? 'No contacts are currently online'
                  : 'Your contact list is empty'
              }
            </p>
          </div>
        )}
      </div>

      {/* Quick Stats - Desktop Only */}
      <div className="hidden lg:block border-t border-base-300/50 p-4 bg-base-100/50">
        <div className="flex items-center justify-between text-xs text-base-content/60">
          <span>{users.length} total contacts</span>
          <span>{onlineUsers.length - 1} online now</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;