import React, { useContext } from "react";
import { FaHome, FaBuilding, FaPlus, FaClipboardList, FaStar } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import { AuthContext } from "../../pages/Context-Provider/AuthContext";

const Navbar = () => {
  const { user, logOutInfo } = useContext(AuthContext);

  const handleLogout = () => {
    logOutInfo()
      .then(() => console.log("User logged out"))
      .catch((error) => console.error("Logout error:", error));
  };

  const links = (
    <>
      <NavLink to="/" className={({ isActive }) => `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`}>
        <FaHome className="mr-1" /> Home
      </NavLink>

      <NavLink to="/all-properties" className={({ isActive }) => `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`}>
        <FaBuilding className="mr-1" /> All Properties
      </NavLink>

      {user && (
        <>
          <NavLink to="/add-property" className={({ isActive }) => `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`}>
            <FaPlus className="mr-1" /> Add Property
          </NavLink>

          <NavLink to="/my-properties" className={({ isActive }) => `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`}>
            <FaClipboardList className="mr-1" /> My Properties
          </NavLink>

          <NavLink to="/my-ratings" className={({ isActive }) => `flex items-center mx-2 ${isActive ? "font-bold text-blue-600" : ""}`}>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Logo" className="w-14" />
          <span className="font-bold text-2xl">Home Nest</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <>
            <NavLink to="/register" className="mx-2 btn btn-outline btn-sm">
              Sign Up
            </NavLink>
            <NavLink to="/login" className="mx-2 btn btn-neutral btn-sm">
              Login
            </NavLink>
          </>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "https://i.pravatar.cc/300"} alt={user.displayName || "User"} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <span className="font-semibold">{user.displayName}</span>
              </li>
              <li>
                <span className="text-sm text-gray-500">{user.email}</span>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-outline btn-sm w-full mt-2">
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
