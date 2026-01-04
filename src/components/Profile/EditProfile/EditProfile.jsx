import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../pages/Context-Provider/AuthContext";
import { User } from "lucide-react";

const ProfileEdit = ({ refreshProfile }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    phone: user.phone || "",
    address: user.address || "",
    bio: user.bio || "",
    photoURL: user.photoURL || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:5000/users/${user.uid}`,
        formData
      );

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          timer: 1500,
          showConfirmButton: false,
        });
        refreshProfile();
      } else {
        Swal.fire("Oops!", res.data.message, "error");
      }
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
        
        {/* Profile Image Section */}
        <div className="flex flex-col items-center md:w-1/3 gap-4">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
            <img
              src={formData.photoURL || "https://i.pravatar.cc/300"}
              alt={formData.displayName || "User"}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">
            {formData.displayName || "User Name"}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300 text-center">
            {user.email || "Email"}
          </p>
        </div>

        {/* Form Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            Edit Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="displayName"
                value={formData.displayName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Profile Image URL</label>
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Short Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                placeholder="Write something about yourself..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
            >
              Save Changes
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
