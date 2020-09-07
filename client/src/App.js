import { InputBase } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS // CONTEXT //
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//MAP COMPONENTS

//chaning above line to the following line
import { UserProvider } from "./components/context/UserContext";

import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    // userProvider is now wrapping all logic for handling our state, updating state, and pushing out different values to all of our children.

    <div className="App">
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
    </div>
  );
}
export default App;
