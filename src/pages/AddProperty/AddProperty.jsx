import React, { useState, useContext } from "react";
import { AuthContext } from "../Context-Provider/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const AddProperty = () => {
  const { user } = useContext(AuthContext);
  //   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    propertyName: "",
    description: "",
    category: "",
    price: "",
    city: "",
    area: "",
    address: "",
    imageURL: "",
  });

  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <div className="text-center mt-20 text-gray-700 dark:text-gray-200">
        Loading user info...
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      propertyName,
      description,
      category,
      price,
      city,
      area,
      address,
      imageURL,
    } = formData;

    if (
      !propertyName ||
      !description ||
      !category ||
      !price ||
      !city ||
      !area ||
      !address ||
      !imageURL
    ) {
      Swal.fire({
        icon: "error",
        title: "Required!!",
        text: "All fields are required!",
      });
      return;
    }

    setLoading(true);

    const newProperty = {
      propertyName,
      description,
      category,
      price,
      city,
      area,
      address,
      imageURL,
      userName: user.displayName,
      userEmail: user.email,
    };
    try {
      const res = await axios.post("http://localhost:3000/properties", {newProperty});
      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Property added successfully!",
          timer: 1500,
          showConfirmButton: false,
        });
        setFormData({
          propertyName: "",
          description: "",
          category: "",
          price: "",
          city: "",
          area: "",
          address: "",
          imageURL: "",
        });
        // navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Failed to add property",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: `${error}`,
        title: "Server Error",
        text: "Try again later!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
          Add New Property
        </h2>

        {/* Property Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">
            Property Name
          </label>
          <input
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Luxury Apartment...."
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Detailed description about the property......"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1200000"
          />
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dhaka"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Area
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Gulshan"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="House 12, Road 5"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-gray-700 dark:text-gray-200 mb-1">
            Image URL
          </label>
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Property Image URL"
          />
        </div>

        {/* Read-only User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Your Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 disabled:opacity-50"
          >
            {loading ? "Adding....." : "Add Property"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
