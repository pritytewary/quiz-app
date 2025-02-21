// src/data/quizData.js
export const quizData = {
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      text: "Which planet is closest to the Sun?",
      options: [
        { text: "A. Venus", isCorrect: false },
        { text: "B. Mercury", isCorrect: true },
        { text: "C. Earth", isCorrect: false },
        { text: "D. Mars", isCorrect: false },
      ],
    },
    {
      id: 2,
      type: "multiple-choice",
      text: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
      options: [
        { text: "A. Stack", isCorrect: false },
        { text: "B. Queue", isCorrect: true },
        { text: "C. Tree", isCorrect: false },
        { text: "D. Graph", isCorrect: false },
      ],
    },
    {
      id: 3,
      type: "multiple-choice",
      text: "Which of the following is primarily used for structuring web pages?",
      options: [
        { text: "A. Python", isCorrect: false },
        { text: "B. Java", isCorrect: false },
        { text: "C. HTML", isCorrect: true },
        { text: "D. C++", isCorrect: false },
      ],
    },
    {
      id: 4,
      type: "multiple-choice",
      text: "Which chemical symbol stands for Gold?",
      options: [
        { text: "A. Au", isCorrect: true },
        { text: "B. Gd", isCorrect: false },
        { text: "C. Ag", isCorrect: false },
        { text: "D. Pt", isCorrect: false },
      ],
    },
    {
      id: 5,
      type: "multiple-choice",
      text: "Which of these processes is not typically involved in refining petroleum?",
      options: [
        { text: "A. Fractional distillation", isCorrect: false },
        { text: "B. Cracking", isCorrect: false },
        { text: "C. Polymerization", isCorrect: true },
        { text: "D. Filtration", isCorrect: false },
      ],
    },
    {
      id: 6,
      type: "integer",
      text: "What is the value of 12 + 28? Answer: _______",
      correctAnswer: 40,
    },
    {
      id: 7,
      type: "integer",
      text: "How many states are there in the United States? Answer: _______",
      correctAnswer: 50,
    },
    {
      id: 8,
      type: "integer",
      text: "In which year was the Declaration of Independence signed? Answer: _______",
      correctAnswer: 1776,
    },
    {
      id: 9,
      type: "integer",
      text: "What is the value of pi rounded to the nearest integer? Answer: _______",
      correctAnswer: 3,
    },
    {
      id: 10,
      type: "integer",
      text: "If a car travels at 60 mph for 2 hours, how many miles does it travel? Answer: _______",
      correctAnswer: 120,
    },
  ],
};
