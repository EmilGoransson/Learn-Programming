import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";


function Lab1a12View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                If Statement
            </h1>
            <p className="mb-4">
            In Java, the <code>if</code> statement is a conditional statement that allows you to execute a block of code only if a certain 
            condition is met. The basic syntax of an <code>if</code> statement in Java is as follows:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                <code className="text-sm font-mono">
          {`if (condition) {
    // code to execute if the condition is true
}`}
        </code>
      </pre>
            <p className="mb-4">
            The condition is an expression that evaluates to a <code>boolean</code> value (i.e., true or false). If the condition is true, 
            the code inside the curly braces is executed. If the condition is false, the code inside the curly braces is skipped.
            </p>

            <h2 className="text-2xl font-bold mb-4">Nested If</h2>
            <p className="mb-4">
                You can also use nested <code>if</code> statements to test conditions within conditions. The syntax for a 
                nested <code>if</code> statement is as follows:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`if (condition1) {
    // code to execute if condition1 is true
    if (condition2) {
        // code to execute if both condition1 and condition2 are true
    }
}`}
        </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="mb-4">
            Remember that the code inside an if statement (or any other type of block statement) must be enclosed in curly braces, 
            even if it's only a single statement. Also, be careful to use the correct boolean operators (<code>&&</code> for for 
            "and", <code>||</code> for "or", and <code>!</code> for "not") when constructing your conditions.
            </p>
            <p>
            Overall, the <code>if</code> statement is a fundamental tool for controlling the flow of your Java programs, and it's 
            essential that you understand how to use it effectively.
            </p>

            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            Write a Java program that inputs an integer value from the Scanner, and then prints whether the value is positive or negative. 
            You should use two if statements to test the value, and print either "Possitive" or "Negative" based on the test.
            </p>
            <p>
                <CodeRunner
                    testCases={"Positive"}
                    testCase2={"Negative"}
                    preMadeText={props.preMadeText}
                    input1={10}
                    input2={-9}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab1/11`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab1/13`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab1a12View;