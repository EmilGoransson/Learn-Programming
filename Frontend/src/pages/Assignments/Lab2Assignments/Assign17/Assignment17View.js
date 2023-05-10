import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import Quiz from "../../../../Components/Quiz/quiz";
import { quizData } from "./QuizForEach";
import "../../Lab1Assignments/AssignmentView.css";
function Lab2a17View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">For-Each Loop</h1>
            <p className="mb-4">
            A <code>"for each"</code> loop is a type of loop that lets you easily go through all the elements in a collection,
             one by one, and do something with each element. Here's what a "for each" loop looks like in Java:
             <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code> { `for (type element : collection) {
            // do something with element
            }`}</code></pre>
            In this loop, <code>"type"</code> is the type of the elements in the collection, <code>"element"</code> is a variable that represents
            the current element being processed, and <code>"collection"</code> is the collection of elements you want to iterate over.
            </p>
            <h2 className="text-2xl font-bold mb-4">For-Each Example</h2>
            <p className="mb-4">
            For example, let's say you have an array of integers:


<code>{ `int[] numbers = {1, 2, 3, 4, 5}; `}</code>
You can use a "for each" loop to print out each number in the array like this:
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code className="text-sm font-mono">
   { `for (int num : numbers) {System.out.println(num);}
 `}
</code>
</pre>
In this loop, the variable <code>"num"</code> gets assigned to each element in the <code> "numbers"</code> array one by one,
and the code inside the loop (in this case, just printing out the number) gets executed for each element.


            </p>
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p>
            The great thing about "for each" loops is that they're really easy to use and read.
            You don't have to worry about keeping track of an index variable like you would with a traditional "for" loop.
            Instead, you can just focus on what you want to do with each element in the collection.One important thing to note
            is that "for each" loops only work with collections that have a defined order, like arrays or lists. They won't work
            with collections that don't have a specific order, like sets or maps. In summary, "for each" loops are a handy way to
            loop through all the elements in a collection, one by one, and do something with each element. They're easy to use and
            can make your code more readable.


            </p>
           
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
     <Quiz quizData={quizData}/>
      </pre>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
          
            Write a program that adds a number which is given from the scanner and 
            adds that number to each element in the array that is written. Finally 
            add all the values in the array and print it.
            </p>

                To pass the exercise you need to:
                <p>
                    <br></br>
                    <p>1. Use the Scanner class to get an integer input from the user.</p>
                    <p>2. Change the values of the array by adding the given number.</p>
                    <p>3. Use a for-each loop to iterate over all the numbers and add them </p>
                    <p>4. Print out the final sum.




                    </p>
                   
                
                <CodeRunner
                    testCases={50}
                    testCase2={95}
                    preMadeText={props.preMadeText}
                    input1={1}
                    input2={10}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab2/2`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/4`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Lab2a17View;
