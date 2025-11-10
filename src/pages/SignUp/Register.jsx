import React, { useContext, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Context-Provider/AuthContext";
import { useNavigate, Link } from "react-router";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createRegisterInfo, googleLoginInfo, logOutInfo } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // ---------- Form Submit ----------
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!passwordRegex.test(password)) {
      return Swal.fire(
        "Error",
        "Password must have at least 1 uppercase, 1 lowercase, and minimum 6 characters",
        "error"
      );
    }

    try {
      const result = await createRegisterInfo(email, password);
      const user = result.user;

      if (name || photoURL) {
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
      }

      await logOutInfo();

      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: `Welcome, ${name}. Please login to continue.`,
      });

      e.target.reset();
      setTimeout(() => navigate("/login"), 500);
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  // ---------- Google Login ----------
  const googleLoginHandler = async () => {
    try {
      const result = await googleLoginInfo();
      const user = result.user;

      Swal.fire({
        icon: "success",
        title: "Google Sign-In Successful",
        text: `Welcome, ${user.displayName || user.email}`,
      });

      navigate("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-base-100 to-base-200 p-4 transition-all duration-500">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border border-gray-200 transition-all duration-300">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account for Free
        </h1>

        <form onSubmit={formSubmitHandler} className="space-y-4">
          <fieldset className="fieldset space-y-3">
            {/* Name */}
            <div>
              <label className="label font-semibold text-sm text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full bg-white border-gray-300 text-gray-800"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label font-semibold text-sm text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered w-full bg-white border-gray-300 text-gray-800"
                placeholder="Photo URL"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label font-semibold text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-white border-gray-300 text-gray-800"
                placeholder="Email"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold text-sm text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full pr-10 bg-white border-gray-300 text-gray-800"
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
              onClick={googleLoginHandler}
              className="btn btn-outline w-full flex items-center justify-center gap-2 border-gray-400 text-gray-800"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
          </fieldset>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Log In
              </Link>{" "}
              here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
