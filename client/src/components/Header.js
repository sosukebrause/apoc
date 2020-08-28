import React from "react";
import { Link } from "react-router-dom";

import AuthButtons from "./auth/AuthButtons";

const Header = () => {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">This is the Header component</h1>
      </Link>
      <AuthButtons />
    </header>
  );
};
export default Header;
