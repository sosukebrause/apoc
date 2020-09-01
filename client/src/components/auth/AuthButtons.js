import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import { useUserContext } from "../context/UserContext";


const buttonStyle = {
  marginLeft: '10px',
};


const AuthButtons = () => {
  const { userData, setUserData } = useUserContext();

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <Button variant ="outlined" color="primary" onClick={logout}>
            Log Out
        </Button>
      ) : (
        <>
    <Button variant ="outlined" color="secondary" style = {buttonStyle} onClick={register}>
    Register
    </Button>
    
    <Button variant="outlined" color="secondary" style = {buttonStyle} onClick={login}>
    Log in
    </Button>
        </>
      )}
    </nav>
  );
};

export default AuthButtons;

