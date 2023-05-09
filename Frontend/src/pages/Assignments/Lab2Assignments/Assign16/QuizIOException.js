export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "Which of the following best describes 'IOException' in Java?",
        choices: [
        "It is an unchecked exception", 
        "It represents input/output errors", 
        "It is used for arithmetic operation", 
        "It is a runtime exception"
        ],
        type: "MCQs",
        correctAnswer: "It represents input/output errors",
      },
      {
        question: "'IOException' is part of which package in Java?",
        choices: [
          "java.util", 
          "java.io", 
          "java.exception", 
          "java.lang"],
        type: "MCQs",
        correctAnswer: "java.io",
      },
      {
        question:
          "When does 'IOException' occur?",
        choices: [
          "When there is an error in the logic of the program",
          "When a file is not found",
          "When a variables in uniunitialized",
          "When there is an issue with input/output operations",
        ],
        type: "MCQs",
        correctAnswer:
          "When there is an issue with input/output operations",
      },
      {
        question:
          "How should 'IOException' be handled in Java?",
        choices: ["By declaring it in the method's throws clause", 
        "By catching it using a try-catch block", 
        "By ignoring it and letting the program continue", 
        " By rethrowing it as a different exception"],
        type: "MCQs",
        correctAnswer: "By catching it using a try-catch block",
      },
    ],
  };