import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import {quizData} from "./QuizSelectionSort2";

function Lab2a13View(props) {
    return (
        <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
                <h1 className="text-3xl font-bold mb-4">Selection Sort, Complexity & Big-O-Notation</h1>
                <p className="mb-4">
<code>Big-O-Notation </code> is a way to describe the growth rate of a function in terms of its input size. 
It is commonly used in computer science to describe the <code>time complexity </code> of algorithms. 
The notation uses the symbol O followed by a function to represent the upper bound of the growth rate.
<br></br>
<br></br>
When it comes to <code>sorting algorithms, </code> like the selection sort algorithm, 
the complexity is typically measured in terms of the number of comparisons and swaps performed by the algorithm. 
In other words, the efficiency of the sorting algorithm is determined by how many times it needs to compare 
elements in the array and how many times it needs to swap elements.
<br></br>
<br></br>
Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element 
from the unsorted portion of the array and moving it to the beginning of the sorted portion of the array. 
Here's an example implementation of selection sort in Java:


            <p></p>
                </p>
                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}`}
          </code>
        </pre>
                <p className="mb-4">
           </p>
                <p className="mb-4">
               
                </p>

                <p className="mb-4">
                In this implementation, the outer loop runs n - 1 times, where n is the length of the array. 
                The inner loop runs n - i - 1 times on each iteration of the outer loop, since the first i elements are already sorted. 
                In terms of comparisons, the algorithm performs n(n-1)/2 comparisons in the worst case, which is when the array is sorted 
                in reverse order. In terms of swaps, the algorithm performs n-1 swaps in the worst case, which is when the array is sorted 
                in reverse order.
                <br></br>
                <br></br>
                Therefore, the time complexity of selection sort is O(n^2), which means that the number of comparisons and swaps increases 
                quadratically with the size of the input. This makes selection sort inefficient for large arrays, but it is still useful for 
                small arrays or as a building block for more complex sorting algorithms.
                <br></br>
                <br></br>
                For example, in the case of selection sort, we determined that the time complexity is O(n^2), where n is the size of the input array. 
                This means that the number of comparisons and swaps performed by the algorithm grows quadratically with the size of the input.
                In general, we use big O notation to describe the worst-case scenario for an algorithm, since this represents the upper bound of its growth rate. 
                However, it's important to note that big O notation only describes the order of growth, not the exact number of operations performed by the algorithm.
                </p>
                <h2 className="text-2xl font-bold mb-4"> </h2>
                <p className="mb-4">
                </p>
                <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                <p className="mb-4">
                Software complexity refers to the level of difficulty involved in understanding, designing, implementing, and testing software. In the case of algorithms, complexity is often measured by analyzing how the algorithm's runtime or memory usage scales with the size of the input.

Big O notation is a way to describe the growth rate of a function in terms of its input size. In the context of algorithms, it is used to describe how the runtime of an algorithm grows as the size of the input increases.
<br></br><br></br>
For example, selection sort has a time complexity of O(n^2), meaning that the number of operations it takes to sort an array grows quadratically with the size of the input. As the size of the input increases, the algorithm will become increasingly slow.

By analyzing the time complexity of an algorithm, we can determine how efficient it is and how it will perform as the size of the input grows. This allows us to make informed decisions about which algorithm to use in a given situation, and how to optimize the algorithm's performance if necessary.
</p>
                
                <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
                <Quiz quizData={quizData}/>
                <p>                    <br></br>                    <br></br></p>
                <p>

                
        
                    <CodeRunner
                        testCases={1}
                        preMadeText={props.preMadeText}
                        input1={1}
                        shouldIncrement={true}
                        thisLevel={props.thisLevel}
                    />
                </p>
                <div>
                    <Link to={`/Lab2/12`}>
                        <button className="next-button text-black">Prev</button>
                    </Link>
                    <Link to={`/Lab2/14`}>
                        <button className={props.disabled[1]} disabled={props.disabled[0]}
                                onClick={() => window.scrollTo(0, 0)}>
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Lab2a13View;
