import { useState } from "react";
import bgImage from "../assets/tire-inspection.png";
import { Icon } from "@iconify/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!email) return;
    console.log({ email, password });
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm rounded-xl border border-white/25 bg-white/10 p-8 backdrop-blur-md">
        <p className="text-xs tracking-widest text-white/60 uppercase mb-1">
          AI Vision Pro
        </p>
        <h1 className="text-xl font-medium text-white mb-6">
          Tire Inspection Portal
        </h1>

        {/* Email */}
        <label className="block text-xs text-white/60 mb-1">
          Employee ID / Email
        </label>
        <div className="relative mb-4">
          <Icon
            icon="mdi:account"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45"
            style={{ fontSize: "18px" }}
          />
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 pl-9 pr-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/35 text-sm outline-none focus:border-white/50 focus:bg-white/15"
          />
        </div>

        {/* Password */}
        <label className="block text-xs text-white/60 mb-1">Password</label>
        <div className="relative mb-3">
          <Icon
            icon="mdi:lock"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/45"
            style={{ fontSize: "18px" }}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-11 pl-9 pr-10 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/35 text-sm outline-none focus:border-white/50 focus:bg-white/15"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/45 hover:text-white/80"
          >
            <Icon
              icon={showPassword ? "mdi:eye-off" : "mdi:eye"}
              style={{ fontSize: "18px" }}
            />
          </button>
        </div>

        {/* Forgot */}
        <div className="text-right mb-5">
          <a href="#" className="text-xs text-white/55 hover:text-white">
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium transition-all"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Login;