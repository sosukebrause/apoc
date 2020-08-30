import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';

import UserContext from "../context/UserContext";

const AuthButtons = () => {
  const { userData, setUserData } = useContext(UserContext);

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
        <Button color="primary" onClick={logout}>
            Log Out
        </Button>
      ) : (
        <>
    <Button variant ="outlined" color="primary" className = "margin-left" onClick={register}>
    Register
    </Button>
<Button variant="outlined" color="primary" onClick={login}>
    Log in
</Button>
        </>
      )}
    </nav>
  );
};

export default AuthButtons;

