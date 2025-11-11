import React from "react";
import { Link } from "react-router";
import { MapPin, Info } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";

const AllProperty = ({ property }) => {
  const { _id, propertyName, category, description, city, area, price, imageURL } = property;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg border border-gray-200 transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
      
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={imageURL}
          alt={propertyName}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[260px]">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {propertyName}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {description?.length > 80 ? description.slice(0, 80) + "..." : description}
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={16} className="mr-1 text-blue-500" />
          <span className="truncate">{area}, {city}</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-blue-600 flex items-center">
            <TbCurrencyTaka className="mr-1" />
            {price.toLocaleString()}/=
          </p>

          <Link to={`/propertyDetails/${_id}`}>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition-all duration-300">
              <Info size={16} />
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
