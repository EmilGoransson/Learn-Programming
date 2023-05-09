// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 5,
  perQuestionScore: 5,


  questions: [
    {
      question: "What is the default value for a boolean variable in Java?",
      choices: ["0", "false", "null", "true"],
      type: "MCQs",
      correctAnswer: "false",
    },
    {
      question: "What values ​​can a boolean variable have?",
      choices: ["true or false", "1 or 0", "yes or no" ,"all of the above"],
      type: "MCQs",
      correctAnswer: "true or false",
    },
    {
      question:
        "Which of the following statements correctly declares a boolean variable called isRaining and initializes it to true?"
      ,
      choices: [
        "boolean isRaining = 1;",
        "boolean isRaining = true;",
        "boolean isRaining = TRUE;",
        "boolean isRaining;",
      ],
      type: "MCQs",
      correctAnswer:
        "boolean isRaining = true;",
    },
    {
      question: "What is the result of the following expression? true && false",
      choices: ["true", "false ", " undefined ", "error"],
      type: "MCQs",
      correctAnswer: "false",
    },
    {
      question: "What is the result of the following expression? !(true || false)",
      choices: ["true", "false", "undefined", "error"],
      type: "MCQs",
      correctAnswer: "false ",
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
