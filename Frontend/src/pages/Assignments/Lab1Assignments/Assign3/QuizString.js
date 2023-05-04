// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,

    questions: [
      {
        question: "What is a string in Java?",
        choices: ["A sequence of numbers", "A sequence of characters", "A data type that stores Boolean values", "A type of loop"],
        type: "MCQs",
        correctAnswer: "A sequence of characters",
      },
      {
        question: "Which operator is used for string concatenation in Java?",
        choices: ["*", "%", "+", "-"],
        type: "MCQs",
        correctAnswer: "+",
      },
      {
        question:
          "What is the length of the string \"Java Programming\"?"
        ,
        choices: [
          "15",
          "16",
          "17",
          "18",
        ],
        type: "16",
        correctAnswer:
          "myMethod();",
      },
      {
        question: "What is the output of the following code? String str1 = \"Java\"\; \nString str2 = \"Java\"\;",
        choices: ["To declare the type of the method", "To indicate that the method has finished executing", "To specify the value that the method should return", "To define the parameters that the method should accept"],
        type: "MCQs",
        correctAnswer: "To specify the value that the method should return",
      },
    ],
  };
      /* The quiz 

A) true false
B) true true
C) false false
D) false true

Answer: B
          String str2 = "Java";
          String str3 = new String("Java");
          System.out.println(str1 == str2);
          System.out.println(str1.equals(str3));",
Explanation: The first println() statement will output true because str1 and str2 refer to the same string literal, so they are equal. The second println() statement will output true because the equals() method compares the contents of the strings, not their references, and str1 and str3 have the same contents.
*/