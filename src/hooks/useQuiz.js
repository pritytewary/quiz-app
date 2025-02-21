import { useState, useEffect } from "react";
import { quizData } from "../data/quizData";

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnswered && timeLeft > 0) {
        setTimeLeft((prev) => prev - 1);
      } else if (timeLeft === 0 && !isAnswered) {
        handleTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered]);

  useEffect(() => {
    setTimeLeft(30);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const handleTimeUp = () => {
    if (!isAnswered) {
      const newAnswers = [...userAnswers];
      newAnswers[currentQuestionIndex] = false;
      setUserAnswers(newAnswers);
      setIsAnswered(true);
    }
  };

  const handleAnswer = (isCorrect, selectedAnswer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = isCorrect;
    setUserAnswers(newAnswers);

    const newSelectedAnswers = { ...selectedAnswers };
    newSelectedAnswers[currentQuestionIndex] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsAnswered(true);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinalSubmit = () => {
    setCurrentQuestionIndex(questions.length);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setSelectedAnswers({});
    setTimeLeft(30);
    setIsAnswered(false);
  };

  const questions = quizData.questions;

  return {
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
  };
};
