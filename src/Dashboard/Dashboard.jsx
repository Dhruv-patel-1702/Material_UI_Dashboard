import React from "react";
import Sidebar from "../Dashboard/sidebar";
import { Outlet } from "react-router-dom"; // Import Outlet

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white w-full h-full">
      <div className="flex w-full px-3 gap-3 ">
        <div className="w-[270px]">
          <Sidebar/>
        </div>
        <div className="flex-1 p-4">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;