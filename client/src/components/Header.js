import React from "react";
import "./Header.css";
// import Animation from "./Animation"

import AuthButtons from "./auth/AuthButtons";
// import { Fade } from "@material-ui/core";
// import explosion from "../images/explosion.png";

const divStyle = {
  // height: "80px",
  // width: "55px"
};

const Header = () => {
  return (
    <div className="container">
      <header id="header">
        <h1 id="title" className="title blink">
          Danger Danger!
        </h1>
        {/* <img src = {explosion} style = {divStyle} alt="not working"/> */}
        <AuthButtons />
        {/* <Animation/> */}
      </header>
    </div>
  );
};
export default Header;
