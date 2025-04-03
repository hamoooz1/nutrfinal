import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameSelector from "./components/GameSelector";
import MultipleChoiceGame from "./components/MultipleChoiceGame";
import MatchingGame from "./components/MatchingGame";
import TrueFalseGame from "./components/TrueFalseGame";
import FlashcardGame from "./components/FlashcardGame";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameSelector />} />
        <Route path="/multiple-choice" element={<MultipleChoiceGame />} />
        <Route path="/matching" element={<MatchingGame />} />
        <Route path="/flashcards" element={<FlashcardGame />} />
        <Route path="/true-false" element={<TrueFalseGame />} />
      </Routes>
    </Router>
  );
};

export default App;
