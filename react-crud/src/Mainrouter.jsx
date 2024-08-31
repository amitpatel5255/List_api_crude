import React from "react";
import Navbar from "./Navbaar";
import Userdata from "./Userdata";
import Userdetails from "./Userdetails";
import Useredit from "./Useredit";
import Useradd from "./Useradd";
import { createBrowserRouter } from "react-router-dom";
const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />
    },
    {
        path: "/Userdata",
        element: <><Navbar /><Userdata /></>
    },
    {
        path: "/Useradd",
        element: <><Navbar /><Useradd /></>
    },
    {
        path: "/Userdetails/:userid",
        element: <><Navbar /><Userdetails /></>
    },
    {
        path: "/Useredit/:userid",
        element: <><Navbar /><Useredit /></>
    }
]);
export default Mainrouter