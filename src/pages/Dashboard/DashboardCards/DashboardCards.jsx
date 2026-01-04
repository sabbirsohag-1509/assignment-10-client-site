import React, { useEffect, useState } from "react";
import { Home, User, Star } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";

const DashboardCards = () => {
  const [stats, setStats] = useState({
    properties: 0,
    users: 0,
    reviews: 0,
    revenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/dashboard/stats");
        // Optional chaining to avoid undefined
        setStats({
          properties: res.data?.properties || 0,
          users: res.data?.users || 0,
          reviews: res.data?.reviews || 0,
          revenue: res.data?.revenue || 0,
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load stats");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cardsData = [
    { title: "Total Properties", value: stats.properties, icon: <Home />, bg: "bg-blue-500" },
    { title: "Total Users", value: stats.users, icon: <User />, bg: "bg-green-500" },
    { title: "Total Reviews", value: stats.reviews, icon: <Star />, bg: "bg-yellow-500" },
    { title: "Revenue", value: stats.revenue.toLocaleString(), icon: <TbCurrencyTaka />, bg: "bg-purple-500" },
  ];

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cardsData.map((card, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-xl shadow-md flex items-center gap-4 ${card.bg} text-white transform hover:scale-105 transition-transform duration-300`}
        >
          <div className="text-4xl">{card.icon}</div>
          <div>
            <p className="text-sm">{card.title}</p>
            <p className="text-2xl font-bold">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
