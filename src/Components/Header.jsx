import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header className="bg-blue-400">
      <div className="logo_box">
        <img src="/public/images/logo.png" alt="" />
        <h1>CryptoHub</h1>
      </div>

      <div className="hamburger">
        <Icon icon="material-symbols:menu" />
      </div>
    </header>
  );
};

export default Header;
