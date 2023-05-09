export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is selection sort?",
        choices: [
        "A sorting algorithm that repeatedly divides the array into two parts", 
        "A sorting algorithm that compares adjacent elements and swaps them if they are in the wrong order", 
        "A sorting algorithm that finds the minimum element and places it at the beginning", 
        "A sorting algorithm that uses recursion to sort the array"
        ],
        type: "MCQs",
        correctAnswer: "A sorting algorithm that finds the minimum element and places it at the beginning",
      },
      {
        question: "How does selection sort work?",
        choices: [
          "It divides the array into two parts and recursively sorts them", 
          "It compares adjacent elements and swaps them if they are in the wrong order", 
          "It finds the minimum element and places it at the beginning", 
          "It uses a stack to sort the array"],
        type: "MCQs",
        correctAnswer: "It finds the minimum element and places it at the beginning",
      },
      {
        question:
          "What is the main disadvantage of selection sort?",
        choices: [
          "It is not suitable for larger arrays",
          "It has a high time comlexity",
          "It requires additional memeory space",
          "It only works for arrays with unique elements",
        ],
        type: "MCQs",
        correctAnswer:
          "It is not suitable for larger arrays",
      },
      {
        question:
          "When would you choose to use selection sort?",
        choices: ["When you need a stable sorting algorithm", 
        "When the array is already partially sorted", 
        "When the array is small and simplicity is preferred over efficiency", 
        "When the array contains negative numbers"],
        type: "MCQs",
        correctAnswer: "When the array is small and simplicity is preferred over efficiency",
      },
    ],
  };