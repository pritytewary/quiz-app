import React, { useState } from "react";
import { motion } from "framer-motion";

const Question = ({
  question,
  onAnswer,
  onPrevious,
  onNext,
  onFinalSubmit,
  showPrevious,
  isLastQuestion,
  selectedAnswer,
  timeLeft,
  isAnswered,
}) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer(userInput);
    setUserInput("");
  };

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl w-full lg:w-full md:w-full"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-4 right-4">
        <motion.div
          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white
            ${timeLeft > 10 ? "bg-green-500" : "bg-red-500"}`}
          animate={{
            scale: timeLeft <= 5 ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            repeat: timeLeft <= 5 ? Infinity : 0,
          }}
        >
          {timeLeft}
        </motion.div>
      </div>

      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {question.text}
      </h2>

      {question.type === "multiple-choice" ? (
        <div className="mt-4 space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`block w-full p-4 rounded-lg text-white font-medium transition-all
                ${
                  selectedAnswer === option.text
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                } shadow-md hover:shadow-lg`}
              onClick={() =>
                !isAnswered && onAnswer(option.isCorrect, option.text)
              }
              disabled={isAnswered}
            >
              {option.text}
            </motion.button>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="w-full p-3 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
            placeholder="Your answer"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-4 w-full p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg"
          >
            Submit Answer
          </motion.button>
        </form>
      )}

      <div className="mt-6 flex gap-4">
        {showPrevious && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPrevious}
            className="flex-1 p-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg"
          >
            Previous
          </motion.button>
        )}
        {isAnswered &&
          (isLastQuestion ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onFinalSubmit}
              className="flex-1 p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg"
            >
              Submit Quiz
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onNext}
              className="flex-1 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg"
            >
              Next
            </motion.button>
          ))}
      </div>
    </motion.div>
  );
};

export default Question;
