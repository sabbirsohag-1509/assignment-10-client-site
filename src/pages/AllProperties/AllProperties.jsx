import React, { useEffect, useState } from "react";
import AllProperty from "./AllProperty";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/properties`)
      .then((res) => res.json())
      .then((data) => {
          setProperties(data);
            setLoading(false);
      });
  }, []);
    
    if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Helmet> 
        <title>All Properties - HomeNest</title>
      </Helmet>
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 relative inline-block px-6 py-2">
          Feature All <span className="text-blue-600">Properties</span>
          {/* Outer border */}
          <span className="absolute inset-0 border-2 border-blue-600 rounded-lg pointer-events-none -z-10"></span>
          {/* Inner border */}
          <span className="absolute inset-[4px] border-2 border-blue-300 rounded-lg pointer-events-none -z-10"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-5 pt-5">
        {properties.map((property) => (
          <AllProperty key={property._id} property={property}></AllProperty>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
