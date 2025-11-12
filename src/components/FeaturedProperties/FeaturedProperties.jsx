import React, { useEffect, useState } from "react";
import FeaturedProperty from "./FeaturedProperty";
import Loading from "./../Loading/Loading";
import { Helmet } from "react-helmet-async";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingg, setLoadingg] = useState(false);
  // const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/latest-properties`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
   // Search handler

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoadingg(true);
    console.log("Searching for:", search_text);
    fetch(`http://localhost:5000/search?search=${search_text}`)
      .then((res) => res.json())
      .then(data => {
        // console.log(data);
        setProperties(data);
        setLoadingg(false);
      })
  };

  // Sort handler
  const handleSortChange = (sortValue) => {
    // setSortOption(sortValue);
   fetch(`http://localhost:5000/sort-properties?sort=${sortValue}&limit=6`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setProperties(data);
    })
  }
 

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
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              placeholder="Search properties..."
              className="input input-bordered w-60 md:w-64 lg:w-72 ml-8 md:ml-0 pr-10 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 rounded-l-xl border-r-0 rounded-r-none"
            />
            <button className="btn absolute top-1/2 -translate-y-1/2 px-2 md:px-5 py-2 bg-blue-600 text-white rounded-xl rounded-l-none hover:bg-blue-700 transition-colors duration-300">
              {loadingg ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {/* Sort */}
        <select onChange={(e) => handleSortChange(e.target.value)} className="select select-bordered w-60 md:w-64 lg:w-72 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 rounded-xl">
          <option disabled selected>
            Sort By
          </option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="dateNew">Newest Listings</option>
          <option value="dateOld">Oldest Listings</option>
        </select>
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
