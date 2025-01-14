import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";


const Root = () => {
    return (
        <div className="">
            <Navber></Navber>
            <Outlet> </Outlet>
        </div>
    );
};

export default Root;