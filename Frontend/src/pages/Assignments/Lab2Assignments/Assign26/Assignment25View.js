import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import { quizData } from "./QuizSelection-Sort";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab2a26View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                Selection Sort
            </h1>
            
            <p className="mb-4" >
            Selection sort is a simple comparison-based sorting algorithm. It works by <code>dividing the input array into two parts</code> :
             the sorted part and the unsorted part. Initially, the sorted part is empty, and the unsorted part
              contains the entire array.
The algorithm repeatedly finds the minimum element from the unsorted part and swaps it with the leftmost element of the unsorted part.
 This process continues until the entire array becomes sorted
         </p>
            <h2 className="text-2xl font-bold mb-4">Algorithm Steps:</h2>
            <p className="mb-4">
        
        <p>1.Find the <code>minimum element </code>in the unsorted part of the array.</p>

        <p>2.Swap the minimum element with the leftmost element of the unsorted part.</p>

        <p>3.Move the boundary between the sorted and unsorted parts one position to the right.
</p>

        <p>Repeat steps 1-3 until the entire array is sorted.</p>
    
            </p>
          <h2 className="text-2xl font-bold mb-4">Example</h2>
          <p className="mb-4"> 
          Consider an array [5, 2, 8, 1, 4]. The selection sort algorithm would perform the following steps:
          </p>

          <p>1.Find the <code>minimum element (1)</code> and swap it with the leftmost element (5) to get [1, 2, 8, 5, 4].</p>
          
          <p>2.Move the <code>boundary to the right</code>, making the sorted part [1].</p>
          
          <p>3.Find the <code>minimum element (2)</code> in the unsorted part (2, 8, 5, 4) and swap it with the leftmost element (2) to get [1, 2, 8, 5, 4].</p>
          
          <p>4.Move the<code> boundary to the right</code>, making the sorted part [1, 2].</p>

          <p>5.Repeat steps 3-4 until the entire array becomes sorted: <code>[1, 2, 4, 5, 8]</code>.</p>

        

          
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono text-white">
  {` 
  public class SelectionSort {
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            
            // Find the minimum element in the unsorted part
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap the minimum element with the leftmost element of the unsorted part
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 4};
        
        // Print the array before sorting
        System.out.println("Array before sorting: " + Arrays.toString(arr));
        
        // Sort the array using selection sort
        selectionSort(arr);
        
        // Print the sorted array
        System.out.println("Array after sorting: " + Arrays.toString(arr));
    }
}

       


`}
</code>

      </pre>
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <p className="mb-4">

      <p>Selection sort is a basic sorting algorithm that works by <code>repeatedly finding the minimum element </code>from the unsorted portion of an array and <code>placing it at the beginning</code>. It continues this process until the entire array is sorted</p>

     
            </p>
            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            
        
            
            
         
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>Your task is to Complete the code by implementing the selection sort logic</p>
            <p>Instruction: </p>
            
                   
                    <p>1.Declare an array of integers with some initial values.  </p>
                   
                   
                    <p>2.Implement the selection sort algorithm to sort the array in ascending order.</p>
                    
                    <p>3.Print the sorted array.</p>

                   
                    
                   
                    <CodeRunner
                    testCases={"5,7,25,30,45,100,"}
                   
                   
                    preMadeText={props.preMadeText}
                    
                   
                    
                    
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
                
             
  
            <div>
                <Link to={`/Lab2/11`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/13`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab2a26View;