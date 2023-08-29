import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, useLocation } from "react-router-dom";
import "./../styles/Sidebar.scss";

const Sidebar = ({ isToggle }) => {
  const activeTab = {
    color: "red",
  };

  return (
    <>
      <nav className={`bg-black text-white ${isToggle ? "open" : ""}`}>
        <ul className="flex flex-col gap-7">
          <li>
            <NavLink
              className="flex items-center gap-6"
              style={({ isActive }) => (isActive ? activeTab : null)}
              to="/"
            >
              <Icon icon="material-symbols:home-outline" width="25px" />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-6"
              style={({ isActive }) => (isActive ? activeTab : null)}
              to="/cryptocurrencies"
            >
              <Icon icon="arcticons:crypto-prices" color="white" width="25px" />
              <p>Cryptocurrencies</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="flex items-center gap-6"
              style={({ isActive }) => (isActive ? activeTab : null)}
              to="/news"
            >
              <Icon icon="tabler:news" width="25px" />
              <p>News</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
