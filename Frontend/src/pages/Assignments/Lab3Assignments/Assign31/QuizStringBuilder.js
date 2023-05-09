// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    questions: [
      {
        question: "Which of the following is a benefit of using StringBuilder over String for string manipulation?",
        choices: [
        "StringBuilder is more memory-efficient than String.", 
        "StringBuilder is more thread-safe than String.", 
        "StringBuilder is more performance-efficient than String.", 
        "StringBuilder is more secure than String."
        ],
        type: "MCQs",
        correctAnswer: "StringBuilder is more performance-efficient than String.",
      },
      {
        question: "What method can be used to add a string to the end of a StringBuilder object?",
        choices: [
          "add()", 
          "insert()", 
          "append()", 
          "concat()"],
        type: "MCQs",
        correctAnswer: "append()",
      },
      {
        question:
          "Which of the following methods can be used to remove a range of characters from a StringBuilder object?",
        choices: [
          "remove()",
          "delete()",
          "replace()",
          "substring()",
        ],
        type: "MCQs",
        correctAnswer:
          "delete()",
      },
      {
        question:
          "What is the correct sequence of method calls to create a StringBuilder object, append a character to it, and convert it to a String?",
        choices: [ 
        "new StringBuilder().add('c').toString()", 
        "new StringBuilder().append('c').toString()", 
        "new String(new StringBuilder().add('c')).toString()",
        "new String(new StringBuilder().append('c')).toString()"
        ],
        type: "MCQs",
        correctAnswer: "new String(new StringBuilder().append('c')).toString()",
      },
    ],
  };