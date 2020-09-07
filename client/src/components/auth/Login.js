import Axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button } from "@material-ui/core";

import { useUserContext } from "../context/UserContext";
import ErrorNotice from ".././misc/ErrorNotice";

const divStyle = {
  marginLeft: "60px",
};

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { userData, setUserData } = useUserContext();

  // const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post("/users/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page" style={divStyle}>
      {/* <h2>Log in</h2> */}

      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <Input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <Input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="outlined" color="primary" type="submit" value="Log in">
          Login
        </Button>
      </form>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
    </div>
  );
}
