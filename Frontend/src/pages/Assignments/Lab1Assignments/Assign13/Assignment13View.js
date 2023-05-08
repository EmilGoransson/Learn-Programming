import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizElse";

function Lab1a13View(props) {
    return (
        <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
                <h1 className="text-3xl font-bold mb-4">Else and Else if</h1>
                <p className="mb-4">
                <code>else</code> and <code>else if</code> are additional control structures that can be used in conjunction with <code>if</code> statements 
                to create more complex decision-making logic. 
                </p>
                <h2 className="text-2xl font-bold mb-4">Else</h2>
                <p className="mb-4">
                The <code>else</code> statement is used to specify a block of code that should be executed if the condition in the <code>if</code> statement is false. For example:                </p>
                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                    <code className="text-sm font-mono">
{`int age = 17;
if (age >= 18) {
    System.out.println("You can vote!");
} else {
    System.out.println("You cannot vote yet.");
}`}
                    </code>
                </pre>
                <p>
                In this case, if the age variable is less than 18, the message "You cannot vote yet" will be printed.  
                </p>
                <h2 className="text-2xl font-bold mb-4">else if</h2>
                <p className="mb-4">
                The <code>else if</code> statement can be used to specify additional conditions to test after the 
                initial <code>if</code> statement. For example:
                </p>
                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
                    <code className="text-sm font-mono">
{`int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("Fail");
}`}
                    </code>
                </pre>
                <p className="mb-4">
                In this case, the code will test whether the score variable is greater than or equal to 90. If it is, 
                the message "A" will be printed. If it is not, the next else if statement will be evaluated to see if 
                the score is greater than or equal to 80. If it is, the message "B" will be printed. If not, the next 
                else if statement will be evaluated, and so on. If none of the conditions are true, the message "Fail" 
                will be printed.
                </p>
                <p className="mb-4">
                else if statements can be used to create complex decision-making logic with many different possible outcomes. 
                However, it's important to remember that the order of the conditions matters - the first condition that is true 
                will determine which block of code is executed.
                </p>
                <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
                <Quiz quizData={quizData}/>
                <h2 className="text-2xl font-bold mb-4">An exercise</h2>
                <p>
                    
                </p>
                Write a Java program that takes in an integer from the user and prints out whether the integer is even, odd, or not a number.
                Your program should include the following steps:
                <p>
                    <br></br>
                    <p>1. Use the Scanner class to read the input.</p>
                    <p>2. Check which number is greater using else-if statements.</p>
                    <p>3. Print either "Even", "Odd" or "Not valid" based on the comparison.
                    </p>
                    <p>Hint: Use scanner.hasNextInt() to determine if the input is valid.</p>
                    
                    <CodeRunner
                    testCases={"Odd"}
                    testCase2={"Not valid"}
                    preMadeText={props.preMadeText}
                    input1={99}
                    input2={"hej"}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
                </p>
                <div>
                    <Link to={`/Lab1/12`}>
                        <button className="next-button text-black">Prev</button>
                    </Link>
                    <Link to={`/Lab1/14`}>
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

export default Lab1a13View;