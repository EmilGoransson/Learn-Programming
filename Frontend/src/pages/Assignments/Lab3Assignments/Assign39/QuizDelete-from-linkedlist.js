// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    
    questions:[
      {
      question: "What data structure is commonly used to implement a linked list?",
      choices: ["Array",
      "ArrayList",
      "LinkedList", 
      "Stack",
       ],
      type: "MCQs",
      correctAnswer: "LinkedList"
      },
      {
      question: "When deleting an element from a linked list, what needs tio be updated?",
      choices: ["The data of the element",
       "The next pointer of the element", 
       "The previous pointer of the element",
       "Both the next and previous pointers of the element"],
      type: "MCQs",
      correctAnswer: "Both the next and previous pointers of the element"
      },
      {
      question: "How can we delete the head node from a linked list?",
      choices: ["Set the head to null", 
      "Update the next pointer of the head", 
      "Update the previous pointer of the head", 
      "Delete the entire linked list"],
      type: "MCQs",
      correctAnswer: "Update the next pointer of the head"
      },
      {
      question: "What is the purpose of updating the pointers when deleting a node from a linked list?",
      choices: ["To prevent memory leaks", 
      "To improve performance",
      "To reorder the elements", 
      "To resize the linked list"],
      type: "MCQs",
      correctAnswer: "To prevent memory leaks"
      }
      ]
      
      
      
      
      
      
    }