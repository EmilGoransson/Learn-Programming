// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
  topic: "Java",
  level: "Beginner",
  totalQuestions: 3,
  perQuestionScore: 5,
  questions: [
  {
  question: "What is the purpose of a Switch statement in Java?",
  choices: [
  "To execute a code block based on the value of a variable.",
  "To iterate over a collection of objects.",
  "To declare a variable with a specific value.",
  "To create a new object."
  ],
  type: "MCQs",
  correctAnswer: "To execute a code block based on the value of a variable.",
  },
  {
  question: "What is the syntax of a Switch statement in Java?",
  choices: [
  "switch (expression) { case value1: // code block1; case value2: // code block2; default: // default code block; }",
  "switch { case value1: // code block1; case value2: // code block2; default: // default code block; }",
  "switch (expression) { case value1: // code block1; break; case value2: // code block2; break; default: // default code block; break; }",
  "switch (expression) { case value1: // code block1; break; case value2: // code block2; break; default: // default code block; }"],
  type: "MCQs",
  correctAnswer: "switch (expression) { case value1: // code block1; break; case value2: // code block2; break; default: // default code block; }",
  },
  {
  question: "What is the word used to represent the choices in a nested switch statement?",
  choices: [
  "Default;",
  "Break;",
  "Case;",
  "Nested;"],
  type: "MCQs",
  correctAnswer: "Case;",
  },
  {
  question:
  "What is the purpose of the 'break' statement in a Switch statement?",
  choices: [
  "To exit the Switch statement and continue executing the program.",
  "To skip over the current case and move on to the next one.",
  "To prevent fall-through to the next case in the Switch statement.",
  "To reset the value of the expression used in the Switch statement."
  ],
  type: "MCQs",
  correctAnswer:
  "To prevent fall-through to the next case in the Switch statement.",
  }
  
  ],
  };