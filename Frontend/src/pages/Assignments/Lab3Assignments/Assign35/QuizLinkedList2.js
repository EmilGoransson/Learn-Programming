// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    
    questions:[
      {
      question: "What is the difference between pass by value and pass by reference?",
      choices: ["Pass by value means that the value of the argument is passed to the method, while pass by reference means that the reference to the argument is passed to the method.", "Pass by reference means that the value of the argument is passed to the method, while pass by value means that the reference to the argument is passed to the method.", "There is no difference between pass by value and pass by reference in Java.", "Pass by value and pass by reference both mean that the method modifies the original value of the argument."],
      type: "MCQs",
      correctAnswer: "Pass by value means that the value of the argument is passed to the method, while pass by reference means that the reference to the argument is passed to the method."
      },
      {
      question: "In Java, are primitive types passed by value or by reference?",
      choices: ["By value", "By reference", "Depends on the type", "Not applicable, primitives cannot be passed as arguments."],
      type: "MCQs",
      correctAnswer: "By value"
      },
      {
      question: "In Java, are objects passed by value or by reference?",
      choices: ["By value", "By reference", "Depends on the object", "Not applicable, objects cannot be passed as arguments."],
      type: "MCQs",
      correctAnswer: "By reference"
      },
      {
      question: "What is the difference between modifying an object inside a method and reassigning the object inside a method?",
      choices: ["Modifying an object changes its internal state, while reassigning an object changes the reference to which it points.", "Reassigning an object changes its internal state, while modifying an object changes the reference to which it points.", "Modifying and reassigning an object are equivalent operations in Java.", "Objects cannot be modified or reassigned inside a method."],
      type: "MCQs",
      correctAnswer: "Modifying an object changes its internal state, while reassigning an object changes the reference to which it points."
      }
      ]
      
      
      
      
      
      
    }