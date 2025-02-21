import React from "react";
import { motion } from "framer-motion";

const Scoreboard = ({ score, totalQuestions, resetQuiz }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const circumference = 2 * Math.PI * 88;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl text-center w-full lg:w-full md:w-full"
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Quiz Completed!
      </h2>
      <div className="mb-6">
        <motion.div
          className="w-48 h-48 mx-auto relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-purple-600">
              {percentage}%
            </span>
          </div>
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="88"
              className="stroke-current text-gray-200"
              strokeWidth="12"
              fill="none"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              className="stroke-current text-purple-500"
              strokeWidth="12"
              fill="none"
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset:
                  circumference - (percentage / 100) * circumference,
              }}
              style={{
                strokeDasharray: circumference,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </div>
      <p className="text-xl mb-6">
        You scored <span className="font-bold text-purple-600">{score}</span>{" "}
        out of{" "}
        <span className="font-bold text-purple-600">{totalQuestions}</span>
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={resetQuiz}
        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all"
      >
        Try Again
      </motion.button>
    </motion.div>
  );
};

export default Scoreboard;
