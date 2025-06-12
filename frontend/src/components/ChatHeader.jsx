// import { X } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";
// import { useChatStore } from "../store/useChatStore";

// const ChatHeader = () => {
//   const { selectedUser, setSelectedUser } = useChatStore();
//   const { onlineUsers } = useAuthStore();

//   return (
//     <div className="p-2.5 border-b border-base-300">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="avatar">
//             <div className="size-10 rounded-full relative">
//               <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
//             </div>
//           </div>

//           {/* User info */}
//           <div>
//             <h3 className="font-medium">{selectedUser.fullName}</h3>
//             <p className="text-sm text-base-content/70">
//               {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>

//         {/* Close button */}
//         <button onClick={() => setSelectedUser(null)}>
//           <X />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ChatHeader;






//v3
import { X, MoreVertical, Phone, Video, Info, Search } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { useState } from "react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showActions, setShowActions] = useState(false);
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="relative">
      {/* Main Header */}
      <div className="p-4 lg:p-6 border-b border-base-300/50 bg-gradient-to-r from-base-100 to-base-200/30 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Left Section - User Info */}
          <div className="flex items-center gap-4 min-w-0 flex-1">
            {/* Avatar with status */}
            <div className="relative flex-shrink-0">
              <div className="relative">
                <img 
                  src={selectedUser.profilePic || "/avatar.png"} 
                  alt={selectedUser.fullName}
                  className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-base-300/50 
                    shadow-lg hover:scale-105 transition-transform duration-200"
                />
                
                {/* Online Status Indicator */}
                {isOnline && (
                  <div className="absolute -bottom-1 -right-1">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-base-100 shadow-lg">
                      <div className="w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                )}
                
                {!isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-base-100"></div>
                )}
              </div>
            </div>

            {/* User Details */}
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-lg lg:text-xl text-base-content truncate">
                {selectedUser.fullName}
              </h3>
              
              <div className="flex items-center gap-2 mt-1">
                <div className={`flex items-center gap-1.5 text-sm font-medium ${
                  isOnline ? 'text-green-600' : 'text-base-content/60'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${
                    isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                  {isOnline ? 'Online' : 'Offline'}
                </div>
                
                {isOnline && (
                  <div className="hidden sm:flex items-center gap-1 text-xs text-base-content/50">
                    <span>•</span>
                    <span>Active now</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Section - Action Buttons */}
          <div className="flex items-center gap-2">
           

            {/* More Actions */}
            <div className="relative">
              <button 
                onClick={() => setShowActions(!showActions)}
                className="p-2 lg:p-2.5 rounded-xl bg-base-200/50 hover:bg-base-200 
                  transition-all duration-200 hover:scale-105 active:scale-95 group"
              >
                <MoreVertical className="w-5 h-5 text-base-content/70 group-hover:text-base-content" />
              </button>

              
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setSelectedUser(null)}
              className="p-2 lg:p-2.5 rounded-xl bg-red-50 hover:bg-red-100 
                transition-all duration-200 hover:scale-105 active:scale-95 group
                dark:bg-red-900/20 dark:hover:bg-red-900/30"
            >
              <X className="w-5 h-5 text-red-600 group-hover:text-red-700 dark:text-red-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showActions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowActions(false)}
        ></div>
      )}
    </div>
  );
};

export default ChatHeader;