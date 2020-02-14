import React from 'react';
import WorldcupData from "./components/Worldcupdata";
// import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Navbar /> */}
    <h1>Womens World Cup- Player ranking</h1>
    <WorldcupData />
  </div>
  );
}

export default App;
