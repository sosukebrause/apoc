import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AuthButtons from "./auth/AuthButtons";
import { Fade } from "@material-ui/core";
import apoc1 from "../images/apoc1.PNG";

const divStyle = {
  marginLeft: "60px",
};

import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <header id="header">
        <Link to="/">
          <span>
            <h1 id="title" className="title">
              Apocalypse App
            </h1>
          </span>
          <span className="material-icons">notifications_active</span>
        </Link>
        <AuthButtons />
      </header>
    </div>
  );
};
export default Header;
