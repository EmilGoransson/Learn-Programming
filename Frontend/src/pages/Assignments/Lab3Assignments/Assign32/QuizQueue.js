export const quizData = {
    topic: "Array Queues in Java",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
        {
            question: "Which data structure is commonly used to implement a queue with a fixed-size capacity?",
            choices: [
                "LinkedList",
                "Stack",
                "Array",
                "HashMap"
            ],
            type: "MCQs",
            correctAnswer: "Array"
        },
        {
            question: "What is the purpose of the `enqueue` method in the ArrayQueue implementation?",
            choices: [
                "To remove an element from the queue.",
                "To retrieve the front element of the queue.",
                "To add an element to the rear of the queue.",
                "To check if the queue is empty."
            ],
            type: "MCQs",
            correctAnswer: "To add an element to the rear of the queue."
        },
        {
            question: "What happens if you try to enqueue an element into a full ArrayQueue?",
            choices: [
                "The element is added successfully.",
                "The oldest element in the queue is removed to make space for the new element.",
                "An exception is thrown, indicating that the queue is full.",
                "The element is added, and the size of the queue increases beyond the maximum capacity."
            ],
            type: "MCQs",
            correctAnswer: "An exception is thrown, indicating that the queue is full."
        },
        {
            question: "Which of the following methods returns the front element of the ArrayQueue without removing it?",
            choices: [
                "enqueue()",
                "dequeue()",
                "peek()",
                "isEmpty()"
            ],
            type: "MCQs",
            correctAnswer: "peek()"
        }
    ]
};
