import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import "./TrueFalseGame.css";
import './GameStyles.css';

const TrueFalseGame = () => {
  const navigate = useNavigate();
  const tfQuestions = questions.trueFalse;

  const [current, setCurrent] = useState(0);
  const [feedbackMap, setFeedbackMap] = useState({});
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const q = tfQuestions[current];

  const handleAnswer = (val) => {
    if (isAdvancing) return;

    const correct = q.answer;

    if (val === correct) {
      setScore(score + 1);
      setFeedbackMap((prev) => ({ ...prev, [val] : "correct" }));
      setIsAdvancing(true);

      setTimeout(() => {
        if (current + 1 < tfQuestions.length) {
          setCurrent(current + 1);
        } else {
          setDone(true);
        }
        setFeedbackMap({});
        setIsAdvancing(false);
      }, 800);
    } else {
      setFeedbackMap((prev) => ({ ...prev, [val] : "wrong" }));
    }
  };

  const restart = () => {
    setCurrent(0);
    setFeedbackMap({});
    setScore(0);
    setDone(false);
  };

  if (done) {
    return (
      <div className="container fade-in">
        <h2>🏁 Final Score: {score} / {tfQuestions.length}</h2>
        <button onClick={restart}>🔁 Restart</button>
        <button onClick={() => navigate("/")}>🏠 Back to Game Selector</button>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <h2>{q.question}</h2>
      <button
        className={`choice-btn ${feedbackMap.true || ""}`}
        onClick={() => handleAnswer(true)}
      >
        {feedbackMap.true === "correct" && "✅ "}
        {feedbackMap.true === "wrong" && "❌ "}
        True
      </button>
      <button
        className={`choice-btn ${feedbackMap.false || ""}`}
        onClick={() => handleAnswer(false)}
      >
        {feedbackMap.false === "correct" && "✅ "}
        {feedbackMap.false === "wrong" && "❌ "}
        False
      </button>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((current + 1) / tfQuestions.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default TrueFalseGame;
