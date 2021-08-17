import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Button, GameBoard } from "./components"

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [btnText, setBtnText] = useState("Start New Game");

  function handleClick() {
    if (!gameActive) {
      setGameActive(true);
      setBtnText("Reset");
      return;
    }
    setGameActive(false);
    setBtnText("Start New Game");
  }

  return (
    <div className="App">
        <h1>Reacc-Tacc-Toe</h1>
        {!gameActive ? <img src={logo} className="App-logo" alt="logo" /> : <GameBoard />}
        <Button text={btnText} onClick={handleClick} />
    </div>
  );
}

export default App;
