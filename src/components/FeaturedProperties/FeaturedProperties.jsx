import React, { useEffect, useState } from "react";
import FeaturedProperty from "./FeaturedProperty";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/latest-properties`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProperties(data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
        <p className="">
          Discover our handpicked selection of premium real estate listings,
          showcasing the best homes and investment opportunities available.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-5 pt-5">
        {properties.map((property) => (
          <FeaturedProperty key={property._id} property={property}></FeaturedProperty>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
