"use client";
import { useState } from "react";

const quizData = [
  {
    question: "What is the most important factor in protecting personal data?",
    options: [
      "Clear and unambiguous consent for data collection",
      "Regular audits",
      "Data encryption",
      "Employee training"
    ],
    correctAnswer: "Data encryption",
    improvementSuggestion: "Implement robust encryption protocols to ensure data is protected both in transit and at rest."
  },
  {
    question: "How should a company handle data breaches?",
    options: [
      "Ignore and hope it doesn't get noticed",
      "Inform affected individuals immediately",
      "Delete all compromised data",
      "Only inform the authorities if asked"
    ],
    correctAnswer: "Inform affected individuals immediately",
    improvementSuggestion: "Develop and implement a comprehensive data breach response plan, including timely notification of affected individuals and authorities."
  },
  {
    question: "Which of the following is a key principle of data minimization?",
    options: [
      "Collecting as much data as possible",
      "Collecting data relevant and necessary for specific purposes",
      "Storing all collected data indefinitely",
      "Sharing data with third parties freely"
    ],
    correctAnswer: "Collecting data relevant and necessary for specific purposes",
    improvementSuggestion: "Ensure data collection practices align with the principle of data minimization by only collecting necessary and relevant data."
  },
  {
    question: "What is the role of a Data Protection Officer (DPO)?",
    options: [
      "To monitor compliance with data protection laws",
      "To manage IT infrastructure",
      "To handle marketing strategies",
      "To oversee financial transactions"
    ],
    correctAnswer: "To monitor compliance with data protection laws",
    improvementSuggestion: "Appoint a qualified Data Protection Officer (DPO) to oversee and ensure compliance with data protection laws and policies."
  },
  {
    question: "What should be included in a data protection policy?",
    options: [
      "Detailed procedures for data handling",
      "Employee salaries",
      "Company's marketing strategies",
      "List of all employees"
    ],
    correctAnswer: "Detailed procedures for data handling",
    improvementSuggestion: "Develop a comprehensive data protection policy that includes detailed procedures for data handling and ensures all employees are trained on it."
  }
];

const BlogDetailsPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [improvements, setImprovements] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    } else {
      setImprovements([...improvements, quizData[currentQuestionIndex].improvementSuggestion]);
    }

    setSelectedOption("");
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setScore(0);
    setShowResults(false);
    setImprovements([]);
  };

  const renderSuggestions = () => {
    if (score === quizData.length) {
      return "Excellent! Your company is highly compliant with data protection best practices.";
    } else if (score >= quizData.length * 0.7) {
      return "Good job! Your company is compliant, but there are a few areas to improve.";
    } else {
      return "There are significant gaps in compliance. Please review the suggestions to ensure all aspects are covered.";
    }
  };

  if (showResults) {
    return (
      <div className="mx-auto text-center" style={{paddingTop:"10rem"}}>
        <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
        <p>Your score is {score} out of {quizData.length}</p>
        <p>{renderSuggestions()}</p>
        <ul className="text-center mt-4 list-disc list-inside">
          {improvements.map((improvement, index) => (
            <li key={index} className="mb-2 p-2 text-dark">{improvement}</li>
          ))}
        </ul>
        <button onClick={handleRestartQuiz} className="bg-primary text-white py-2 px-4 rounded mt-4 mb-8">
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl p-15 mb-12"  style={{paddingTop:"10rem"}}>
      <h1 className="text-2xl font-bold mb-4">Data Protection Compliance Quiz</h1>
      <div className="card mb-4">
        <h2 className="text-xl font-bold mb-4">{quizData[currentQuestionIndex].question}</h2>
        {quizData[currentQuestionIndex].options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="form-radio"
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleNextQuestion} className="bg-primary text-white py-2 px-4 rounded">
        {currentQuestionIndex === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default BlogDetailsPage;
