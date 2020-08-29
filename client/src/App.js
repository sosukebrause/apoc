
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Register from "./components/Register";
import Login from "./components/Login";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";




function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route path="/register">
       <Register/>
        </Route>
        <Route  path="/login">
          <div>
          <Login/>
            </div>
        </Route>
        <Route path ="/search">
        <div>
         <Search/>
        </div>
        </Route>
        <Route path ="/main">
        <div>
          <Dashboard/>
        </div>
        </Route>
        <Route  path="/other">
        <div>
        
        </div>
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App;


{/* <div className={styles.container}>
<img className={styles.image} src={image} alt="COVID-19" />
<Cards data={data} />
<CountryPicker handleCountryChange={this.handleCountryChange} />
<Chart data={data} country={country} /> 
</div> */}