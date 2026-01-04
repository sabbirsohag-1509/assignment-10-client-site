import React from "react";
import DashboardCards from "../DashboardCards/DashboardCards";
import DashboardCharts from "../DashboardCharts/DashboardCharts";
import DashboardTable from "../DashboardTable/DashboardTable";


const DashboardHome = () => {
  return (
    <div className="p-6 sm:p-8 lg:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* ================= Overview Cards ================= */}
      <DashboardCards />

      {/* ================= Charts ================= */}
      <DashboardCharts />

      {/* ================= Latest Properties Table ================= */}
      <DashboardTable />
    </div>
  );
};

export default DashboardHome;
