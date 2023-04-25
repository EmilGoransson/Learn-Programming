import React, { useState, useEffect } from "react";
import { quiz } from "./Data/sprintdemo";
import "./quiz.css";

/*
För att köra importera "import Quiz from "./Components/Quiz/quiz";"
Och kalla på quizet genom att skriva "<Quiz quizid="questions" />"
Just nu är quizid inte kopplat till något, utan ska kopplas till databasen senare där frågor kan hämtas.

quiztemplatet finns i       import { quiz } from "./Data/questions";
quizet för att sprintdemon  import { quiz } from "./Data/sprintdemo";

Quizet är hårdkodat för 4 frågor just nu, det som är hårdkodat är displaysystemet för individuella frågor.
*/
const Quiz = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    answerList: [0, 0, 0, 0],
    resultCounter: 0,
  });

  const quizid = props.quizid; // Måste fixa så att importen beror på ett id som importeras

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    // När användaren klickar på next händer detta
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
            resultCounter: prev.resultCounter + 1,
            answerList: [
              ...prev.answerList.slice(0, prev.resultCounter),
              prev.answerList[prev.resultCounter] + 1,
              ...prev.answerList.slice(prev.resultCounter + 1),
            ],
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
            resultCounter: prev.resultCounter + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    // När användaren klickar på ett svarsalternativ händer detta
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container" restartKey="12">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h1>Result</h1>
          <p>
            Total Score:&nbsp;<span>{result.score}</span>&emsp;&emsp; Total
            Questions: <span>{questions.length}</span>
          </p>
          <p>
            Question 1:
            <span>
              {" "}
              {result.answerList[1] === 1 ? (
                "Passed"
              ) : (
                <span className="failed-text">Failed</span>
              )}
            </span>
          </p>
          <p>
            Question 2:
            <span>
              {" "}
              {result.answerList[1] === 1 ? (
                "Passed"
              ) : (
                <span className="failed-text">Failed</span>
              )}
            </span>
          </p>
          <p>
            Question 3:
            <span>
              {" "}
              {result.answerList[2] === 1 ? (
                "Passed"
              ) : (
                <span className="failed-text">Failed</span>
              )}
            </span>
          </p>
          <p>
            Question 4:
            <span>
              {" "}
              {result.answerList[3] === 1 ? (
                "Passed"
              ) : (
                <span className="failed-text">Failed</span>
              )}
            </span>
          </p>
          <button
            className="return-button"
            onClick={() => {
              setResult({
                score: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                answerList: [0, 0, 0, 0],
                resultCounter: 0,
              });
              setShowResult(false);
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
