import { Outlet } from "react-router-dom";
import Footer from "../../Coponent/Footer/Footer";
import Navbar from "../../Coponent/Navbar/Navbar";


const Root = () => {
    return (
        <div  className="border"   >
           <Navbar></Navbar>
             
            <Outlet></Outlet>

           <Footer></Footer>
        </div>
    );
};

export default Root;