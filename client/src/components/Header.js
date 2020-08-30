import React from "react";
import { Link } from "react-router-dom";

import AuthButtons from "./auth/AuthButtons";

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
