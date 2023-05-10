import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import { quizData } from "./QuizDelete-element-in-array";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab2a25View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                Delete element in a array
            </h1>
            <h2 className="text-2xl font-bold mb-4">Overview of Deleting an Element in a Array</h2>
            <p className="mb-4" >
            In Java, <code>arrays </code>have a <code>fixed size</code>, meaning that the size of an array cannot be changed dynamically once it is created. However, you can simulate the deletion of an element from an array by shifting the remaining elements to fill the gap left by the deleted element.
            </p>
            <h2 className="text-2xl font-bold mb-4">Deleting an Element from an Array</h2>
            <p className="mb-4">
            To delete an element from an array, follow these steps:

            <p>1.<code>Determine the Index</code>: </p>
            
            <p>Identify the index of the element you want to delete from the array. </p>
            
            <p>2.<code>Shift Elements</code>:
       
        <p>Shift all the elements after the deletion index one position to the left</p>
        <p>Overwrite the element you want to delete with the subsequent element.</p>
        <p>Repeat this process for each subsequent element until the end of the array.</p>
        </p>
        
           <p>3.<code>Update the Array Length</code>:</p>

           <p>If necessary, update the length of the array to reflect the reduced size.</p>
           <p>This step is optional since arrays in Java have a fixed size, and the length remains unchanged unless explicitly modified.</p>
            </p>

    
            
          <h2 className="text-2xl font-bold mb-4">Example</h2>
        
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
  {` 
  public class DeleteElementFromArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int indexToDelete = 2;

        // Print the array before deletion
        System.out.println("Array before deletion: " + Arrays.toString(array));

        // Delete the element at the specified index
        for (int i = indexToDelete; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }

        // Decrease the length of the array
        int[] newArray = new int[array.length - 1];
        for (int i = 0; i < newArray.length; i++) {
            newArray[i] = array[i];
        }

        // Assign the new array back to the original array variable
        array = newArray;

        // Print the array after deletion
        System.out.println("Array after deletion: " + Arrays.toString(array));
    }
}

`}
</code>

      </pre>
      <h2 className="text-2xl font-bold mb-4">Explaining the code exemple</h2>
      <p className="mb-4">
      <p>1.We start by defining an <code>array </code>with some initial values, and we specify the index <code>indexToDelete</code>of the element we want to delete.</p>
      <p>2.We print the array before the deletion using <code>Arrays.toString(array)</code> to convert the array into a string representation.</p>
      <p>3.Next, we use a for loop to delete the element at the specified index. Starting from <code>indexToDelete</code>, we shift each element in the array to the left by assigning it the value of the next element
      <code> (array[i] = array[i + 1])</code>. This effectively overwrites the element at the specified index with the next element, effectively deleting it.</p>
      <p>4.After the deletion, we create a new array <code>newArray </code>with a length of <code>array.length - 1</code> to accommodate the deleted element.</p>
      <p>5.Using a for loop, we iterate over the <code>newArray </code>length and copy each element from the original <code>array </code>to the corresponding index in <code>newArray</code>. This creates a new array without the deleted element.</p>
      <p>6.Finally, we assign the <code>newArray</code> back to the original array variable <code>array</code>, effectively updating the array with the deleted element removed.</p>
      <p>7.We print the array after the deletion using <code>Arrays.toString(array)</code> to display the updated array.</p>
            </p>
            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            
        
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="mb-4">
            When deleting an element from a Java array, the element is removed, and the remaining elements may be shifted to fill the gap. This can result in a 
            decrease in the array's length. Techniques such as assigning a default value or null to the element, 
            or shifting elements manually using loops, can be employed. It's important to handle any potential issues that may arise during the deletion process, 
            considering the impact on the array's structure and subsequent operations.


            </p>
            
            
         
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>Complete the code, the input of this code is the array size!</p>
            <p>Instruction: </p>
            
                   
                    <p>1.Create an int variables called <code>"indexToDelete" </code>and intiate it using the System.in.  </p>
                   
                   
                    <p>1.Delete the element at the specified index by <code>shifting</code> the remainning elements</p>
                    
                    <p>3.Decrease the size of the array</p>

                    <p>4.Print the array after deletion</p>
                    
                   
                    <CodeRunner
                    testCases={"25,30,45,5,7,"}
                    testCase2={"25,30,45,100,7,"}

                   
                    preMadeText={props.preMadeText}
                    input1={3}
                    input2={4}

                   
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
                
             
  
            <div>
                <Link to={`/Lab2/10`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/12`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab2a25View;