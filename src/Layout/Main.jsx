


import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();

    
    const noHeaderFooter = location.pathname === '/login' || location.pathname === '/signup' ;
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
           <Outlet></Outlet>
              {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;