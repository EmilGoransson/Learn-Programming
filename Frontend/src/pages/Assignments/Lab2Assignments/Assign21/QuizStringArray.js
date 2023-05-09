// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,


  questions: [
    {
      question: "What is a string array in Java?",
      choices: ["An array that can hold any type of data?", "An array that can only hold integer values", "An array that can only hold string values", " An array that can hold both integer and string values"],
      type: "MCQs",
      correctAnswer: "An array that can only hold string values",
    },
    {
      question: "How do you access a specific element in a string array in Java?",
      choices: ["Using the index of the element in square brackets, e.g. scar[0]", "Using the get() method of the array, e.g. arr.get(0)", "Using the indexOf() method of the array, e.g. arr.indexOf(0)" ,"Using the getElement() method of the array, e.g. arr.getElement(0)"],
      type: "MCQs",
      correctAnswer: "Using the index of the element in square brackets, e.g. scar[0]",
    },
    {
      question:
        "How do you iterate over a string array in Java using a for loop?",
        choices: [
        "Using a for loop with a counter variable that ranges from 0 to the length of the array minus one",
        "Using a foreach loop with the syntax for (String s : arr)",
        "Using a while loop with a counter variable that ranges from 0 to the length of the array minus one",
        "Using a do-while loop with a counter variable that ranges from 0 to the length of the array minus one",
      ],
      type: "MCQs",
      correctAnswer:
        "Using a for loop with a counter variable that ranges from 0 to the length of the array minus one",
    },
  
    {
      question: "How do you declare a string array variable in Java?",
      choices: ["String[] arr = new String();", "String arr[] = new String();", "String[] arr = new String[];", "String arr[] = new String[];"],
      type: "MCQs",
      correctAnswer: "String[] arr = new String()",
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
