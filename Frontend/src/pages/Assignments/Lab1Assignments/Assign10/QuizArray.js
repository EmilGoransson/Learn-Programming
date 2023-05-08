// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is an array in Java?",
        choices: [
        "A data structure that stores a fixed-size sequence of elements of different data types.", 
        "A data structure that stores a variable-size sequence of elements of the same data type.", 
        "A data structure that stores a fixed-size sequence of elements of the same data type.", 
        "A data structure that stores a variable-size sequence of elements of different data types."
        ],
        type: "MCQs",
        correctAnswer: "A data structure that stores a fixed-size sequence of elements of the same data type.",
      },
      {
        question: "How do you declare an array in Java with five elements?",
        choices: [
          "int[] numbers = {1, 2, 3, 4, 5};", 
          "int[] numbers = new int[5];", 
          "int[] numbers = new int(5);", 
          "int[] numbers = new Array(5);"],
        type: "MCQs",
        correctAnswer: "int[] numbers = new int[5];",
      },
      {
        question:
          "What is the index of the first element in an array in Java?",
        choices: [
          "1",
          "-1",
          "0",
          "2",
        ],
        type: "MCQs",
        correctAnswer:
          "0",
      },
      {
        question:
          "How can you fill an array with values using a for loop in Java?",
        choices: [ 
        "By creating a new array with specific values", 
        "By specifying the number of elements in the array.", 
        " By using a while loop instead of a for loop.",
        "By accessing each element of the array and assigning it a value in the for loop."
        ],
        type: "MCQs",
        correctAnswer: "By accessing each element of the array and assigning it a value in the for loop.",
      },
    ],
  };