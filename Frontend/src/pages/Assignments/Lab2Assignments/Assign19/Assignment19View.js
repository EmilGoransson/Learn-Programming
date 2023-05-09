
import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import Quiz from "../../../../Components/Quiz/quiz";
import { quizData } from "./QuizLogical";
import "../../Lab1Assignments/AssignmentView.css";
function Lab2a19View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Logical Operators</h1>
            <p className="mb-4">
           <code>Logical operators</code> Logical operators in Java are used to perform boolean operations on 
            boolean expressions. There are three logical operators in Java: <code>AND (&&)</code>, <code>OR (||)</code>, and <code>NOT (!)</code>.
            </p>

            <p>The <code>AND</code> operator (&&) returns true only if both operands are true. For example, 
                the expression true && true would evaluate to true, while the expression true 
                && false would evaluate to false.</p>
            <p> The <code>OR</code> operator (||) returns true if either operand is true. 
                For example, the expression true || false would evaluate to true, 
                while the expression false || false would evaluate to false.
</p>
            <p> 
The <code>NOT</code> operator (!) returns the opposite of the boolean value of its operand.
 For example, the expression !true would evaluate to false, while the expression 
 !false would evaluate to true.
</p>
           
            <h2 className="text-2xl font-bold mb-4">Order of operations</h2>
            <p className="mb-4">
            When multiple logical operators are used in an expression, Java evaluates them in a specific order. 
            The NOT operator is evaluated first, followed by the AND operator, and then the OR operator. 
            To override this default order of evaluation, you can use parentheses to group expressions.
            It's important to keep in mind that logical operators are short-circuiting. This means that if 
            the result of the expression can be determined by only evaluating the left operand, then the right operand 
            is not evaluated at all. For example, in the expression false && someMethod(), if the left operand is false, 
            then the method someMethod() will not be executed at all.In conclusion, logical operators are a fundamental part of 
            boolean logic in Java. By understanding how they work and how to use them effectively, you can write more complex and 
            powerful conditional statements in your Java programs.

</p>
 
           
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
     <Quiz quizData={quizData}/>
      </pre>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            Write a Java program that takes an integer input from the user and checks if the number is both greater 
            than 10 and less than 100. If the number satisfies this condition, output the number multiplied by 2. 
            If the number does not satisfy this condition, output the message "Number is not between 10 and 100".
            </p>
            Remember:
            <p>
                <p>1. The code-checker is case sensitive.</p>
                <p>
                    2. Always use the semicolon <code>;</code> at the end of each
                    statement in Java.
                </p>
                <CodeRunner
                    testCases={"22"}
                    testCase2={"Number is not between 10 and 100"}
                    preMadeText={props.preMadeText}
                    input1={"11"}
                    input2={"101"}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}

        
                />
            </p>
            <div>
                <Link to={`/Lab2/4`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/6`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default Lab2a19View;
