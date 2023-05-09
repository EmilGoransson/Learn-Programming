// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    
    questions:[
      {
      question: "What is software complexity?",
      choices: ["The level of difficulty involved in understanding, designing, implementing, and testing software", "The amount of time it takes to write software", "The number of lines of code in a software program", "The number of bugs in a software program"],
      type: "MCQs",
      correctAnswer: "The level of difficulty involved in understanding, designing, implementing, and testing software"
      },
      {
      question: "What is big O notation used for in computer science?",
      choices: ["To describe the growth rate of a function in terms of its input size", "To describe the size of a function in terms of its input growth rate", "To describe the input rate of a function in terms of its growth size", "To describe the output of a function in terms of its input size"],
      type: "MCQs",
      correctAnswer: "To describe the growth rate of a function in terms of its input size"
      },
      {
      question: "What is the time complexity of selection sort?",
      choices: ["O(n^2)", "O(n log n)", "O(n)", "O(log n)"],
      type: "MCQs",
      correctAnswer: "O(n^2)"
      },
      {
      question: "Why is it important to analyze the time complexity of an algorithm?",
      choices: ["To determine how efficient it is and how it will perform as the size of the input grows", "To determine how many lines of code the algorithm has", "To determine how many bugs the algorithm has", "To determine how long it takes to write the algorithm"],
      type: "MCQs",
      correctAnswer: "To determine how efficient it is and how it will perform as the size of the input grows"
      }
      ]
    }