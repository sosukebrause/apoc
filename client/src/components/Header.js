import React from "react";
import "./Header.css";
// import Animation from "./Animation"

import AuthButtons from "./auth/AuthButtons";

import icon from "../images/virus.png";
import warning from "../images/warning.png";


const Header = () => {
  return (
    <div >
      <header >
      <AuthButtons  />
<div id = "header">
  <div className = "title">
  <h1 id="title" className="title blink">
          ALERT
        </h1>
        <img className = "img2" src={warning} />
  </div>

        {/* <img id = "img" src={icon} /> */}
     
</div>
       
      </header>
    </div>
  );
};
export default Header;
