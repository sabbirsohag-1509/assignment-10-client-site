import React from "react";
import { Link } from "react-router";
import { MapPin, Info } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";

const AllProperty = ({ property }) => {
  const {
    _id,
    propertyName,
    category,
    description,
    city,
    area,
    price,
    imageURL,
  } = property;

  return (
    <div
      className="bg-white dark:bg-gray-600 rounded-xl overflow-hidden
                 shadow-sm hover:shadow-xl
                 transition-all duration-300
                 transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <div className="relative h-32 w-full overflow-hidden">
        <img
          src={imageURL}
          alt={propertyName}
          className="w-full h-full object-cover
                     transform hover:scale-105
                     transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-secondary text-white
                        text-xs font-semibold px-3 py-1
                        rounded-full shadow-md uppercase tracking-wide">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-[260px]">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white leading-snug">
          {propertyName}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-white text-sm line-clamp-2 leading-relaxed">
          {description?.length > 60
            ? description.slice(0, 60) + "..."
            : description}
        </p>

        {/* Location */}
        <div className="flex items-center text-gray-500 dark:text-white text-sm">
          <MapPin size={16} className="mr-1 text-blue-500 dark:text-white" />
          <span className="truncate">
            {area}, {city}
          </span>
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-blue-600 dark:text-white flex items-center">
          <TbCurrencyTaka size={20} />
          {price.toLocaleString()} Tk
        </p>

        {/* CTA */}
        <Link to={`/propertyDetails/${_id}`}>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2
                       bg-blue-500 hover:bg-blue-600
                       text-white text-sm font-medium
                       rounded-lg shadow-md
                       transition-all duration-300
                       w-full hover:scale-[1.02] active:scale-95"
          >
            <Info size={16} />
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllProperty;
