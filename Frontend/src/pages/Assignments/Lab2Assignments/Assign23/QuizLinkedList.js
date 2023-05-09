// Question Types
// 1. MCQs | Multiple Choice | single


export const quizData = {
  topic: "Javas",
  level: "Beginner",
  totalQuestions: 4,
  perQuestionScore: 5,


  questions: [
    {
      question: "What is a linked list?",
      choices: [" A data structure that stores data in a linear sequence", "A data structure that stores data in a non-linear sequence", "A data structure that stores data in a tabular format", "A data structure that stores data in a graph format"],
      type: "MCQs",
      correctAnswer: "A data structure that stores data in a non-linear sequence",
    },
    {
      question: "What are the two main components of a linked list?",
      choices: ["Nodes and edges", "Nodes and pointers", "Elements and references" ,"Elements and indices"],
      type: "MCQs",
      correctAnswer: "Nodes and pointers",
    },
    {
      question:
        "What is the difference between a singly linked list and a doubly linked list?",
        choices: [
        "A singly linked list has nodes that only point to the next node, while a doubly linked list has nodes that point to both the next and previous nodes",
        "A singly linked list has nodes that point to both the next and previous nodes, while a doubly linked list has nodes that only point to the next node",
        "A singly linked list can only be traversed in one direction, while a doubly linked list can be traversed in both directions",
        "A singly linked list has nodes that are connected in a circular manner, while a doubly linked list does not",
      ],
      type: "MCQs",
      correctAnswer:
        "A singly linked list has nodes that only point to the next node, while a doubly linked list has nodes that point to both the next and previous nodes",
    },
  
    {
      question: "What is a node in a linked list?",
      choices: ["A pointer to the next node in the list", "A value or piece of data stored in the list", "A variable that stores the size of the list", "A function that performs operations on the list"],
      type: "MCQs",
      correctAnswer: "A value or piece of data stored in the list",
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
