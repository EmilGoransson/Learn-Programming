// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is a matrix?",
        choices: [
        "A one-dimensional array", 
        "A two-dimensional array", 
        "A three-dimensional array", 
        "A four-dimensional array"
        ],
        type: "MCQs",
        correctAnswer: "A two-dimensional array",
      },
      {
        question: "How do you access an element in a matrix with indices i and j?",
        choices: [
          "matrix[i+j];", 
          "matrix(i+j);", 
          "matrix[i][j];", 
          "matrix(i)(j);"],
        type: "MCQs",
        correctAnswer: "matrix[i][j];",
      },
      {
        question:
          "What operations can be performed on matrices?",
        choices: [
          "Addition",
          "Subtraction",
          "Multiplication",
          "All of the above",
        ],
        type: "MCQs",
        correctAnswer:
          "All of the above",
      },
      {
        question:
          "What numbers do the indices start at for a matrix in Java?",
        choices: [ 
        "-1", 
        "0", 
        "1",
        "2"
        ],
        type: "MCQs",
        correctAnswer: "0",
      },
    ],
  };