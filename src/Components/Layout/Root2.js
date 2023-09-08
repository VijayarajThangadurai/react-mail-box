import React from "react";
import SideBar from "../Profile/SideBar";
import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";
const Root2Layout =(props)=>{
    return(
<section>
    <div className={classes.root}>
    <SideBar/>
    <Outlet/>
    </div>
</section>
    )
};

export default Root2Layout;