export const quizData = {
    topic: "Java String Concatenation",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "Which operator is commonly used for string concatenation in Java?",
        choices: [
          "a) *",
          "b) -",
          "c) /",
          "d) +"
        ],
        type: "MCQs",
        correctAnswer: "d) +"
      },
      {
        question: "What is the 'concat()' method used for?",
        choices: [
          "a) Reversing a string",
          "b) Converting a string to uppercase",
          "c) Concatenating two strings",
          "d) Removing whitespace from a string"
        ],
        type: "MCQs",
        correctAnswer: "c) Concatenating two strings"
      },
      {
        question: "Which of the following is the most memory-efficient way to concatenate a large number of strings in Java?",
        choices: [
          "a) Using the '+' operator",
          "b) Using the 'concat()' method",
          "c) Using a 'StringBuilder' or 'StringBuffer' object",
          "d) They all have the same memory efficiency"
        ],
        type: "MCQs",
        correctAnswer: "c) Using a 'StringBuilder' or 'StringBuffer' object"
      },
      {
        question: [
        "What is the result of the following code?",
        <br></br>,
        <br></br>,
        "String s = \"\";",
        <br></br>,
        "s += \"hello\";",
        <br></br>,
        "s = s.concat(\" world\");",
        <br></br>,
        "System.out.println(s);"
        ],
        choices: [
          "a) 'world hello'",
          "b) 'helloworld'",
          "c) 'hello world'",
          "d) 'worldhello'"
        ],
        type: "MCQs",
        correctAnswer: "c) 'hello world'"
      }
    ]
  };
  