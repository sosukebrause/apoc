
import { InputBase } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS // CONTEXT //
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./components/context/UserContext.js";
import Header from "./components/Header";
import Home from "./components/Home";

import './App.css';

import BackgroundVideo from "./components/background/BackgroundVideo"
import Nav from "./components/Nav";
import Covid from "./components/Covid";
import Input from "./components/Input";

function App() {
  //use Context to use State for scope of whole app
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
//Sosuke's commits
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Header />
          <div className="container">
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

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import Search from "./components/Search";
// import Dashboard from "./components/Dashboard";




// function App() {
//   return (
//     <div className="App">
//     <Router>
//       <Nav />
//       <Switch>
//         <Route path="/register">
//        <Register/>
//         </Route>
//         <Route  path="/login">
//           <div>
//           <Login/>
//             </div>
//         </Route>
//         <Route path ="/search">
//         <div>
//          <Search/>
//         </div>
//         </Route>
//         <Route path ="/main">
//         <div>
//           <Dashboard/>
//         </div>
//         </Route>
//         <Route  path="/other">
//         <div>
        
//         </div>
//         </Route>
//       </Switch>
//     </Router>
//   </div>
//   )
// }

export default App;


{/* <div className={styles.container}>
<img className={styles.image} src={image} alt="COVID-19" />
<Cards data={data} />
<CountryPicker handleCountryChange={this.handleCountryChange} />
<Chart data={data} country={country} /> 
</div> */}