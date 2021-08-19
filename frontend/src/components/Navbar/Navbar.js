import React from "react";

import { Link } from "gatsby";

import * as classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <h1>Smarth</h1>
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/">Temperatures</Link>
        </li>
        <li>
          <Link to="/">Rooms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
