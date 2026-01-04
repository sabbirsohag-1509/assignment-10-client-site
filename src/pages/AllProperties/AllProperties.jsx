import React, { useEffect, useState } from "react";
import AllProperty from "./AllProperty";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const AllProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingg, setLoadingg] = useState(false);

  // Pagination & filter states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 8;

  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  // Fetch properties with filters
  const fetchProperties = () => {
    setLoading(true);

    const params = new URLSearchParams({
      page: currentPage,
      limit,
      category,
      city,
    });

    fetch(`https://home-nest-gamma.vercel.app/properties?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
        setTotalPages(data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  // Re-fetch when page, category, or city changes
  useEffect(() => {
    fetchProperties();
  }, [currentPage, category, city]);

  // Search handler (unchanged)
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoadingg(true);
    fetch(`https://home-nest-gamma.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoadingg(false);
      });
  };

  // Sort handler (unchanged)
  const handleSortChange = (sortValue) => {
    fetch(
      `https://home-nest-gamma.vercel.app/sort-properties?sort=${sortValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Helmet>
        <title>All Properties - HomeNest</title>
      </Helmet>

      {/* Title */}
      <div className="text-center my-8">
        <h2 className="text-xl md:text-2xl font-bold mb-2 relative inline-block px-6 py-1">
          Featured All <span className="text-blue-600">Properties</span>
          <span className="absolute inset-0 border border-blue-600 rounded-lg pointer-events-none -z-10"></span>
          <span className="absolute inset-[4px] border border-blue-300 rounded-lg pointer-events-none -z-10"></span>
        </h2>
        <p className="text-sm font-semibold text-gray-600 pb-4">
          Explore more featured properties — offering your dream home with
          elegance and style
        </p>
      </div>

      {/* Search + Filter + Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        {/* Search */}
        <div className="relative w-full max-w-md">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              placeholder="Search properties..."
              className="input input-bordered w-60 md:w-64 lg:w-80 ml-8 md:ml-0 pr-10 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 rounded-l-xl border-r-0 rounded-r-none"
            />
            <button className="btn absolute top-1/2 -translate-y-1/2 px-2 md:px-5 py-2 bg-blue-600 text-white rounded-xl rounded-l-none hover:bg-blue-700 transition-colors duration-300">
              {loadingg ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
          className="select select-bordered  dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 rounded-xl"
        >
          <option value="">All Categories</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>

        {/* City Filter */}
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setCurrentPage(1);
          }}
          className="select select-bordered  dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 rounded-xl"
        >
          <option value="">All Cities</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Dinajpur">Dinajpur</option>
          <option value="Chattogram">Chattogram</option>
        </select>

        {/* Sort */}
        <select
          onChange={(e) => handleSortChange(e.target.value)}
          className="select select-bordered dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 rounded-xl"
        >
          <option disabled selected>
            Sort By
          </option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="dateNew">Newest Listings</option>
          <option value="dateOld">Oldest Listings</option>
        </select>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <AllProperty key={property._id} property={property} />
        ))}
      </div>

      {/* Pagination */}
      <div className="text-center py-6">
        <div className="join">
          <button
            className="join-item btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            «
          </button>

          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={`join-item btn ${
                currentPage === page + 1
                  ? "btn-active bg-blue-600 text-white"
                  : ""
              }`}
            >
              {page + 1}
            </button>
          ))}

          <button
            className="join-item btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
