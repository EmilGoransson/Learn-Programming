import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizMatrix";
import Quiz from "../../../../Components/Quiz/quiz";


function Lab1a11View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                Matrix
            </h1>
            <p className="mb-4">
            A matrix is a rectangular array of numbers arranged in rows and columns. Matrices are
             commonly used in linear algebra, machine learning, and other fields of mathematics 
             and computer science. In Java, matrices can be represented using two-dimensional arrays.
            </p>
            <h2 className="text-2xl font-bold mb-4">Creating a Matrix</h2>
            <p className="mb-4">
            To create a matrix in Java, you can declare a two-dimensional array and initialize 
            it with the desired values. For example, to create a 3x3 matrix with the values
             1, 2, 3, 4, 5, 6, 7, 8, and 9, you can use the following code:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};`}
          </code>
      </pre>
      <p className="mb-4">
      This code creates a two-dimensional array with three rows and three columns, and 
      initializes it with the values 1 to 9. It's also possible to fill in a matrix
      with the help of a for loop. Here's an example of how to create a matrix in Java using a for loop:
       </p>
       <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int rows = 3;
int columns = 4;
int[][] matrix = new int[rows][columns];

for(int i = 0; i < rows; i++) {
    for(int j = 0; j < columns; j++) {
        matrix[i][j] = i + j; // Or any other formula to generate the values
    }
}`}
          </code>
      </pre>
      <p className="mb-4">
      In this example, we create a 3x4 matrix with all elements initialized to 0. We use nested 
      for loops to iterate over each row and column of the matrix and set the values using a formula.
       You can replace the i + j formula with any other formula you need to generate the values.
       </p>
       <p className="mb-4">
    Note that the outer loop iterates over the rows of the matrix, while the inner loop iterates over the columns. 
    Also, the indices start at 0, so the first row and column have an index of 0, not 1.
       </p>

            <h2 className="text-2xl font-bold mb-4">Accessing elements on a matrix</h2>
            <p className="mb-4">
            You can access the elements of a matrix using the row and column indices. For example,
             to access the element in the second row and third column of the matrix created above 
             (which has the value 6), you can use the following code:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int element = matrix[1][2];`}
          </code>
      </pre>
      <p className="mb-4">
      This code accesses the second row (which has index 1) and the third column (which has index 2)
       of the matrix, and assigns the value of that element to the variable <code>element</code>.
            </p>
            <h2 className="text-2xl font-bold mb-4">Performing operations on Matrices</h2>
            <p className="mb-4">
            You can perform various operations on matrices in Java, such as adding, subtracting,
             multiplying, and transposing matrices. These operations can be implemented using loops
              that iterate over the rows and columns of the matrices. Here's an example of how to 
              add two matrices in Java:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int[][] matrix1 = {{1, 2}, {3, 4}};
int[][] matrix2 = {{5, 6}, {7, 8}};

int[][] sum = new int[2][2];
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        sum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}

System.out.println("The sum of the two matrices is:");
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        System.out.print(sum[i][j] + " ");
    }
    System.out.println();
}`}
          </code>
      </pre>
      <p className="mb-4">
      This code creates two matrices <code>matrix1</code> and <code>matrix2</code>, 
      each with two rows and two columns, and adds them element-wise to create a new matrix sum.
       It then outputs the elements of the sum matrix to the console.
            </p>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
            In conclusion, matrices are an important data structure for representing two-dimensional
             data in Java. They can be created using either a two-dimensional array or a nested for loop, 
             and can be manipulated using a variety of operations such as matrix addition, subtraction, 
             multiplication, and transposition. By understanding how to create and work with matrices in Java, 
             you can solve a wide range of problems in various domains such as mathematics, computer graphics, and 
             machine learning.
            </p>
            

            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <br></br>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            This programming exercise requires you to write a Java program that reads an integer from the scanner, 
            which is then used to fill a 2x2 matrix. The program then calculates the sum of all 
            elements in the matrix and prints the result. Your task is to implement the program using the 
            provided starter code and instructions below. To pass the exercise, you need to correctly store 
            the scanner input, create the matrix, fill it with appropriate values using a for-loop, calculate the sum, 
            and print the result.
            </p>
            
                To pass the exercise you need to:
                <p>
                    <br></br>
                    <p>1. Use the <code>nextInt()</code> method of the Scanner class to read an <code>int</code> 
                        from the console and store it in an <code>int</code> variable named filler</p>
                    <p>2.Create an <code>int</code>variable named <code>sum</code> and initialize it to zero. </p>
                    <p>3. Create a two-dimensional integer array called <code>matrix</code> with two rows and two columns. </p>
                    <p>4. Use a nested <code>for</code> loop to fill the array with values.
                         The value at position <code>[i][j]</code> should be equal to the sum of 
                         <code>filler</code>, <code>i</code>, and <code>j</code>.
                    </p>
                    <p>5. Use another nested <code>for</code> loop to calculate the sum of all the elements in the array. 
                        Add each element to the <code>sum</code> variable.
                    </p>
                    <p>6. Print the sum</p>
          
                <CodeRunner
                    testCases={24}
                    testCase2={40}
                    preMadeText={props.preMadeText}
                    input1={5}
                    input2={9}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab1/10`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab1/12`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab1a11View;