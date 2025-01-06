import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 