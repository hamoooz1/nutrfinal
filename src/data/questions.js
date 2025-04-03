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
    },
    {
      question: "Which organ primarily regulates electrolyte balance in the body?",
      options: ["Liver", "Kidneys", "Lungs", "Heart"],
      answer: "Kidneys"
    },
    {
      question: "What is a symptom of hyperkalemia?",
      options: ["Excessive thirst", "Irregular heartbeat", "Blurred vision", "Hair loss"],
      answer: "Irregular heartbeat"
    },
    {
      question: "What common food is a rich source of potassium?",
      options: ["Cheese", "Banana", "Bread", "Chicken"],
      answer: "Banana"
    },
    {
      question: "Why is sodium important in sports drinks?",
      options: ["Provides energy", "Helps retain water", "Builds muscle", "Reduces lactic acid"],
      answer: "Helps retain water"
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
    },
    {
      question: "Match the condition to its cause",
      pairs: [
        { term: "Hyponatremia", match: "Overhydration" },
        { term: "Hypokalemia", match: "Vomiting/Diarrhea" },
        { term: "Hypercalcemia", match: "Overactive parathyroid" },
        { term: "Hypernatremia", match: "Dehydration" }
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
    },
    {
      question: "Electrolytes help regulate nerve and muscle function.",
      answer: true
    },
    {
      question: "Sweating heavily without replacing electrolytes can lead to imbalance.",
      answer: true
    },
    {
      question: "Drinking too much water can never be harmful.",
      answer: false
    },
    {
      question: "Calcium only affects bone health, not nerves or muscles.",
      answer: false
    }
  ]
};

export default questions;
