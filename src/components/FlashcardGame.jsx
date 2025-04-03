import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import "./FlashcardGame.css";
import './GameStyles.css';

const FlashcardGame = () => {
  const flashcards = [...questions.multipleChoice, ...questions.trueFalse];
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);

  const nextCard = () => {
    if (index + 1 < flashcards.length) {
      setFlipped(false);
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setFlipped(false);
    setDone(false);
  };

  if (done) {
    return (
      <div className="container fade-in">
        <h2>🎉 You’ve completed all the flashcards!</h2>
        <button onClick={restart}>🔁 Restart</button>
        <button onClick={() => navigate("/")}>🏠 Back to Game Selector</button>
      </div>
    );
  }

  const currentCard = flashcards[index];

  return (
    <div className="container fade-in">
      <h2>🧠 Flashcards</h2>
      <div
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="front">
          {currentCard.question}
        </div>
        <div className="back">
          {currentCard.answer.toString()}
        </div>
      </div>

      <button onClick={nextCard}>Next Card</button>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((index + 1) / flashcards.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default FlashcardGame;
