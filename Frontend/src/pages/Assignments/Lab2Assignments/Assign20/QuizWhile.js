// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,


  questions: [
    {
      question: "What is the syntax for a while loop in Java?",
      choices: ["while (condition) { }", "while { condition }", "while [condition] { }", "condition while { }"],
      type: "MCQs",
      correctAnswer: "while (condition) { }",
    },
    {
      question: "What type of expression is the condition in a while loop?",
      choices: ["Integer ", "Boolean", "String" ,"Double"],
      type: "MCQs",
      correctAnswer: "Boolean",
    },
    {
      question:
        "How many times will the following code loop? int i = 0; while (i < 5) {System.out.println(i);",
        choices: [
        "0 times",
        "1 hour",
        "5 times",
        "Infinite times",
      ],
      type: "MCQs",
      correctAnswer:
        "Infinite times",
    },
  
    {
      question: "How can you exit a while loop before the condition becomes false?",
      choices: ["Use the break statement", "Use the continue statement", "Use the return statement", "None of the above"],
      type: "MCQs",
      correctAnswer: "Use the break statement",
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
