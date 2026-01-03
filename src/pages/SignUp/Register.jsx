import React, { useContext, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AuthContext } from "../Context-Provider/AuthContext";
import { useNavigate, Link } from "react-router";
import { updateProfile } from "firebase/auth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoImg from "../../assets/logo.png"; // একই লোগো ব্যবহার

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

  // Slider settings
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
      {/* Left Side: Slider */}
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

      {/* Right Side: Register Form */}
      <div className="bg-base-100 shadow-2xl rounded-2xl w-full max-w-md p-8 border border-base-300 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center text-base-content mb-6">
          Create an Account for Free
        </h1>

        <form onSubmit={formSubmitHandler} className="space-y-4">
          <fieldset className="fieldset space-y-3">
            {/* Name */}
            <div>
              <label className="label font-semibold text-sm text-base-content/90">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full bg-base-200 focus:outline-none"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label font-semibold text-sm text-base-content/90">
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                className="input input-bordered w-full bg-base-200 focus:outline-none"
                placeholder="Photo URL"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label font-semibold text-sm text-base-content/90">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-base-200 focus:outline-none"
                placeholder="Email"
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
                className="input input-bordered w-full pr-10 bg-base-200 focus:outline-none"
                placeholder="Password"
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

            {/* Register Button */}
            <button className="btn btn-primary w-full mt-3 text-white">
              Register
            </button>

            {/* Divider */}
            <div className="divider text-base-content/70">OR</div>

            {/* Google Sign In Button */}
            <button
              type="button"
              onClick={googleLoginHandler}
              className="btn btn-outline w-full flex items-center justify-center gap-2"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
          </fieldset>

          <div className="mt-4 text-center">
            <p className="text-sm text-base-content/80">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-bold underline">
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
