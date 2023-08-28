import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import './../styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <>
      <nav className="bg-black text-white">
        <ul className="flex flex-col gap-7">
          <li>
            <Link className="flex items-center gap-6" to="/">
              <Icon icon="material-symbols:home-outline" width="25px" />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-6" to="/cryptocurrencies">
              <Icon icon="arcticons:crypto-prices" color="white" width="25px" />
              <p>Cryptocurrencies</p>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-6" to="/news">
              <Icon icon="tabler:news" width="25px" />
              <p>News</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
