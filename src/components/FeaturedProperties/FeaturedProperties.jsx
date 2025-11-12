import React, { useEffect, useState } from "react";
import FeaturedProperty from "./FeaturedProperty";
import Loading from "./../Loading/Loading";
import { Helmet } from "react-helmet-async";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://home-nest-gamma.vercel.app/latest-properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return (
      <div className="w-20 md:w-24 lg:w-28 mx-auto my-10">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Helmet> 
        <title>Featured Properties - HomeNest</title>
      </Helmet>
      {/* Heading */}
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 relative inline-block px-6 py-2">
          Featured <span className="text-blue-600">Properties</span>
          {/* Outer border */}
          <span className="absolute inset-0 border-2 border-blue-600 rounded-lg pointer-events-none -z-10"></span>
          {/* Inner border */}
          <span className="absolute inset-[4px] border-2 border-blue-300 rounded-lg pointer-events-none -z-10"></span>
        </h2>
      </div>
     

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pt-10">
        {properties.map((property) => (
          <FeaturedProperty key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
