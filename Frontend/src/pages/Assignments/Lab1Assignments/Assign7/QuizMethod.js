// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is a method in Java?",
        choices: ["A reserved word in the language", "A collection of statements that performs a specific task", "A way to represent a piece of data", "A way to declare a variable"],
        type: "MCQs",
        correctAnswer: "A collection of statements that performs a specific task",
      },
      {
        question: "Which of the following is NOT a part of a method signature in Java?",
        choices: ["Access modifier", "Return type", "Method name", "Parameter types"],
        type: "MCQs",
        correctAnswer: "Parameter types",
      },
      {
        question:
          "Which of the following is a correct way to call a method in Java?",
        choices: [
          "myMethod();",
          "call myMethod();",
          "this.myMethod();",
          "public void myMethod();",
        ],
        type: "MCQs",
        correctAnswer:
          "myMethod();",
      },
      {
        question:
          "What is the purpose of the \"return\" statement in a method in Java?",
        choices: ["To declare the type of the method", "To indicate that the method has finished executing", "To specify the value that the method should return", "To define the parameters that the method should accept"],
        type: "MCQs",
        correctAnswer: "To specify the value that the method should return",
      },
    ],
  };
  