import React, { useContext, useState, useEffect } from "react";
import {
  Home,
  Settings,
  LogOut,
  User,
  Sun,
  Moon,
  Building2,
  HomeIcon,
  Plus,
  Star,
  Menu,
} from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../pages/Context-Provider/AuthContext";
import { Link, NavLink, Outlet } from "react-router";
import logoImg from "../../assets/logo.png";

const DashboardLayout = () => {
  const { user, logOutInfo } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  /* ================= Theme ================= */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  /* ================= Logout ================= */
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out",
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
            Swal.fire({
              icon: "error",
              title: "Logout failed",
              text: error.message,
            });
          });
      }
    });
  };

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= Drawer Content ================= */}
      <div className="drawer-content flex flex-col">
        {/* ================= Navbar ================= */}
        <nav className="navbar sticky top-0 z-50 bg-base-300 shadow-md px-3 sm:px-4 shadow-md">
  {/* ================= Left ================= */}
  <div className="navbar-start flex items-center gap-2">
    {/* Drawer Toggle (mobile) */}
    <label
      htmlFor="dashboard-drawer"
      className="btn btn-ghost btn-sm lg:hidden"
    >
      <Menu size={22} />
    </label>

    <h1 className="text-lg sm:text-xl font-semibold">
      Dashboard
    </h1>
  </div>

  {/* ================= Right ================= */}
  <div className="navbar-end flex items-center gap-3 sm:gap-4">
    {/* Theme Toggle */}
    <label className="flex items-center gap-1 cursor-pointer">
      <Sun size={14} />
      <input
        type="checkbox"
        className="toggle toggle-xs"
        checked={theme === "dark"}
        onChange={(e) => handleTheme(e.target.checked)}
      />
      <Moon size={14} />
    </label>

    {/* Welcome (hide on mobile) */}
    <div className="hidden sm:flex flex-col text-right leading-tight">
      <span className="text-xs text-gray-500">Hello</span>
      <span className="text-primary text-sm font-semibold">
        {user?.displayName || "User"}
      </span>
    </div>

    {/* Avatar Dropdown */}
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div
          className="w-9 sm:w-10 rounded-full tooltip tooltip-bottom"
          data-tip={user?.displayName || "User"}
        >
          <img
            src={user?.photoURL || "https://i.pravatar.cc/300"}
            alt={user?.displayName || "User"}
          />
        </div>
      </label>

      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-48 sm:w-52"
      >
        <li>
          <Link to="/dashboard/profile" className="justify-between">
            Profile <User size={16} />
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="justify-between">
            Dashboard Home <Home size={16} />
          </Link>
        </li>
        <li className="mt-1">
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-sm w-full"
          >
            <LogOut size={16} /> Logout
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>


        {/* ================= Main Content ================= */}
        <div className="p-4 sm:p-6 flex-1 bg-base-100">
          <Outlet />
        </div>
      </div>

      {/* ================= Sidebar ================= */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <div className="flex flex-col min-h-full w-64 bg-base-200">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 p-3 sm:p-4">
            <img
              src={logoImg}
              alt="Logo"
              className="w-10 sm:w-12 md:w-14 dark:invert"
            />
            <span className="font-bold text-lg sm:text-xl md:text-2xl">
              Home<span className="text-blue-600">Nest</span>
            </span>
          </Link>

          {/* Menu */}
          <ul className="menu px-2 sm:px-4 py-4 w-full flex-1 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-base-content/70 hover:text-blue-500"
                }
              >
                <HomeIcon size={16} /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/add-property"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-base-content/70 hover:text-blue-500"
                }
              >
                <Plus size={16} /> Add Property
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/my-properties"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-base-content/70 hover:text-blue-500"
                }
              >
                <Building2 size={16} /> My Properties
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/my-ratings"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-base-content/70 hover:text-blue-500"
                }
              >
                <Star size={16} /> My Ratings
              </NavLink>
            </li>
          </ul>

          {/* Sidebar Footer */}
          <div className="p-4 flex flex-col gap-2">
            <NavLink
              to="/dashboard/settings"
              className="btn btn-outline w-full"
            >
              <Settings size={16} /> Settings
            </NavLink>

            <button onClick={handleLogout} className="btn btn-primary w-full">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
