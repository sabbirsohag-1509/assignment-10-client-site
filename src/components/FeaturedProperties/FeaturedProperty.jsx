import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { MapPin, Info } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";

const FeaturedProperty = ({ property }) => {
  const {
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
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden 
                 shadow-md hover:shadow-2xl dark:hover:shadow-blue-900/40 
                 transition-all duration-300 border border-gray-200 dark:border-gray-700"
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
      <div className="p-5 flex flex-col justify-between h-[260px] transition-colors duration-300">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 line-clamp-1">
          {propertyName}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 leading-relaxed">
          {description?.length > 80
            ? description.slice(0, 80) + "..."
            : description}
        </p>

        {/* Location */}
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
          <MapPin size={16} className="mr-1 text-blue-500" />
          <span className="truncate">
            {area}, {city}
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <div className="flex justify-center">
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center">
              <TbCurrencyTaka />
              {price.toLocaleString()}/=
            </p>
          </div>
          <Link to={`/propertyDetails/${property._id}`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 
                         bg-blue-600 hover:bg-blue-700 
                         dark:bg-blue-500 dark:hover:bg-blue-600 
                         text-white text-sm font-medium 
                         rounded-lg shadow-md dark:shadow-blue-900/50 
                         transition-all cursor-pointer"
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
