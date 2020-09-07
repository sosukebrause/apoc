import React from "react";
import "./Header.css";
// import Animation from "./Animation"

import AuthButtons from "./auth/AuthButtons";

import icon from "../images/virus.png";
import warning from "../images/warning.png";

const divStyle = {
  // height: "80px",
  // width: "55px"
};

const Header = () => {
  return (
    <div >
      <header >
<div id = "header">
  <div className = "title">
  <h1 id="title" className="title">
          ALERT
        </h1>
        <img className = "img2 blink" src={warning} />
  </div>

        {/* <img id = "img" src={icon} /> */}
     
</div>
        <AuthButtons  />
      </header>
    </div>
  );
};
export default Header;
