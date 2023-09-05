
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const MainLayout = ({isToggle,handleToggle}) => {


  return (
    <div>
      <Header handleToggle={handleToggle} isToggle={isToggle} />
      <Outlet />
      <Footer />
      <Sidebar isToggle={isToggle} />
    </div>
  );
};

export default MainLayout;
