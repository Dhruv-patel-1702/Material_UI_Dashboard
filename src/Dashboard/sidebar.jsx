import React from "react";
import { NavLink } from "react-router-dom";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LoginIcon from "@mui/icons-material/Login";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  const menuItems = [
    { icon: <LoginIcon />, text: "MYBID", path: "/mybid" },
    { icon: <Diversity3Icon />, text: "NEW LEADS", path: "/newleads" },
    { icon: <ViewInArIcon />, text: "MY PACKAGE", path: "/mypackage" }
  ];
  return (
    <div className="w-[270px] h-[97vh] bg-[#28282b] p-4 flex flex-col mt-3 ml-3 rounded-xl fixed">
      <div className="flex items-center gap-3 px-3 mb-6">
        <LocationOnIcon className="text-[#1A73E8] w-9 h-9" />
        <h2 className="text-white/90 text-lg font-medium">START YOUR TOUR</h2>
      </div>
      <nav className="flex-1 px-2">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="my-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? "bg-[#1A73E8] text-white" : "text-gray-400 hover:bg-white/10"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button className="flex w-full bg-[#1A73E8] text-white py-3 rounded-lg font-medium hover:bg-[#1557b0] transition-colors space-x-3 items-center justify-center">
        <ExitToAppIcon />
        <p>LOGOUT</p>
      </button>
    </div>
  );
};

export default Sidebar;