import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameSelector.css";
import './GameStyles.css';

const GameSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="game-selector">
      <h1>Choose Your Game</h1>
      <button onClick={() => navigate("/multiple-choice")}>Multiple Choice</button>
      <button onClick={() => navigate("/matching")}>Matching</button>
      <button onClick={() => navigate("/true-false")}>True / False</button>
      <button onClick={() => navigate("/flashcards")}>Flashcards</button>
    </div>
  );
};

export default GameSelector;
