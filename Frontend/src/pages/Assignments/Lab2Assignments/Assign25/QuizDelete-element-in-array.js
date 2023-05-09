export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "How do you delete an element from an array in Java?",
        choices: [
        "Using the 'delete()' method", 
        "Setting the element to 'null'", 
        "Using the 'remove() method", 
        "Assigning a default value to the element"
        ],
        type: "MCQs",
        correctAnswer: "Setting the element to 'null'",
      },
      {
        question: "What happens to the remaining elements in the array after deleting an element?",
        choices: [
          "They are shifted to the left to fill the gap", 
          "They are shifted to the right to fill the gap", 
          "They remain in their original positions", 
          "They are removed from the array"],
        type: "MCQs",
        correctAnswer: "They are shifted to the left to fill the gap",
      },
      {
        question:
          "How can you determine the new length of the array after deleting an element?",
        choices: [
          "The length remains the same",
          "The length is increased by 1",
          "The length is decreased by 1",
          "The length is reset to 0",
        ],
        type: "MCQs",
        correctAnswer:
          "The length is decreased by 1",
      },
      {
        question:
          "Which is a commonly used loop to delete an element from an array?",
        choices: ["for loop", 
        "while loop", 
        "do-while loop", 
        " switch loop"],
        type: "MCQs",
        correctAnswer: "for loop",
      },
    ],
  };