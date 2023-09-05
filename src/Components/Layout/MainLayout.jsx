import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import "./../../styles/Sidebar.scss";
const MainLayout = ({ isToggle, handleToggle }) => {
  return (
    <div>
      <Header handleToggle={handleToggle} isToggle={isToggle} />
      <div className="mainLayoutContainer">
        <Sidebar isToggle={isToggle} />
        <article>
          <Outlet />
          <Footer />
        </article>
      </div>
    </div>
  );
};

export default MainLayout;
