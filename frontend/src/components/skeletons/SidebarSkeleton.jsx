import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-full w-20 lg:w-72 border-r border-base-300 
    flex flex-col transition-all duration-200"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contacts */}
      <div className="overflow-y-auto w-full py-3">
        {skeletonContacts.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>

            {/* User info skeleton - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="skeleton h-4 w-32 mb-2" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;


// import { motion } from "framer-motion";
// import { Users, Search, MoreHorizontal } from "lucide-react";

// const SidebarSkeleton = () => {
//   // Create 8 skeleton items
//   const skeletonContacts = Array(8).fill(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     },
//   };

//   const pulseVariants = {
//     animate: {
//       opacity: [0.4, 0.8, 0.4],
//       transition: {
//         duration: 2,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <aside className="h-full w-20 lg:w-80 border-r border-base-300/50 bg-base-100/50 
//       backdrop-blur-sm flex flex-col transition-all duration-300 relative">
      
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-base-100/80 to-base-100/40 pointer-events-none" />
      
//       <div className="relative z-10 h-full flex flex-col">
//         {/* Header */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//           className="border-b border-base-300/50 p-4 lg:p-6"
//         >
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
//                 <Users className="w-5 h-5 text-primary" />
//               </div>
//               <span className="font-semibold text-base-content hidden lg:block">
//                 Contacts
//               </span>
//             </div>
            
//             <motion.div
//               variants={pulseVariants}
//               animate="animate"
//               className="hidden lg:block"
//             >
//               <div className="w-6 h-6 rounded bg-base-300/50" />
//             </motion.div>
//           </div>

//           {/* Search bar skeleton */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-4 hidden lg:block"
//           >
//             <div className="relative">
//               <motion.div
//                 variants={pulseVariants}
//                 animate="animate"
//                 className="w-full h-10 bg-base-300/50 rounded-lg flex items-center px-3"
//               >
//                 <Search className="w-4 h-4 text-base-content/30 mr-2" />
//                 <div className="flex-1 h-3 bg-base-content/10 rounded" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Online indicator */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.3 }}
//           className="px-4 lg:px-6 py-3 border-b border-base-300/30"
//         >
//           <div className="flex items-center gap-2">
//             <motion.div
//               animate={{
//                 scale: [1, 1.2, 1],
//                 opacity: [0.5, 1, 0.5],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="w-2 h-2 bg-green-500 rounded-full"
//             />
//             <motion.div
//               variants={pulseVariants}
//               animate="animate"
//               className="hidden lg:block h-3 w-16 bg-base-content/20 rounded"
//             />
//           </div>
//         </motion.div>

//         {/* Skeleton Contacts */}
//         <div className="flex-1 overflow-y-auto py-2">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {skeletonContacts.map((_, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 whileHover={{ x: 4, transition: { duration: 0.2 } }}
//                 className="w-full p-3 lg:p-4 flex items-center gap-3 hover:bg-base-200/50 
//                   transition-all duration-200 cursor-pointer group relative overflow-hidden"
//               >
//                 {/* Shimmer effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
//                   animate={{
//                     translateX: ["100%", "100%", "-100%", "-100%"],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "linear",
//                     delay: idx * 0.1,
//                   }}
//                 />

//                 {/* Avatar skeleton */}
//                 <div className="relative mx-auto lg:mx-0 flex-shrink-0">
//                   <motion.div
//                     variants={pulseVariants}
//                     animate="animate"
//                     style={{ animationDelay: `${idx * 0.1}s` }}
//                     className="w-11 h-11 rounded-full bg-base-300/60"
//                   />
                  
//                   {/* Random online/offline indicator */}
//                   {idx % 3 === 0 && (
//                     <motion.div
//                       animate={{
//                         scale: [0.8, 1.2, 0.8],
//                         opacity: [0.6, 1, 0.6],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                         delay: idx * 0.2,
//                       }}
//                       className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 
//                         bg-green-500 border-2 border-base-100 rounded-full"
//                     />
//                   )}
//                 </div>

//                 {/* User info skeleton - only visible on larger screens */}
//                 <div className="hidden lg:block text-left min-w-0 flex-1">
//                   <motion.div
//                     variants={pulseVariants}
//                     animate="animate"
//                     style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
//                     className="h-4 bg-base-300/60 rounded mb-2"
//                     style={{ width: `${60 + (idx % 4) * 20}%` }}
//                   />
                  
//                   <motion.div
//                     variants={pulseVariants}
//                     animate="animate"
//                     style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
//                     className="h-3 bg-base-300/40 rounded"
//                     style={{ width: `${30 + (idx % 3) * 15}%` }}
//                   />
//                 </div>

//                 {/* Message indicator skeleton */}
//                 <div className="hidden lg:block flex-shrink-0">
//                   {idx % 4 === 0 && (
//                     <motion.div
//                       variants={pulseVariants}
//                       animate="animate"
//                       style={{ animationDelay: `${idx * 0.1 + 0.3}s` }}
//                       className="w-5 h-5 bg-primary/30 rounded-full"
//                     />
//                   )}
                  
//                   {idx % 5 === 0 && (
//                     <MoreHorizontal className="w-4 h-4 text-base-content/20" />
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom section skeleton */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//           transition={{ delay: 0.8 }}
//           className="border-t border-base-300/30 p-4 lg:p-6"
//         >
//           <div className="flex items-center gap-3">
//             <motion.div
//               variants={pulseVariants}
//               animate="animate"
//               className="w-8 h-8 rounded-full bg-base-300/60"
//             />
            
//             <div className="hidden lg:block flex-1">
//               <motion.div
//                 variants={pulseVariants}
//                 animate="animate"
//                 className="h-3 bg-base-300/50 rounded mb-1 w-24"
//               />
//               <motion.div
//                 variants={pulseVariants}
//                 animate="animate"
//                 style={{ animationDelay: "0.2s" }}
//                 className="h-2 bg-base-300/30 rounded w-16"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </aside>
//   );
// };

// export default SidebarSkeleton;

