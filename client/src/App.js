import React from 'react';
import './App.css';
import { InputBase } from '@material-ui/core';
import car from './images/pic.png'


function App() {
  return (
    <div className="App" styles={{ backgroundImage:`url(${pic})` }}>
<InputBase/>
    </div>
  );
}

export default App;
