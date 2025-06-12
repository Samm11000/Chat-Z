// import React from "react";
// import { useState } from "react";
// import { MessageSquare, User ,Mail, EyeOff,Eye,Loader2 ,Lock} from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Link } from "react-router-dom";
// import AuthImagePattern from "../components/AuthImagePattern";
// import toast from "react-hot-toast";
// const SignUpPage = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const [formData, setFormData] = useState({
//       fullname: "",
//       email: "",
//       password: "",
//     });
    
//   const { signup, isSigningUp } = useAuthStore();
//   const validateForm = () => {
//     if(!formData.fullname.trim()) return toast.error("Fullname is required");
//     if(!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
// if(formData.password.length <6) return toast.error("Password must be at least 6 characters");
// return true
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const success= validateForm()
//     if (success === true) {
//         signup({
//           fullname: formData.fullname, 
//           email: formData.email,
//           password: formData.password,
//         });
//       }
//   };
//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* left side of form */}

//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">


//           {/* LOGO */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                 <MessageSquare className="size-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//               <p className="text-base-content/60">
//                 Get started with your free account
//               </p>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit}className="space-y-6">
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text font-medium ">Full Name</span>
//                 </label>
//                 <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <User  className="size-5 text-base-content/40"/>
//                     </div>
//                     <input type="text"
//                         className={`input input-bordered w-full pl-10`}
//                         placeholder="john Doe"
//                         value={formData.fullName}
//                         onChange={(e)=>setFormData({...formData,fullName:e.target.value})}
//                     />
//                 </div>
//             </div>

//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text font-medium ">Email</span>
//                 </label>
//                 <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Mail  className="size-5 text-base-content/40"/>
//                     </div>
//                     <input type="email"
//                         className={`input input-bordered w-full pl-10`}
//                         placeholder="you@email.com"
//                         value={formData.email}
//                         onChange={(e)=>setFormData({...formData,email:e.target.value})}
//                     />
//                 </div>
//             </div>

//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text font-medium ">Password</span>
//                 </label>
//                 <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <Lock  className="size-5 text-base-content/40"/>
//                     </div>
//                     <input 
//                     type={showPassword ? "text":"password"}
//                         className={`input input-bordered w-full pl-10`}
//                         placeholder="*********"
//                         value={formData.password}
//                         onChange={(e)=>setFormData({...formData,password:e.target.value})}
//                     />
//                     <button
//                     type="button"
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     onClick={()=> setShowPassword(!showPassword)}
//                     >{showPassword ?(
//                         <EyeOff className="size-5 text-base-content/40"/>):(
//                             <Eye className="size-5 text-base-content/40"/>)}</button>
//                 </div>
//             </div>

//             <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
//                 {isSigningUp ?( <>
//                     <Loader2 className="size-5 animate-spin "/>
//                     Loading...
//                     </>
//                     ):(
//                         "Create Account"
//                     )}
                
//             </button>
//           </form>
//           <div className="text-center">
//             <p className="text-base-content/60">
//                 Already have an account ?{" "}
//                 <Link to="/login" className="link link-primary" >
//                     Sign In
//                 </Link>

//             </p>
//           </div>
//         </div>
//       </div>


//                     {/* RIGHT SIDE  */}
//                     <AuthImagePattern
//                         title="Join our community"
//                         subtitle ="Connect with freinds , share moments , and stay in touch with your loved ones. "
//                     />


//     </div>
//   );
// };

// export default SignUpPage;








//version 2
// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
// import { Link } from "react-router-dom";

// import AuthImagePattern from "../components/AuthImagePattern";
// import toast from "react-hot-toast";

// const SignUpPage = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) return toast.error("Full name is required");
//     if (!formData.email.trim()) return toast.error("Email is required");
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
//     if (!formData.password) return toast.error("Password is required");
//     if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const success = validateForm();

//     if (success === true) signup(formData);
//   };

