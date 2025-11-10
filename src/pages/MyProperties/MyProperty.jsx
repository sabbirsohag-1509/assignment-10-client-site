import { MapPin, Info, Pencil, Trash2 } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyProperty = ({ property, setProperties }) => {
  const { propertyName, category, price, city, area, postedDate, imageURL } =
    property;

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
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative">
        <img
          src={imageURL}
          alt={propertyName}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-6 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {propertyName}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Category: {category}
        </p>

        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <MapPin size={16} />
          <span>
            {city}, {area}
          </span>
        </div>

        <p className="flex items-center gap-1 text-gray-800 dark:text-gray-100 font-semibold">
          <TbCurrencyTaka className="text-xl" /> {price}/=
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          Posted on: {new Date(postedDate).toLocaleDateString()}
        </p>

        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-0.5">
          <MdEmail /> {property.userEmail}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-3">
          <Link
            to={`/propertyDetails/${property._id}`}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium sm:w-36 justify-center"
          >
            <Info size={18} /> Details
          </Link>

          <Link
            to={`/update-properties/${property._id}`}
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium w-full sm:w-36 justify-center"
          >
            <Pencil size={16} /> Update
          </Link>

          <button
            onClick={deleteBtnHandler}
            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium w-full sm:w-36 justify-center"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProperty;
