// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    
    questions:[
      {
      question: "What value does a null variable hold in Java?",
      choices: ["0", "1", "NaN", "No value"],
      type: "MCQs",
      correctAnswer: "No value"
      },
      {
      question: "What happens when you try to access a method or variable on a null object in Java?",
      choices: ["The program continues running without issue.", "A NullPointerException is thrown.", "The method or variable is automatically initialized with a default value.", "The program crashes and stops running."],
      type: "MCQs",
      correctAnswer: "A NullPointerException is thrown."
      },
      {
      question: "Can a primitive type in Java hold a null value?",
      choices: ["Yes", "No", "Maybe", "Sometimes"],
      type: "MCQs",
      correctAnswer: "No"
      },
      {
      question: "What is the best way to prevent null pointer exceptions in Java?",
      choices: ["Avoid using null values entirely.", "Use try-catch blocks to handle exceptions.", "Use defensive programming techniques such as checking for null values before accessing them.", "Increase the memory allocation for the program."],
      type: "MCQs",
      correctAnswer: "Use defensive programming techniques such as checking for null values before accessing them."
      }
      ]      
    }