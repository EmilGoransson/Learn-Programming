// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    
      questions: [
        {
          question: `What is the output of this nested for-loop code in Java?\n
          for(int i=0; i<3; i++){
            for(int j=0; j<2; j++){
              System.out.print(i + j + \" \");    
            }
          }`,
          choices: ["0 1 1 2 2 3", "1 2 3 4 5 6", "0 1 2 3 4 5", "0 1 2 1 2 3"],
          type: "MCQs",
          correctAnswer: "0 1 1 2 2 3",
        },
        {
          question: "What is the output of this nested for-loop code in Java?\nfor(int i=1; i<=5; i++) {\n    for(int j=1; j<=i; j++) {\n        System.out.print(i*j + \" \");\n    }\n}",
          choices: ["1 2 3 4 5 6 7 8 9 10 11 12 13 14 15", "1 2 4 3 6 9 4 8 12 16 5 10 15 20 25", "1 4 9 16 25 2 6 12 20 30 3 9 15 25 35", "1 2 4 8 16 32 3 6 9 12 15 18 21 24 27"],
          type: "MCQs",
          correctAnswer: "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"
        },
        {
          question: "What is the output of this nested for-loop code in Java?\nfor(int i=0; i<4; i++) {\n    for(int j=i; j<4; j++) {\n        System.out.print(j + \" \");\n    }\n}",
          choices: ["0 1 2 3 1 2 3 2 3 3", "0 1 2 3 1 2 3 2 3 4", "0 1 2 3 1 2 3 2 3 5", "0 1 2 3 1 2 3 2 3 6"],
          type: "MCQs",
          correctAnswer: "0 1 2 3 1 2 3 2 3 3"
        },
        {
          question: "What is the output of this nested for-loop code in Java?\nfor(int i=1; i<=3; i++) {\n    for(int j=1; j<=3; j++) {\n        if(i*j%2==0) {\n            System.out.print(\"*\");\n        } else {\n            System.out.print(\"-\");\n        }\n    }\n}",
          choices: ["-*-*-*-","***---***","-*-*-*-***","----***-*-*"],
          type: "MCQs",
          correctAnswer: "-*-*-*-"
        }
      ]
    }