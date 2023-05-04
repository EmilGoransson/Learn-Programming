// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,

    questions: [
      {
        question: "What is a class in Java?",
        choices: ["A method that performs a specific action", "A variable that stores data", "A blueprint for creating objects", "A keyword that specifies access control"],
        type: "MCQs",
        correctAnswer: "A blueprint for creating objects",
      },
      {
        question: "Where is the body of a class defined in Java?",
        choices: ["Within curly braces {}", "Within parentheses ()", "Within square brackets []", "Within angle brackets <>"],
        type: "MCQs",
        correctAnswer: "Within curly braces {}",
      },
      {
        question:
          "What are properties in a Java class?"
        ,
        choices: [
          "Methods that perform actions",
          "Variables that store data",
          "Constructors that initialize objects",
          "Access modifiers that control visibility",
        ],
        type: "MCQs",
        correctAnswer:
          "Variables that store data",
      },
      {
        question: "What is a constructor in a Java class?",
        choices: ["A method that returns a value", "A variable that is declared inside a method", "A special method that is called when an object is created"],
        type: "MCQs",
        correctAnswer: "A special method that is called when an object is created",
      },
    ],
  };
