import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Register = ({ onSubmit, onGoogleSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account for Free
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <fieldset className="fieldset space-y-3">
            {/* Name */}
            <div>
              <label className="label font-semibold text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label font-semibold text-sm">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered w-full"
                placeholder="Photo URL"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label font-semibold text-sm">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Email"
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
                placeholder="Password"
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

            {/* Register Button */}
            <button className="btn btn-neutral w-full mt-3">Register</button>

            {/* Divider */}
            <div className="divider text-gray-400">OR</div>

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={onGoogleSignIn}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
                  </fieldset>
                  <div>
                    <p className="text-sm ">Already have an account? <a href="/login" className="text-blue-500 underline">LogIn</a> here</p>
                  </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
