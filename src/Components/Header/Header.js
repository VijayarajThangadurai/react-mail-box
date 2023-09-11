import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import classes from './Header.module.css';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useNavigate } from "react-router-dom";

function Header(){
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickLogoutHandler=()=>{
        dispatch(authActions.logout());
        navigate('/',{replace:true})
        console.log(auth)
    }
    return (
        <Navbar className={classes["bg-body-tertiary"]}>
            <Container>
                <Navbar.Brand href="#home" className={classes.brand}>Metro Mail</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            {auth.isLoggedIn && <Navbar.Text>
                Signed in as : <a href="#login">{auth.email}</a>
            </Navbar.Text>}
            </Navbar.Collapse>
            {auth.isLoggedIn && <Button variant="warning" style={{marginLeft:'1rem'}}onClick={clickLogoutHandler}>Logout</Button>}
            </Container>
        </Navbar>
    );
};

export default Header;