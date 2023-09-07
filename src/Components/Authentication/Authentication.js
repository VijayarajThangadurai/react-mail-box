import React from "react";
import Card from "../UI/Card";

import classes from "./Authentication.module.css";
import SignUp from "./SignUp";

const Authentication = () => {
  return (
    <section className={classes.auth}>
      <Card>
        <SignUp />
      </Card>
    </section>
  );
};

export default Authentication;