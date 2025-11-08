import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const LogIn = ({ onSubmit, onGoogleSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <fieldset className="fieldset space-y-3">
            {/* Email */}
            <div>
              <label className="label font-semibold text-sm">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold text-sm">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10"
                placeholder="Enter your password"
                required
              />
              <span className="absolute top-8 right-3 cursor-pointer text-gray-600">
                {showPassword ? (
                  <BsFillEyeFill onClick={() => setShowPassword(false)} />
                ) : (
                  <BsFillEyeSlashFill onClick={() => setShowPassword(true)} />
                )}
              </span>
            </div>

            {/* Log In Button */}
            <button className="btn btn-neutral w-full mt-3">Log In</button>

            {/* Divider */}
            <div className="divider text-gray-400">OR</div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
          </fieldset>
              </form>
              <div>
                  <p className="text-sm ">Don't have an account? <a href="/register" className="text-blue-500 underline">Register</a> here</p>
              </div>
      </div>
    </div>
  );
};

export default LogIn;
