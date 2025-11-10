import React from "react";
import { MapPin, Info, Pencil, Trash2 } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const MyProperty = ({ property }) => {
  const { propertyName, category, price, city, area, postedDate, imageURL } =
    property;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
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
        <h2 className="text-2xl font-semibold text-gray-800">
          {propertyName}
        </h2>

        <p className="text-sm text-gray-500">Category: {category}</p>

        <div className="flex items-center gap-1 text-gray-600">
          <MapPin size={16} />
          <span>
            {city}, {area}
          </span>
        </div>

        <p className="flex items-center gap-1 text-gray-800 font-semibold">
          <TbCurrencyTaka className="text-xl" /> {price}/=
        </p>

        <p className="text-xs text-gray-500">
          Posted on: {new Date(postedDate).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-0.5">
          <MdEmail /> {property.userEmail}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-3">
          <button className="flex items-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium w-full sm:w-36 justify-center">
            <Info size={18} /> View Details
          </button>

          <button className="flex items-center gap-1 bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium w-full sm:w-36 justify-center">
            <Pencil size={16} /> Update
          </button>

          <button className="flex items-center gap-1 bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-medium w-full sm:w-36 justify-center">
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProperty;
