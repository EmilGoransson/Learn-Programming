import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizBreak";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab3a33View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Break statement</h1>
            <p className="mb-4">
            The break statement is a control statement in Java that allows you to exit a loop or 
            switch statement prematurely. It is often used in situations where you want to terminate a 
            loop or switch statement based on certain conditions. The break statement causes the program to
             jump to the next statement immediately after the loop or switch block.
            </p>
            <h2 className="text-2xl font-bold mb-4"> Syntax </h2>
            <p className="mb-4">
            The syntax of the break statement in Java is as follows:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`break;`}
        </code>
      </pre>
      <h2 className="text-2xl font-bold mb-4"> Usage </h2>
                <p classname="mb-4">
                The break statement can be used in the following scenarios:
                </p>
                <p classname="mb-4">
                1. Exit a loop: You can use the break statement to exit a loop prematurely. 
                When the break statement is encountered inside a loop, the loop is immediately 
                terminated, and the program execution continues with the next statement after the loop.
                </p>
                <p classname="mb-4">
                2. Exit a switch statement: You can use the break statement to exit a switch 
                statement prematurely. When the break statement is encountered inside a switch 
                block, the program execution continues with the next statement after the switch block.
                </p>
                <h2 className="text-2xl font-bold mb-4"> Example </h2>
                <p classname="mb-4">
                Here's an example that demonstrates the use of the break statement in a loop:
                </p>

                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // exit the loop when i is equal to 5
    }
    System.out.println(i);
}`}
        </code>
      </pre>
      <p className = "mb-4">
      In this example, the for loop iterates from 0 to 9. However, when i is equal to 5, 
      the break statement is executed, causing the loop to terminate prematurely. Therefore, 
      the output of this program will be:
      </p>
      <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`0
1
2
3
4`}
        </code>
      </pre>
      <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
            <p className="mb-4">
            The break statement is a useful control statement in Java that allows you to exit a
             loop or switch statement prematurely. It is commonly used when you want to terminate a 
             loop based on certain conditions. By using the break statement, you can make your code
              more efficient and easier to read.
            </p>


            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <br></br>

            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
                In this first exercise we will Write a program that finds the first positive integer 
                in an array that is a multiple of the secret number that you will receive from the scanner.
            </p>
            To pass the exercise you need to:
                    <br></br>
                    <p>1. The program should iterate over the array and check each element to see if it is a positive multiple of 
                        the secret number.</p>
                    <p>2. If a positive multiple of the secret number is found, the program should print the value of the element and exit the loop.</p>
              <p>Remember to use <code>System.out.print()</code> for the print statement! </p>
            <p>
                <CodeRunner
                    testCases={77}
                    testCase2={10}
                    preMadeText={props.preMadeText}
                    input1={7}
                    input2={5}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab3/4`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab3/6`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab3a33View;