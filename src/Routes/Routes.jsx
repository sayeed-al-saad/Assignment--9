import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Pages/Home/Home";

import Details from "../Pages/Details/Details";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/categories.json") 
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>,
              },
            {
                path: "/categories/:id",
                element: <PrivateRoutes><Details></Details></PrivateRoutes>,
                loader: () => fetch("/categories.json") 
            }  
        ]
    }
])


export default router;