import React, { useEffect, useState } from "react";
import AllProperty from "./AllProperty";
import Loading from "../../components/Loading/Loading";

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
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-5">Feature All Properties</h2>
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
