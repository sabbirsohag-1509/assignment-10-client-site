import React from "react";
import { Link } from "react-router";
import {
  Home,
  Landmark,
  Building2,
  Warehouse,
  Store
} from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Apartments",
    icon: Home,
    description: "Modern apartments in prime city locations",
    path: "/all-properties?category=apartment",
  },
  {
    id: 2,
    title: "Villas",
    icon: Landmark,
    description: "Luxury villas with premium lifestyle facilities",
    path: "/all-properties?category=villa",
  },
  {
    id: 3,
    title: "Commercial",
    icon: Building2,
    description: "Office & commercial spaces for businesses",
    path: "/all-properties?category=commercial",
  },
  {
    id: 4,
    title: "Warehouses",
    icon: Warehouse,
    description: "Spacious warehouses for storage & logistics",
    path: "/all-properties?category=warehouse",
  },
  {
    id: 5,
    title: "Retail Shops",
    icon: Store,
    description: "Retail shops in high-traffic locations",
    path: "/all-properties?category=shop",
  },
];

const PropertyCategories = () => {
  return (
    <section
      className="relative py-20 overflow-hidden
      bg-gray-50 dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#1e293b]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <div className="absolute top-24 left-1/4 w-[320px] h-[320px]
          bg-blue-500/25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-16 right-1/4 w-[280px] h-[280px]
          bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2
          text-gray-900 dark:text-white"
          >
            Explore Property
            <span className="text-blue-600 dark:text-blue-400">
              {" "}Categories
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed
            text-gray-600 dark:text-gray-300">
            Browse properties by category and find the perfect place that matches
            your lifestyle and business needs.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={category.path}
                className="group"
              >
                <div
                  className="h-full rounded-xl p-6 text-center
                  bg-white dark:bg-[#020617]/70
                  border border-gray-200 dark:border-white/10
                  shadow-md hover:shadow-xl
                  transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="mx-auto w-14 h-14 flex items-center justify-center
                    rounded-full bg-blue-600/10
                    group-hover:bg-blue-600/20 transition"
                  >
                    <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold
                    text-gray-900 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed
                    text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>

                  <span
                    className="inline-block mt-4 text-sm font-semibold
                    text-blue-600 dark:text-blue-400
                    group-hover:underline"
                  >
                    View Properties →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;
