// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,


  questions: [
    {
      question: "What method is commonly used to compare two strings lexicographically in Java?",
      choices: [" compareTo()", "equals()", "contains()", "length()"],
      type: "MCQs",
      correctAnswer: "compareTo()",
    },
    {
      question: "When using the compareTo() method to compare two strings, what does a negative result mean?",
      choices: ["The first string comes after the second string.", "The first string is equal to the second string.", "The two strings cannot be compared." ,"The first string comes before the second string."],
      type: "MCQs",
      correctAnswer: "The first string comes before the second string.",
    },
    {
      question:
        "Which of the following is true when comparing two strings using the < and > operators in Java?",
        choices: [
        "The comparison is based on the ASCII values ​​of the characters in the strings.",
        "The comparison is based on the Unicode values ​​of the characters in the strings.",
        "The comparison is case-insensitive.",
        "The comparison is based on the length of the strings.",
      ],
      type: "MCQs",
      correctAnswer:
        "The comparison is based on the Unicode values ​​of the characters in the strings.",
    },
  
    {
      question: "What can you do to ensure that the comparison of two strings using the < and > operators is case-insensitive?",
      choices: [" Nothing, the comparison is always case-insensitive.", " Convert both strings to uppercase before comparing them.", "Convert both strings to lower case before comparing them.", "Use the equalsIgnoreCase() method to compare the strings."],
      type: "MCQs",
      correctAnswer: "Use the equalsIgnoreCase() method to compare the strings.",
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
