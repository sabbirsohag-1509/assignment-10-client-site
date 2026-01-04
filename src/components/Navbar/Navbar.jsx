import React, { useContext, useEffect, useState } from "react";
import { Home, Building, Plus, Star, Building2 } from "lucide-react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../pages/Context-Provider/AuthContext";
import Swal from "sweetalert2";
import { Info } from "lucide-react";
import { Mail } from "lucide-react";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  const { user, logOutInfo } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

const handleLogout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out from your account!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, log me out",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      logOutInfo()
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Logged out successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error("Logout error:", error);
          Swal.fire({
            icon: "error",
            title: "Logout failed",
            text: error.message,
          });
        });
    }
  });
};


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      {/* Home  */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-1.5 mx-2 text-sm transition-colors duration-200 ease-out
           ${
             isActive
               ? "text-blue-600 font-medium"
               : "text-base-content/70 hover:text-blue-500"
           }`
        }
      >
        <Home className="w-4 h-4" />
        Home
      </NavLink>
      {/* All Properties  */}
      <NavLink
        to="/all-properties"
        className={({ isActive }) =>
          `flex items-center gap-1.5 mx-2 text-sm transition-colors duration-200 ${
            isActive
              ? "text-blue-600 font-medium"
              : "text-base-content/70 hover:text-blue-500"
          }`
        }
      >
        <Building className="w-4 h-4" />
        All Properties
      </NavLink>
      {/* About  */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `flex items-center gap-1.5 mx-2 text-sm transition-colors duration-200 ${
            isActive
              ? "text-blue-600 font-medium"
              : "text-base-content/70 hover:text-blue-500"
          }`
        }
      >
        <Info className="w-4 h-4" />
        About
      </NavLink>
      {/* Contact  */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `flex items-center gap-1.5 mx-2 text-sm transition-colors duration-200 ${
            isActive
              ? "text-blue-600 font-medium"
              : "text-base-content/70 hover:text-blue-500"
          }`
        }
      >
        <Mail className="w-4 h-4" />
        Contact
      </NavLink>
      {/* Blog  */}
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `flex items-center gap-1.5 mx-2 text-sm transition-colors duration-200 ${
            isActive
              ? "text-blue-600 font-medium"
              : "text-base-content/70 hover:text-blue-500"
          }`
        }
      >
        <BookOpen className="w-4 h-4" />
        Blog
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm h-16 px-4 md:px-8 lg:px-10 sticky top-0 z-50 border-b border-gray-200">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Logo" className="w-12 md:w-14 dark:invert" />
          <span className="font-bold text-xl md:text-2xl">
            Home<span className="text-blue-600">Nest</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2 lg:gap-4">
        {/* Theme Toggle */}
        <div className="flex items-center gap-1">
          <label className="flex items-center gap-1 cursor-pointer">
            {/* Sun Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => handleTheme(e.target.checked)}
              className="toggle toggle-xs"
            />
            {/* Moon Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </label>
        </div>

        {/* Auth Buttons */}
        {!user ? (
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-1">
            <NavLink
              to="/register"
              className="btn btn-outline btn-sm bg-blue-600 text-white hover:bg-blue-700 w-full lg:w-auto"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="btn btn-outline btn-sm bg-blue-600 text-white hover:bg-blue-700 w-full lg:w-auto"
            >
              Log In
            </NavLink>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-8 md:w-10 rounded-full">
                <img
                  title={user.displayName}
                  src={user.photoURL || "https://i.pravatar.cc/300"}
                  alt={user.displayName || "User"}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/profile">
                  <button className="font-medium">Profile</button>
                </NavLink>
                <NavLink to="/dashboard">
                  <button className="font-medium">Dashboard</button>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
