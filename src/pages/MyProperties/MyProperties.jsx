import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context-Provider/AuthContext";
import Loading from "../../components/Loading/Loading";
import MyProperty from "./MyProperty";

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
    <div className="max-w-6xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">My Properties</h2>
      </div>
                  {/* //////////// */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {properties.length === 0 ? (
          <div className="text-center">
            <h3 className="text-xl text-blue-700">You have not added any properties yet.</h3>
          </div>
        ) : (
          properties.map((property) => <MyProperty key={property._id} property={property}></MyProperty>)
        )}
      </div>
    </div>
  );
};

export default MyProperties;
