import { MapPin, Info, Pencil, Trash2 } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyProperty = ({ property, setProperties }) => {
  const {
    propertyName,
    category,
    price,
    city,
    area,
    postedDate,
    imageURL,
    userEmail,
  } = property;

  /// Delete Handler
  const deleteBtnHandler = async () => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const res = await axios.delete(
          `http://localhost:5000/properties/${property._id}`
        );

        if (res.data.deletedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Property has been deleted successfully.",
            timer: 1500,
            showConfirmButton: false,
          });
          setProperties((prevProperties) =>
            prevProperties.filter((p) => p._id !== property._id)
          );
        }
      } catch (error) {
        console.error("Delete error:", error);
        Swal.fire({
          icon: "error",
          title: "Delete Failed",
          text: "Something went wrong! Please try again later.",
        });
      }
    }
  };

  return (
    <div
      className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden
                 shadow-sm hover:shadow-md
                 transition-all duration-300
                 transform hover:-translate-y-0.5
                 w-full sm:w-[320px] md:w-[340px]"
    >
      {/* Property Image */}
      <div className="relative">
        <img
          src={imageURL}
          alt={propertyName}
          className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className="p-4 sm:p-5 space-y-2 dark:bg-gray-800">
        {/* Name & Category */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white truncate">
          {propertyName}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
          Category: {category}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-200 text-xs sm:text-sm">
          <MapPin size={14} />
          <span>
            {city}, {area}
          </span>
        </div>

        {/* Price */}
        <p className="flex items-center gap-1 text-gray-800 dark:text-white font-semibold text-sm sm:text-base">
          <TbCurrencyTaka className="text-lg sm:text-xl" /> {Number(price).toLocaleString()} Tk
        </p>

        {/* Posted Date & Email */}
        <p className="text-xs text-gray-500 dark:text-gray-300">
          Posted on: {new Date(postedDate).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-300 flex items-center gap-0.5">
          <MdEmail size={14} /> {userEmail}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 pt-3">
          <Link
            to={`/propertyDetails/${property._id}`}
            className="flex items-center w-full sm:w-28 gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium justify-center transition-all duration-300"
          >
            <Info size={16} /> Details
          </Link>

          <Link
            to={`/update-properties/${property._id}`}
            className="flex items-center w-full sm:w-28 gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium justify-center transition-all duration-300"
          >
            <Pencil size={14} /> Update
          </Link>

          <button
            onClick={deleteBtnHandler}
            className="flex items-center w-full sm:w-28 gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium justify-center transition-all duration-300"
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProperty;
