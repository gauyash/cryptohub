import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./../styles/Header.scss";

const Header = ({ isToggle, handleToggle }) => {
  return (
    <header className="bg-black text-white flex items-center justify-between px-5 py-7">
      <div className="logo_box flex items-center gap-4">
        <img src="/images/logo.png" alt="logo" width="32px" />
        <Link className="logo_text font-bold" to="/">
          CryptoHub
        </Link>
      </div>

      <div
        onClick={handleToggle}
        className="hamburger bg-white text-black flex items-center justify-center"
      >
        <Icon
          className={`${isToggle ? "" : "active"}`}
          icon="material-symbols:menu"
        />
        <Icon
          className={`${isToggle ? "active" : ""}`}
          icon="material-symbols:close"
        />
      </div>
    </header>
  );
};

export default Header;
