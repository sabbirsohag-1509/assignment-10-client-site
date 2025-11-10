import React, { use, useEffect, useState } from "react";
import bgImg from "../../assets/bgImg.jpg";
import { AuthContext } from "../Context-Provider/AuthContext";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";

const UpdateProperties = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/propertyDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        console.log(data);
        setLoading(false);
      });
  }, [id]);

  //submit handler //
  const formHandleSubmit = async (e) => {
    e.preventDefault();
    const propertyName = e.target.propertyName.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const city = e.target.city.value;
    const area = e.target.area.value;
    const address = e.target.address.value;
    const imageLink = e.target.imageLink.value;
    // console.log(propertyName, description, category, price, location, imageLink);
    const updatedProperty = {
      propertyName,
      description,
      category,
      price,
      location,
      city,
      area,
      address,
      imageLink,
    };
    // console.log(updatedProperty);
    try {
      await axios.patch(
        `http://localhost:5000/properties/${id}`,
        updatedProperty
      );
      //   console.log("Property updated:", res.data);
      Swal.fire({
        icon: "success",
        title: "Property Updated!",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/my-properties");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "There was an error updating the property. Please try again.",
      });
      console.error("Update error:", error);
    }
  };

  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Update Form */}
      <form
        onSubmit={formHandleSubmit}
        className="relative w-full max-w-3xl bg-gray-900/90 text-gray-100 shadow-2xl rounded-lg p-8 space-y-6 z-10 transition-transform duration-300 hover:scale-[1.01]"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Update Property Information
        </h2>

        {/* Property Name */}
        <div>
          <label className="block text-gray-300 mb-1">Property Name</label>
          <input
            type="text"
            name="propertyName"
            defaultValue={property?.propertyName}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-300 mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            defaultValue={property?.description}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-300 mb-1">Category</label>
          <select
            name="category"
            defaultValue={property?.category}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <label className="block text-gray-300 mb-1">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={property?.price}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              defaultValue={property?.city}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Area
            </label>
            <input
              type="text"
              name="area"
              defaultValue={property?.area}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              defaultValue={property?.address}
              className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Image Link */}
        <div>
          <label className="block text-gray-300 mb-1">Image Link</label>
          <input
            type="text"
            name="imageLink"
            defaultValue={property?.imageURL}
            className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-1">User Name</label>
            <input
              type="text"
              name="userName"
              readOnly
              placeholder={`${user?.displayName}`}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">User Email</label>
            <input
              type="email"
              name="userEmail"
              readOnly
              placeholder={`${user?.email}`}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center">
          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-200 cursor-pointer"
            >
              Update Property
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-200 flex items-center cursor-pointer"
            >
              <IoClose />
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProperties;
