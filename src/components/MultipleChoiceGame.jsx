import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import "./MultipleChoiceGame.css";
import './GameStyles.css';

const MultipleChoiceGame = () => {
  const navigate = useNavigate();
  const mcqQuestions = questions.multipleChoice;

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedbackMap, setFeedbackMap] = useState({});
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);

  const q = mcqQuestions[current];

  const handleAnswer = (option) => {
    if (isAdvancing) return;

    const correct = q.answer;

    if (option === correct) {
      setFeedbackMap((prev) => ({ ...prev, [option]: "correct" }));
      setScore(score + 1);
      setIsAdvancing(true);

      setTimeout(() => {
        if (current + 1 < mcqQuestions.length) {
          setCurrent(current + 1);
        } else {
          setCompleted(true);
        }
        setSelected(null);
        setFeedbackMap({});
        setIsAdvancing(false);
      }, 800);
    } else {
      setFeedbackMap((prev) => ({ ...prev, [option]: "wrong" }));
    }

    setSelected(option);
  };

  const restartGame = () => {
    setCurrent(0);
    setSelected(null);
    setFeedbackMap({});
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="container fade-in">
        <h2>🎉 All done! Score: {score} / {mcqQuestions.length}</h2>
        <button onClick={restartGame}>🔁 Restart</button>
        <button onClick={() => navigate("/")}>🏠 Back to Game Selector</button>
      </div>
    );
  }

  return (
    <div className="container fade-in">
      <h2>{q.question}</h2>
      {q.options.map((opt, idx) => (
        <button
          key={idx}
          className={`choice-btn ${feedbackMap[opt] || ""}`}
          onClick={() => handleAnswer(opt)}
        >
          {feedbackMap[opt] === "correct" && `✅ `}
          {feedbackMap[opt] === "wrong" && `❌ `}
          {opt}
        </button>
      ))}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((current + 1) / mcqQuestions.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default MultipleChoiceGame;
