import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";

import classes from "./Authentication.module.css";
import SignUp from "./SignUp";
import LogIn from "./Login";
import { useState } from "react";

const Authentication = () => {
  const [isLoginVisible, setIsLoginVisible]= useState(true);

  const switchHandler = ()=>{
    setIsLoginVisible(!isLoginVisible);
  }
  return (
    <section className={classes.auth}>
      <Card>
        {!isLoginVisible && <SignUp/>}
        {isLoginVisible && <LogIn/>}
        <div className={classes.lowerCon}>
          <p>
            {!isLoginVisible? "Already Have An Account?" : "Create A New Account."}
            <button onClick={switchHandler}>
              {!isLoginVisible? "Log In" : "Sign Up"}<Link/></button>
          </p>
        </div>
        <SignUp />
      </Card>
    </section>
  );
};

export default Authentication;