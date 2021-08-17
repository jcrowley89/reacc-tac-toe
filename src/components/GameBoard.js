import React, { useState } from "react";
import _ from "lodash";
import { GameSquare } from "./";
import winningCombos from "../utils/winningCombos";

const GameBoard = () => {
  const [gameState, setGameState] = useState(["","","","","","","","","",]);
  const [currentPlayerX, setCurrentPlayerX] = useState(true);
  const [message, setMessage] = useState("X's Turn...");

  function playerWon(gameState, currentPlayerX) {
    for (let i = 0; i <= 7; i++) {
      const currentPlayer = currentPlayerX ? "X" : "O";
      const winCombo = winningCombos[i];
      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];
      if (a === currentPlayer && b === currentPlayer && c === currentPlayer)
        return true;
    }
    return false;
  }

  function handleClick(i) {
    const newArray = gameState.slice();
    const currentPlayer = currentPlayerX ? "X" : "O";
    newArray[i] = currentPlayer;
    setGameState(newArray);
    if (!playerWon(newArray, currentPlayerX)) {
      setMessage(`${!currentPlayerX ? "X" : "O"}'s turn...`);
      setCurrentPlayerX(!currentPlayerX);
      return;
    }
    setMessage(`${currentPlayer} won!`);
  }

  function getSquares() {
    return _.map(gameState, (s, i) => {
      return <GameSquare content={s} key={i} onClick={() => handleClick(i)} />;
    });
  }

  return (
    <div id="gameBoard">
      {getSquares()}
      <h2 className="message">{message}</h2>
    </div>
  )
};

export default GameBoard;
