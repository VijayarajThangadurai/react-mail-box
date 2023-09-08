import React from "react";
import { Fragment } from "react-bootstrap/dist/react-bootstrap";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
const RootLayout = (props) => {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
}

export default RootLayout;