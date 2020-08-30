import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import AuthButtons from "./auth/AuthButtons";
import { Fade } from '@material-ui/core';
import apoc1 from "../images/apoc1.PNG";

const Header = () => {
  return (
    <div className="container">
    <header id="header">
      <Link to="/">
        <h1 id= "title" className="title">Apocalypse App</h1>
      </Link>
      <div>
        <br>
        </br>
      <img src = {apoc1} alt = "not working" />
      </div>
      
      <AuthButtons />
    </header>
    </div>
  );
};
export default Header;
