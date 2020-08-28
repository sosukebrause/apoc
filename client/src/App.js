
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BackgroundVideo from "./components/background/BackgroundVideo"
import Nav from "./components/Nav";
import Covid from "./components/Covid";
import Input from "./components/Input";



function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route path="/register">
        <div>
         <h1>register here</h1>
            </div>
        </Route>
        <Route  path="/login">
          <div>
          <h1>login</h1>
            </div>
        </Route>
        <Route path ="/search">
        <div>
          <Input/>
        </div>
        </Route>
        <Route path ="/main">
        <div>
          <Covid/>
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