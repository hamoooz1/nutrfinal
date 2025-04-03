// src/data/questions.js

const questions = {
  multipleChoice: [
    {
      question: "What is the primary role of osmoregulation?",
      options: [
        "Digest nutrients",
        "Regulate temperature",
        "Balance water and solutes",
        "Absorb vitamins"
      ],
      answer: "Balance water and solutes"
    },
    {
      question: "Which of the following is *not* an electrolyte?",
      options: ["Sodium", "Magnesium", "Glucose", "Potassium"],
      answer: "Glucose"
    },
    {
      question: "What condition can result from drinking too much water?",
      options: [
        "Hypercalcemia",
        "Hyponatremia",
        "Hypokalemia",
        "Dehydration"
      ],
      answer: "Hyponatremia"
    }
  ],

  matching: [
    {
      question: "Match the electrolyte with its function",
      pairs: [
        { term: "Sodium", match: "Draws water out of cells" },
        { term: "Potassium", match: "Draws water into cells" },
        { term: "Calcium", match: "Muscle contraction and bone strength" },
        { term: "Magnesium", match: "Supports nerve function" }
      ]
    }
  ],

  trueFalse: [
    {
      question: "Electrolyte imbalances can cause muscle cramps and seizures.",
      answer: true
    },
    {
      question: "You should always consume electrolytes after a 20-minute jog.",
      answer: false
    },
    {
      question: "Electrolytes are only important during exercise.",
      answer: false
    }
  ]
};

export default questions;
