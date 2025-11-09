import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router"; // React Router v7+
import { MapPin, Info } from "lucide-react";

const FeaturedProperty = ({ property }) => {
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
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
    >
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <motion.img
          src={imageURL}
          alt={propertyName}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-[260px]">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {propertyName}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {description?.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={16} className="mr-1 text-blue-500" />
          <span className="truncate">
            {area}, {city}
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-blue-600">
            ${price.toLocaleString()}/=
          </p>
          <Link to={`/property/${_id}`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md transition-all"
            >
              <Info size={16} />
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProperty;
