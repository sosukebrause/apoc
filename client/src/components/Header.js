import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import AuthButtons from "./auth/AuthButtons";
import { Fade } from '@material-ui/core';
import apoc1 from "../images/apoc1.PNG";


const divStyle = {
  marginLeft: '60px',
};


const Header = () => {
  return (
    <div className="container">
      <header id="header">
            <h1 id="title" className="title blink">
              Apocalypse
            </h1>
        <AuthButtons />
      </header>
    </div>
  );
};
export default Header;
