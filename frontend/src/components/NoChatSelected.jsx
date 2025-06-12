// import { MessageSquare } from "lucide-react";

// const NoChatSelected = () => {
//   return (
//     <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
//       <div className="max-w-md text-center space-y-6">
//         {/* Icon Display */}
//         <div className="flex justify-center gap-4 mb-4">
//           <div className="relative">
//             <div
//               className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
//              justify-center animate-bounce"
//             >
//               <MessageSquare className="w-8 h-8 text-primary " />
//             </div>
//           </div>
//         </div>

//         {/* Welcome Text */}
//         <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
//         <p className="text-base-content/60">
//           Select a conversation from the sidebar to start chatting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NoChatSelected;


//v2c
import { MessageSquare, Users, Zap, Shield, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const NoChatSelected = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: MessageSquare,
      title: "Real-time Messaging",
      description: "Instant communication with friends and colleagues"
    },
    
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Messages delivered instantly across all devices"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption keeps your chats safe"
    }
  ];

  // Rotate through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-base-100 via-base-200/30 to-base-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-2xl text-center space-y-8 relative z-10">
        {/* Main Icon Display */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 
              flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 
              transition-all duration-500 shadow-2xl">
              <MessageSquare className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 
              blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating sparkles */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary/60 animate-pulse" />
            <Sparkles className="absolute -bottom-2 -left-2 w-4 h-4 text-secondary/60 animate-pulse delay-1000" />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-base-content via-base-content/90 to-base-content/80 bg-clip-text">
            Welcome to Chat-Z!
          </h2>
          <p className="text-lg text-base-content/70 max-w-md mx-auto leading-relaxed">
            Select a conversation from the sidebar to start chatting and connecting with others
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-8 border border-base-300/50 shadow-xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    currentFeature === index
                      ? 'bg-primary/20 text-primary scale-110 shadow-lg'
                      : 'bg-base-300/50 text-base-content/40 hover:bg-base-300/70'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              );
            })}
          </div>
          
          <div className="text-center space-y-3 min-h-[80px] flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-base-content">
              {features[currentFeature].title}
            </h3>
            <p className="text-base-content/70">
              {features[currentFeature].description}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 pt-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-base-content/60">Uptime</div>
          </div>
          <div className="text-center">
            
            <div className="text-sm text-base-content/60">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">24/7</div>
            <div className="text-sm text-base-content/60">Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-8">
          <p className="text-base-content/60 text-sm">
            Ready to start chatting? Pick a conversation from the sidebar or{" "}
            <span className="text-primary font-medium hover:underline cursor-pointer">
              start a new chat
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;