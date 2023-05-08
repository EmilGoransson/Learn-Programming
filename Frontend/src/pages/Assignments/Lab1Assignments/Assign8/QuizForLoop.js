// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is the basic syntax of a for loop in Java?",
        choices: [
        "for (var i = 0; i < n; i++);", 
        "for (int i = 0; i < n; i++);", 
        "for (i = 0; i < n; i++);", 
        "for i in range(n):"
        ],
        type: "MCQs",
        correctAnswer: "for (int i = 0; i < n; i++);",
      },
      {
        question: "When is the initialization statement in a for loop executed?",
        choices: [
          "At the end of each loop iteration", 
          "Only when the condition expression is true", 
          "Only once, at the beginning of the loop", 
          " When the loop terminates"],
        type: "MCQs",
        correctAnswer: "Only once, at the beginning of the loop",
      },
      {
        question:
          "What is the purpose of the condition expression in a for loop?",
        choices: [
          "To update the loop variable",
          "To execute the loop body",
          " To terminate the loop",
          "To determine whether the loop body is executed",
        ],
        type: "MCQs",
        correctAnswer:
          "To determine whether the loop body is executed",
      },
      {
        question:
          "What are for loops commonly used for in Java?",
        choices: ["Iterating over arrays or collections", 
        "Performing arithmetic calculations", 
        "Reading input from the user", 
        " Displaying output to the console"],
        type: "MCQs",
        correctAnswer: "Iterating over arrays or collections",
      },
    ],
  };