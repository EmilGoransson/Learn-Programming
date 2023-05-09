// Question Types
// 1. MCQs | Multiple Choice | single

export const quizData = {
    topic: "Javas",
    level: "Beginner",
    totalQuestions: 3,
    perQuestionScore: 5,
    
      questions: [
{
question: "What happens with the elements to the right of an inserted element at a specific index?",
choices: ["The existing elements after the insertion index are shifted to the right", "The existing elements before the insertion index are shifted to the left", "The inserted element is placed at the beginning of the array", "The inserted element is placed at the end of the array"],
type: "MCQs",
correctAnswer: "The existing elements after the insertion index are shifted to the right"
},
{
question: "What is the correct way to change the size of an array?",
choices: ["Create a new array with the desired length and copy the elements from the old array to the new array", "Delete elements from the beginning of the array to reduce its size", "Delete elements from the end of the array to reduce its size", "Set the length of the array to the desired value"],
type: "MCQs",
correctAnswer: "Create a new array with the desired length and copy the elements from the old array to the new array"
},
{
question: "What is the result of the following code snippet?int[] arr = {1, 2, 3};\nint[] newArr = new int[4];\nfor (int i = 0; i < arr.length; i++) {\n newArr[i] = arr[i];\n}\narr = newArr;",
choices: ["The length of arr is increased to 4", "The length of arr is decreased to 2", "The length of arr remains 3", "An error is thrown"],
type: "MCQs",
correctAnswer: "The length of arr remains 3"
}
]
    }