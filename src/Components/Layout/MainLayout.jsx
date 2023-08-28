import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Sidebar />
    </div>
  );
};

export default MainLayout;
