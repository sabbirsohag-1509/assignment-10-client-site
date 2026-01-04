import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardCharts = () => {
  const [propertiesData, setPropertiesData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("https://home-nest-gamma.vercel.app/dashboard/charts")
      .then((res) => {
        setPropertiesData(res.data.propertiesByCategory);
        setRevenueData(res.data.revenueByMonth);
        setUsersData(res.data.usersStatus);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Properties by Category (Bar Chart) */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <h3 className="font-semibold text-lg mb-4">Properties by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={propertiesData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue per Month (Line Chart) */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
        <h3 className="font-semibold text-lg mb-4">Revenue per Month</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* User distribution (Pie Chart) */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md md:col-span-2">
        <h3 className="font-semibold text-lg mb-4">Users Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={usersData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {usersData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
