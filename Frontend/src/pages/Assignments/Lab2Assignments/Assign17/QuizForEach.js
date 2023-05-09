// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 5,
  perQuestionScore: 5,


  questions: [
    {
      question: "What is a for-each loop in Java?",
      choices: ["A loop that iterates over a range of numbers", "A loop that iterates over the elements in an array/collection", "A loop that iterates over the character in a string", "A loop that iterates over the lines in a text file"],
      type: "MCQs",
      correctAnswer: "A loop that iterates over the elements in an array or collection",
    },
    {
      question: "What is the syntax for a for-each loop in Java?",
      choices: ["for (int i = 0; i < n; i++)", "for (int in : array)", "for (String s : list)", "for (char c : string)"],
      type: "MCQs",
      correctAnswer: "for (int in : array)",
    },
    {
      question:
        "What is the advantage of using a for-each loop over a regular for loop in Java?"
      ,
      choices: [
        "It's easier to write",
        "It's more efficient",
        "It's less prone to errors",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer:
        "All of the above",
    },
    {
      question: "Which of the following is true about the variable used in a for-each loop in Java?",
      choices: ["The variable must be declared outside of the loop", " The variable is automatically initialized to zero ", "The variable is automatically declared and initialized by the loop ", "The variable must be of type Object"],
      type: "MCQs",
      correctAnswer: "The variable is automatically declared and initialized by the loop",
    },
    {
      question: " Can a for-each loop be used to modify the elements in an array or collection?",
      choices: ["Yes, but only if the elements are objects", " Yes, but only if the loop is nested inside another loop", "Yes, but only if the loop variable is declared as final", "No, a for-each loop is read-only and cannot modify the elements"],
      type: "MCQs",
      correctAnswer: "No, a for-each loop is read-only and cannot modify the elements ",
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
