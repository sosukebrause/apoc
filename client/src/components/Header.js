import React from "react";
import { Link } from "react-router-dom";

import AuthButtons from "./auth/AuthButtons";
import { Fade } from '@material-ui/core';
import apoc1 from "../images/apoc1.PNG";


const divStyle = {
  marginLeft: '60px',
};

import "./Header.css";

const Header = () => {
  return (

    <div className="container" style = {divStyle}>
    <header id="header">
      {/* <Link to="/"> */}
        <h1 id= "title" className="title blink">APOCALYPSE</h1>
      {/* </Link> */}
      {/* <div>
       
      <img src = {apoc1} alt = "not working" />
      </div> */}
      <AuthButtons />
    </header>
    </div>
  );
};
export default Header;