//   return (
//     <div className="min-h-screen grid lg:grid-cols-2">
//       {/* left side */}
//       <div className="flex flex-col justify-center items-center p-6 sm:p-12">
//         <div className="w-full max-w-md space-y-8">
//           {/* LOGO */}
//           <div className="text-center mb-8">
//             <div className="flex flex-col items-center gap-2 group">
//               <div
//                 className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
//               group-hover:bg-primary/20 transition-colors"
//               >
//                 <MessageSquare className="size-6 text-primary" />
//               </div>
//               <h1 className="text-2xl font-bold mt-2">Create Account</h1>
//               <p className="text-base-content/60">Get started with your free account</p>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Full Name</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <User className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="text"
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="John Doe"
//                   value={formData.fullName}
//                   onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Email</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type="email"
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text font-medium">Password</span>
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="size-5 text-base-content/40" />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className={`input input-bordered w-full pl-10`}
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="size-5 text-base-content/40" />
//                   ) : (
//                     <Eye className="size-5 text-base-content/40" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
//               {isSigningUp ? (
//                 <>
//                   <Loader2 className="size-5 animate-spin" />
//                   Loading...
//                 </>
//               ) : (
//                 "Create Account"
//               )}
//             </button>
//           </form>

//           <div className="text-center">
//             <p className="text-base-content/60">
//               Already have an account?{" "}
//               <Link to="/login" className="link link-primary">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* right side */}

//       <AuthImagePattern
//         title="Join our community"
//         subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
//       />
//     </div>
//   );
// };
// export default SignUpPage;



import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, text: '', color: '' };
    
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const levels = [
      { text: 'Very Weak', color: 'bg-red-500' },
      { text: 'Weak', color: 'bg-orange-500' },
      { text: 'Fair', color: 'bg-yellow-500' },
      { text: 'Good', color: 'bg-blue-500' },
      { text: 'Strong', color: 'bg-green-500' }
    ];

    return { strength, ...levels[Math.min(strength, 4)] };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-gradient-to-br from-base-100 via-base-200/50 to-base-100">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full max-w-md space-y-8 relative z-10">
          {/* Enhanced Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 
                  flex items-center justify-center group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-300 shadow-lg group-hover:shadow-xl"
                >
                  <MessageSquare className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary/20 to-accent/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-base-content to-base-content/80 bg-clip-text">
                Create Account
              </h1>
              <p className="text-base-content/60 font-medium">Join thousands of users worldwide</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content/80">Full Name</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className={`h-5 w-5 transition-colors duration-200 ${
                    focusedField === 'fullName' ? 'text-secondary' : 'text-base-content/40'
                  }`} />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-12 pr-4 h-12 text-base
                    transition-all duration-200 group-hover:border-secondary/50
                    focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none
                    bg-base-100/50 backdrop-blur-sm
                    ${focusedField === 'fullName' ? 'border-secondary shadow-lg' : ''}
                  `}
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content/80">Email Address</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail className={`h-5 w-5 transition-colors duration-200 ${
                    focusedField === 'email' ? 'text-secondary' : 'text-base-content/40'
                  }`} />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-12 pr-4 h-12 text-base
                    transition-all duration-200 group-hover:border-secondary/50
                    focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none
                    bg-base-100/50 backdrop-blur-sm
                    ${focusedField === 'email' ? 'border-secondary shadow-lg' : ''}
                  `}
                  placeholder="Enter your email"
                  value={formData.email}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password Field with Strength Indicator */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base-content/80">Password</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className={`h-5 w-5 transition-colors duration-200 ${
                    focusedField === 'password' ? 'text-secondary' : 'text-base-content/40'
                  }`} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-12 pr-12 h-12 text-base
                    transition-all duration-200 group-hover:border-secondary/50
                    focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:outline-none
                    bg-base-100/50 backdrop-blur-sm
                    ${focusedField === 'password' ? 'border-secondary shadow-lg' : ''}
                  `}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center z-10
                    hover:scale-110 transition-transform duration-200"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/60 hover:text-base-content" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/60 hover:text-base-content" />
                  )}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2 space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                          i < passwordStrength.strength ? passwordStrength.color : 'bg-base-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs font-medium ${passwordStrength.color.replace('bg-', 'text-')}`}>
                    Password strength: {passwordStrength.text}
                  </p>
                </div>
              )}
            </div>

            <button 
              type="submit" 
              className={`btn w-full h-12 text-base font-semibold
                bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary
                border-none text-secondary-content shadow-lg hover:shadow-xl
                transform hover:scale-[1.02] active:scale-[0.98]
                transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed
                ${isSigningUp ? 'loading' : ''}
              `}
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center pt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link 
                to="/login" 
                className="font-semibold text-secondary hover:text-secondary/80 
                  transition-colors duration-200 hover:underline underline-offset-4"
              >
                Sign In
              </Link>
            </p>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-2 gap-4 pt-6 text-xs text-base-content/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>End-to-end encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Real-time messaging</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;