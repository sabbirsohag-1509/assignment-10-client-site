import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context-Provider/AuthContext";
import Loading from "../../components/Loading/Loading";
import MyProperty from "./MyProperty";
import { Helmet } from "react-helmet-async";

const MyProperties = () => {
  const { user } = use(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-properties?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          setProperties(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Helmet> 
        <title>My Properties - HomeNest</title>
      </Helmet>
      
      <div className="text-center pb-6 relative z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 relative inline-block px-6 py-2">
          My <span className="text-blue-600">Properties</span>
          {/* Outer border */}
          <span className="absolute inset-0 border-1 border-blue-600 rounded-lg pointer-events-none -z-0"></span>
          {/* Inner border */}
          <span className="absolute inset-[4px] border-1 border-blue-300 rounded-lg pointer-events-none -z-0"></span>
        </h2>
      </div>
                  {/* //////////// */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
        {properties.length === 0 ? (
          <div className="flex justify-center items-center col-span-full">
            <h3 className="text-center text-gray-600 dark:text-gray-300 text-lg">
              You have not added any properties yet. <span className="font-semibold text-blue-600">{ user.displayName }</span>
            </h3>
          </div>
        ) : (
          properties.map((property) => <MyProperty key={property._id} setProperties={setProperties} property={property}></MyProperty>)
        )}
      </div>
    </div>
  );
};

export default MyProperties;
