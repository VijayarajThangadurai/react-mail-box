import React from "react";
import { Container, Navbar } from "react-bootstrap";
import classes from './Header.module.css';
import { useSelector } from "react-redux";

function Header(){
    const auth = useSelector(state=>state.auth)
    return (
        <Navbar className={classes["bg-body-tertiary"]}>
            <Container>
                <Navbar.Brand href="#home" className={classes.brand}>Metro Mail</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as : <a href="#login">{auth.email}</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;