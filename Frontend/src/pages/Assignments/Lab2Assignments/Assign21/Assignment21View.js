import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import Quiz from "../../../../Components/Quiz/quiz";
import { quizData } from "./QuizStringArray";
import "../../Lab1Assignments/AssignmentView.css";
function Lab2a21View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">String Array</h1>
            <p className="mb-4">
            In Java, a <code>string array</code> is an array of strings. It is a collection of string elements that
             are stored in a contiguous block of memory.To declare a string array in Java, you can use the following syntax:
             <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code>String[] myArray = new String[5];</code></pre>
<p>This declares an array of 5 strings, where each element is initialized to null. </p>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4"><code>{`String[] myArray = {"apple", "banana", "orange", "grape", "kiwi"}`};</code></pre>
This declares an array of 5 strings, with the values ​​"apple", "banana", "orange", "grape", and "kiwi" assigned to each element respectively.
      </p>
            <p>String fruit = myArray[1];
            To access an element in a string array, you can use the array index like this:
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code>{`String fruit = myArray[1];`};</code></pre>
This assigns the second element in the array, which is "banana", to the variable fruit.
</p>
<p>You can also use a loop, such as a for loop or a foreach loop, to iterate over the elements in a string array:
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code>{`for (int i = 0; i < myArray.length; i++) {
    System.out.println(myArray[i]);
}`};</code></pre>

This loop prints out each element in the myArray array.
</p>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
            Overall, string arrays are a useful data structure in Java for storing and manipulating collections of strings.
            </p>
           
            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>  
     <Quiz quizData={quizData}/>
      
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            Write a program that takes each string element in the given string array and 
            contencate the given string from the scanner to each string element. After that make a large 
            string with all the elements and print it out.
            </p>
            Remember:
            <p>
                <p>1. The code-checker is case sensitive.</p>
                <p>
                    2. Always use the semicolon <code>;</code> at the end of each
                    statement in Java.
                </p>
                <CodeRunner
                     testCases={"Hellol Howl arel youl ?l"}
                     testCase2={"Helloyay Howyay areyay youyay ?yay"}
                     preMadeText={props.preMadeText}
                     input1={"l"}
                     input2={"yay"}
                     shouldIncrement={true}
                     thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab2/6`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/8`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default Lab2a21View;
