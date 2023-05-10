// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    
    questions: [
      {
        question: "1. Which Java standard library package provides classes and methods for working with dates, times, and time zones?",
        choices: ["java.time", "java.util", "java.io", "java.lang"],
        type: "MCQs",
        correctAnswer: "java.time"
      },
      {
        question: "2. Which Java standard library package is used for creating graphical user interfaces (GUIs) in Java applications?",
        choices: ["java.awt", "java.util", "java.io", "java.lang"],
        type: "MCQs",
        correctAnswer: "java.awt"
      },
      {
        question: "3. Which Java standard library package provides classes and methods for handling input and output operations?",
        choices: ["java.lang", "java.util", "java.io", "java.net"],
        type: "MCQs",
        correctAnswer: "java.io"
      },
      {
        question: "4. Which Java standard library package provides classes and methods for performing mathematical operations?",
        choices: ["java.math", "java.util", "java.io", "java.lang"],
        type: "MCQs",
        correctAnswer: "java.math"
      }
    ]      
    }