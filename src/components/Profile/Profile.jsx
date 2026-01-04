import React, { useContext } from "react";
import { AuthContext } from "../../pages/Context-Provider/AuthContext";
import { User, Mail, MapPin, Phone, LogOut } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Profile = () => {
  const { user, logOutInfo } = useContext(AuthContext);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all">
        {/* Left: Profile Image */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center p-6">
          <div className="w-40 h-40 rounded-full border-4 border-white dark:border-gray-700 overflow-hidden shadow-lg">
            <img
              src={user?.photoURL || "https://i.pravatar.cc/300"}
              alt={user?.displayName || "User"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: User Info */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between gap-4">
          {/* User Name & Logout */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <User size={22} /> {user?.displayName || "User Name"}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Member since: {new Date(user?.metadata?.creationTime).toLocaleDateString() || "N/A"}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-primary flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <Mail size={18} /> <span>{user?.email || "user@example.com"}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <Phone size={18} /> <span>+880 1234 567 890</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <MapPin size={18} /> <span>Rangpur, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <User size={18} /> <span>Category: Regular User</span>
            </div>
          </div>

          {/* Short Bio / Description */}
          <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            <p>
              Welcome to your profile page! Here you can view your personal
              information, update your settings, and manage your account
              securely. Keep your details updated to enjoy a seamless
              experience with HomeNest. Explore properties, manage your
              listings, and track your ratings easily from your dashboard.
            </p>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6 flex justify-start">
            <Link to="/dashboard/profile-edit" className="btn btn-outline btn-primary">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
