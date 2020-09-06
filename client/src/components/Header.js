import React from "react";
import "./Header.css";
// import Animation from "./Animation"

import AuthButtons from "./auth/AuthButtons";
// import { Fade } from "@material-ui/core";
import icon from "../images/virus.png";
import warning from "../images/warning.png";

const divStyle = {
  // height: "80px",
  // width: "55px"
};

const Header = () => {
  return (
    <div className="container">
      <header >
<div id = "header">
<h1 id="title" className="title blink">
          Danger Danger!
        </h1>
        <img id = "img" src={icon} />
        <img id = "img2" src={warning} />
</div>
        <AuthButtons />
      </header>
    </div>
  );
};
export default Header;
