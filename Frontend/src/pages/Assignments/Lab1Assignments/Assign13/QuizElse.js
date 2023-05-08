// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: "What is the purpose of an else statement?",
        choices: [
        "To specify a block of code that should be executed if the condition in the if statement is true.", 
        "To specify a block of code that should be executed if the condition in the if statement is false.", 
        "o specify an additional condition to test after the initial if statement.", 
        "To end the current block of code."
        ],
        type: "MCQs",
        correctAnswer: "To specify a block of code that should be executed if the condition in the if statement is false.",
      },
      {
        question: "What is the purpose of an else if statement?",
        choices: [
          "To specify a block of code that should be executed if the condition in the if statement is true.", 
          "To specify a block of code that should be executed if the condition in the if statement is false.", 
          "To specify an additional condition to test after the initial if statement."],
        type: "MCQs",
        correctAnswer: "To specify an additional condition to test after the initial if statement.",
      },
      {
        question:
          "What is the order in which conditions are evaluated in an if/else if chain?",
        choices: [
          "From the top to the bottom, regardless of whether a condition has already been true.",
          "From the bottom to the top, regardless of whether a condition has already been true.",
          "From the top to the bottom, but only if the previous condition was false.",
          "From the bottom to the top, but only if the previous condition was false.",
        ],
        type: "MCQs",
        correctAnswer:
          "From the top to the bottom, but only if the previous condition was false.",
      },
      {
        question:[
          "int x = 5;",
          <br></br>,
          "int y = 10;",
          <br></br>,
          <br></br>,
          "if (x > 10) {",
          <br></br>,
          <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>,
          "System.out.println(\"x is greater than 10\");",
          <br></br>,
          "} else if (y < 15) {",
          <br></br>,
          <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>,
          <br></br>,
          "System.out.println(\"y is less than 15\");",
          <br></br>,
          "} else {",
          <br></br>,
          <span dangerouslySetInnerHTML={{__html: "&nbsp;&nbsp;&nbsp;&nbsp;"}}></span>,
          "System.out.println(\"x is less than or equal to 10 and y is greater than or equal to 15\");",
          <br></br>,
          "}",


        ],
        choices: ["x is greater than 10", 
        "y is less than 15", 
        "x is less than or equal to 10 and y is greater than or equal to 15", 
        "There is a compile error in the code."],
        type: "MCQs",
        correctAnswer: "x is less than or equal to 10 and y is greater than or equal to 15",
      },
    ],
  };