import React, { Fragment } from "react";

import Navbar from "../Navbar/Navbar";

import * as classes from "./layout.module.scss";

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.container}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
