import React from 'react';
import WorldcupData from "./components/Worldcupdata";
import Navbar from "./components/Navbar";

// import './App.css';
import "./styles.css";

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>Womens Soccer World Cup- Player ranking</h1>
    <WorldcupData />
  </div>
  );
}

export default App;
