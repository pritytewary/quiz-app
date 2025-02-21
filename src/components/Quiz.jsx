import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuiz } from "../hooks/useQuiz";
import Question from "./Question";
import Scoreboard from "./ScoreBoard.jsx";

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    score,
    handleAnswer,
    resetQuiz,
    goToPreviousQuestion,
    goToNextQuestion,
    handleFinalSubmit,
    selectedAnswers,
    timeLeft,
    isAnswered,
  } = useQuiz();

  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="w-full lg:w-full md:w-full sm:w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          Interactive Quiz
        </motion.h1>
        <AnimatePresence mode="wait">
          {currentQuestionIndex < questions.length ? (
            <Question
              key={currentQuestionIndex}
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              onPrevious={goToPreviousQuestion}
              onNext={goToNextQuestion}
              onFinalSubmit={handleFinalSubmit}
              showPrevious={currentQuestionIndex > 0}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
              selectedAnswer={selectedAnswers[currentQuestionIndex]}
              timeLeft={timeLeft}
              isAnswered={isAnswered}
            />
          ) : (
            <Scoreboard
              score={score}
              totalQuestions={questions.length}
              resetQuiz={resetQuiz}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
