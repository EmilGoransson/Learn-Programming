// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,


  questions: [
    {
      question: "What is the result of the following expression? (true || false) && (false || true)?",
      choices: ["true", "false", "undefined", "error"],
      type: "MCQs",
      correctAnswer: "true",
    },
    {
      question: "What is the result of the following expression? !(false && true) || (false || true)?",
      choices: ["true", "false", "undefined" ,"error"],
      type: "MCQs",
      correctAnswer: "true",
    },
    {
      question:
        "What is the result of the following expression? false && (true || false && !true)?"
      ,
      choices: [
        "true",
        "false",
        "undefined",
        "error",
      ],
      type: "MCQs",
      correctAnswer:
        "false",
    },
  
    {
      question: "What is the result of the following expression? true || false && !true || true",
      choices: ["true", "false", "undefined", "error"],
      type: "MCQs",
      correctAnswer: "true",
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
