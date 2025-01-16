import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet> </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;