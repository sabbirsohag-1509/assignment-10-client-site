import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";

const DashboardTable = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/properties?limit=20");
        setProperties(res.data.properties || res.data); // depending on backend response
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch properties");
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 p-4">{error}</p>;
  }

  return (
      <div className="p-4 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">Latest Properties Table</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Property Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">City</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Posted Date</th>
          </tr>
        </thead>
        <tbody>
          {properties.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4">
                No properties found
              </td>
            </tr>
          ) : (
            properties.map((prop, idx) => (
              <tr key={prop._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{idx + 1}</td>
                <td className="border px-4 py-2">{prop.propertyName}</td>
                <td className="border px-4 py-2">{prop.category}</td>
                <td className="border px-4 py-2">{prop.city}</td>
                <td className="border px-4 py-2">{prop.price}</td>
                <td className="border px-4 py-2">
                  {new Date(prop.postedDate).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
