import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import "./MatchingGame.css";
import './GameStyles.css';

const MatchingGame = () => {
  const navigate = useNavigate();
  const pairs = questions.matching[0].pairs;

  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleChange = (term, value) => {
    setMatches({ ...matches, [term]: value });
  };

  const checkAnswers = () => {
    let correct = 0;
    pairs.forEach((p) => {
      if (matches[p.term] === p.match) correct++;
    });
    setCorrectCount(correct);
    setSubmitted(true);
  };

  const restartGame = () => {
    setMatches({});
    setSubmitted(false);
    setCorrectCount(0);
  };

  return (
    <div className="container fade-in">
      <h2>🧩 Match the Terms to Their Definitions</h2>
      {pairs.map((p, i) => (
        <div key={i} className="match-row">
          <label>{p.term}</label>
          <select
            disabled={submitted}
            value={matches[p.term] || ""}
            onChange={(e) => handleChange(p.term, e.target.value)}
            className={
              submitted
                ? matches[p.term] === p.match
                  ? "correct"
                  : "wrong"
                : ""
            }
          >
            <option value="">-- Select --</option>
            {pairs.map((opt, j) => (
              <option key={j} value={opt.match}>{opt.match}</option>
            ))}
          </select>
        </div>
      ))}

      {!submitted ? (
        <button onClick={checkAnswers}>✅ Submit</button>
      ) : (
        <>
          <h3>You got {correctCount} / {pairs.length} correct.</h3>
          <button onClick={restartGame}>🔁 Try Again</button>
          <button onClick={() => navigate("/")}>🏠 Back to Game Selector</button>
        </>
      )}
    </div>
  );
};

export default MatchingGame;
