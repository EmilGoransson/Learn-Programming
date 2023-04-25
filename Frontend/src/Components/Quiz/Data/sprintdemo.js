// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: "What is the default value of an integer variable in Java?",
      choices: ["0", "1", "null", "false"],
      type: "0",
      correctAnswer: "0",
    },
    {
      question: "Which of the following is NOT a valid variable name in Java?",
      choices: ["my-var", "myVar", "1_var", "my.var_"],
      type: "MCQs",
      correctAnswer: "myVar",
    },
    {
      question:
        "What is the difference between local variables and instance variables in Java?",
      choices: [
        "Local variables are declared within a method, while instance variables are declared outside of a method",
        "Local variables are only accessible within the method they are declared in, while instance variables are accessible throughout the entire class ",
        " Local variables are declared using the static keyword, while instance variables are not",
        "There is no difference between local and instance variables in Java",
      ],
      type: "MCQs",
      correctAnswer:
        "Local variables are only accessible within the method they are declared in, while instance variables are accessible throughout the entire class",
    },
    {
      question:
        "Which of the following data types is NOT a primitive data type in Java?",
      choices: ["int", "String", "boolean", "char"],
      type: "MCQs",
      correctAnswer: "String",
    },
  ],
};
