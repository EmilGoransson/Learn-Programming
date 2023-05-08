export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is the purpose of BufferedReader in Java?",
        choices: [
        "Writing character-based output", 
        "Reading character-based input", 
        "Writing binary data", 
        "Reading binary data"
        ],
        type: "MCQs",
        correctAnswer: "Reading character-based input",
      },
      {
        question: "Which package does the BufferedReader class belong to?",
        choices: [
          "java.util", 
          "java.io", 
          "java.nio", 
          "java.lang"],
        type: "MCQs",
        correctAnswer: "java.io",
      },
      {
        question:
          "What advantage does BufferedReader provide for reading text data?",
        choices: [
          "Improved performance through buffering",
          "Encryption of the input stream",
          "Automatic serialization of objects",
          "Direct access to the file system",
        ],
        type: "MCQs",
        correctAnswer:
          "Improved performance through buffering",
      },
      {
        question:
          "Which method of BufferedReader is used to read a line of text from an input stream?",
        choices: ["read()", 
        "readLine()", 
        "skip()", 
        " close()"],
        type: "MCQs",
        correctAnswer: "readLine()",
      },
    ],
  };