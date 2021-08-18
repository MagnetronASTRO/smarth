import React from "react";

import Navbar from "./Navbar/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div>{props.childer}</div>
    </div>
  );
};

export default Layout;
