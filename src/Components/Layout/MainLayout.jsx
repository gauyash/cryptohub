import React, { useState, useEffect} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggle() {
    setIsToggle((prevToggleState) => !prevToggleState);
  }

  const location = useLocation();

  useEffect(() => {
    handleToggle();
  }, [location]);



  return (
    <div>
      <Header handleToggle={handleToggle} isToggle={isToggle} />
      <Outlet />
      <Footer />
      <Sidebar
        handleToggle={handleToggle}
        isToggle={isToggle}
        setIsToggle={setIsToggle}
      />
    </div>
  );
};

export default MainLayout;
