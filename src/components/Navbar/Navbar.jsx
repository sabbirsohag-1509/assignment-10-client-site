import React, { useContext, useEffect, useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaPlus,
  FaClipboardList,
  FaStar,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../pages/Context-Provider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutInfo } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // LogOut handler
  const handleLogout = () => {
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
  };

  // Theme handler
  const handleTheme = (checked) => {
    // console.log(checked);
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`
        }
      >
        <FaHome className="mr-1" /> Home
      </NavLink>

      <NavLink
        to="/all-properties"
        className={({ isActive }) =>
          `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`
        }
      >
        <FaBuilding className="mr-1" /> All Properties
      </NavLink>

      {user && (
        <>
          <NavLink
            to="/add-property"
            className={({ isActive }) =>
              `flex items-center mx-2 ${
                isActive ? "font-bold text-blue-600" : ""
              }`
            }
          >
            <FaPlus className="mr-1" /> Add Property
          </NavLink>

          <NavLink
            to="/my-properties"
            className={({ isActive }) =>
              `flex items-center mx-2 ${
                isActive ? "font-bold text-blue-600" : ""
              }`
            }
          >
            <FaClipboardList className="mr-1" /> My Properties
          </NavLink>

          <NavLink
            to="/my-ratings"
            className={({ isActive }) =>
              `flex items-center mx-2 ${
                isActive ? "font-bold text-blue-600" : ""
              }`
            }
          >
            <FaStar className="mr-1" /> My Ratings
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
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
          <img src={logoImg} alt="Logo" className="w-12 md:w-14" />
          <span className="  font-bold text-xl md:text-2xl">
            Home<span className="text-blue-600">Nest</span>
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <div>
          {/* Light & Dark Mode Toggle */}

          <label
            onChange={(e) => handleTheme(e.target.checked)}
            className="flex cursor-pointer gap-2 items-center mr-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              checked={theme === "dark"}
              className="toggle toggle-sm scale-90 theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {!user ? (
          <>
            <NavLink
              to="/register"
              className="mx-2 btn btn-outline btn-sm bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="mx-2 btn btn-outline btn-sm bg-blue-600 text-white hover:bg-blue-700"
            >
              LogIn
            </NavLink>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className=" w-8 md:w-10 rounded-full">
                <img
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
                <span className="font-semibold hover:bg-blue-600 hover:text-white">
                  {user.displayName}
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-600 hover:bg-blue-600 hover:text-white">
                  {user.email}
                </span>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline btn-sm w-full mt-2 hover:bg-blue-600 hover:text-white"
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
