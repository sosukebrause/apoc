import { InputBase } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS // CONTEXT //
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./components/context/UserContext.js";
import Header from "./components/Header";
import Home from "./components/pages/Home";

import './App.css';



function App() {
  //use Context to use State for scope of whole app
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token") || null;
      if (token) {
        setUserData({
               token,
               user: "Julia",
          });
      }
      // if (token === null) {
      //   localStorage.setItem("auth-token", "");
      //   token = "";
      // }
      // const tokenRes = await Axios.post(
      //   "http://localhost:5000/users/tokenIsValid",
      //   null,
      //   { headers: { "x-auth-token": token } }
      // );
      // if (tokenRes.data) {
      //   const userRes = await Axios.get("http://localhost:5000/users/", {
      //     headers: { "x-auth-token": token },
      //   });
      //   setUserData({
      //     token,
      //     user: userRes.data,
      //   });
      // }
    };

    checkLoggedIn();
  }, []);

  return (
//Sosuke's commits
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          
          <div className="container">
          <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            <InputBase />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
  //Sosuke commits end
}
export default App;

