import { InputBase } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS // CONTEXT //
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

//chaning above line to the following line
import { UserProvider } from "./components/context/UserContext";

import Header from "./components/Header";

import Animation from "./components/Animation";
import Home from "./components/pages/Home";

import "./App.css";

import BackgroundVideo from "./components/background/BackgroundVideo";
import Nav from "./components/Nav";

function App() {

  return (
    // userProvider is now wrapping all logic for handling our state, updating state, and pushing out different values to all of our children.

    <>
      <UserProvider>
        <BrowserRouter>

          <Header />
          <div className="container">
         
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
            <InputBase />
          </div>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
export default App;
