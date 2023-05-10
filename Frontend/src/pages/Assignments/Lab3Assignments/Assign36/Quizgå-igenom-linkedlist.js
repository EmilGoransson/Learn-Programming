// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    
    questions:[
      {
      question: "What is the purpose of traversing a LinkedLsit using pointers?",
      choices: ["To add new elements to the list",
      "To remove elements from the list",
      "To visit each element in the list", 
      "To sort the elements in the list",
       ],
      type: "MCQs",
      correctAnswer: "To visit each element in the list"
      },
      {
      question: "Which variable is used as a pointer to traverse a LinkedList?",
      choices: ["head",
       "size", 
       "tail",
       "current"],
      type: "MCQs",
      correctAnswer: "current"
      },
      {
      question: "How do you move the pointer to the text element in the LinkedList?",
      choices: ["current = current.next;", 
      "current = current.previous;", 
      "current = current.nextNode;", 
      "current = current.prevNode;"],
      type: "MCQs",
      correctAnswer: "current = current.next;"
      },
      {
      question: "What is the condition to stop treversing the LinkedList using pointers?",
      choices: ["current == null", 
      "current == head",
      "current == tail", 
      "current == size"],
      type: "MCQs",
      correctAnswer: "current == null"
      }
      ]
      
      
      
      
      
      
    }