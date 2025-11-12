import React, { useContext, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Context-Provider/AuthContext";
import { useNavigate, Link, useLocation } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoImg from "../../assets/logo.png";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { logInInfo, googleLoginInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  //// Email/password login ////
 const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  const email = e.target.email.value;
  const password = e.target.password.value;

  try {
    const result = await logInInfo(email, password);
    const user = result.user;

    Swal.fire({
      icon: "success",
      title: "Login Successful!",
      text: `Welcome back, ${user.displayName || user.email}`,
    });

    e.target.reset();
    navigate(location?.state || "/");
  } catch (error) {
    console.log("Login error:", error.code);
    let message = "Something went wrong. Please try again!";
    function getFirebaseAuthErrorMessage(code) {
      switch (code) {
        case "auth/invalid-email":
          return "The email address format is invalid.";
        case "auth/user-disabled":
          return "This account has been disabled.";
        case "auth/user-not-found":
          return "No account found with that email.";
        case "auth/wrong-password":
          return "Incorrect password. Please try again.";
        case "auth/too-many-requests":
          return "Too many login attempts. Try again later.";
        case "auth/network-request-failed":
          return "Network error. Please check your internet connection.";
        case "auth/invalid-credential":
          return "Invalid credentials. Please verify your login details.";
        case "auth/operation-not-allowed":
          return "Email/password login is not enabled for this project.";
        case "auth/missing-password":
          return "Please enter a password.";
        case "auth/missing-email":
          return "Please enter an email address.";
        case "auth/invalid-login-credentials":
          return "Email or password is incorrect.";
        default:
          return "An unexpected error occurred. Please try again later.";
      }
    }
    message = getFirebaseAuthErrorMessage(error.code);

    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: message,
    });
  } finally {
    setLoading(false);
  }
};


  //// Google login ////
  const handleGoogleLogin = async () => {
    try {
      const result = await googleLoginInfo();
      const user = result.user;

      Swal.fire({
        icon: "success",
        title: "Google Sign-In Successful",
        text: `Welcome, ${user.displayName || user.email}`,
      });

      navigate(location?.state || "/");
    } catch (error) {
      console.log("Google login error:", error.message);
      Swal.fire("Something Went Wrong", error.message, "error");
    }
  };

  //// Slider settings /////
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-base-200 transition-colors duration-300 p-4 gap-10">
      {/* Left Side: Slider*/}
      <div className="w-full lg:w-1/2 max-w-xl">
        <Slider {...sliderSettings}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-10 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
              Welcome to Home Nest
              <img
                className="w-16 h-16 object-contain"
                src={logoImg}
                alt="logo"
              />
            </h2>
            <p className="text-base-content/80">
              Discover your perfect home easily. Explore modern, comfortable,
              and affordable properties today.
            </p>
          </div>

          <div className="bg-gradient-to-r from-success/10 to-success/5 p-10 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-bold text-success mb-3">
              Smart Search & Filters
            </h2>
            <p className="text-base-content/80">
              Find homes that match your budget, location, and lifestyle
              effortlessly.
            </p>
          </div>

          <div className="bg-gradient-to-r from-warning/10 to-warning/5 p-10 rounded-2xl text-center shadow-lg">
            <h2 className="text-3xl font-bold text-warning mb-3">
              Trusted Agents & Landlords
            </h2>
            <p className="text-base-content/80">
              Connect with verified agents and landlords for a safe and
              transparent experience.
            </p>
          </div>
        </Slider>
      </div>

      {/* Right Side: Login Form*/}
      <div className="bg-base-100 shadow-2xl rounded-2xl w-full max-w-md p-8 border border-base-300 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center text-base-content mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <fieldset className="fieldset space-y-3">
            {/* Email */}
            <div>
              <label className="label font-semibold text-sm text-base-content/90">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-base-200 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label font-semibold text-sm text-base-content/90">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input input-bordered w-full bg-base-200 pr-10 focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <span className="absolute top-8 right-3 cursor-pointer text-base-content/70 hover:text-primary">
                {showPassword ? (
                  <BsFillEyeFill onClick={() => setShowPassword(false)} />
                ) : (
                  <BsFillEyeSlashFill onClick={() => setShowPassword(true)} />
                )}
              </span>
            </div>

            {/* Login Button */}
            <button className="btn btn-primary w-full mt-3 text-white">
             { loading ? 'Logging In....' : 'Log In' }
            </button>

            {/* Divider */}
            <div className="divider text-base-content/70">OR</div>

            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
          </fieldset>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-base-content/80">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 font-bold underline">
              Register
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
