
import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import Quiz from "../../../../Components/Quiz/quiz";
import { quizData } from "./QuizBoolean";
import "../../Lab1Assignments/AssignmentView.css";
function Lab2a18View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Booleans</h1>
            <p className="mb-4">
           <code>Booleans</code> are a fundamental data type in Java used to represent logical values. 
            They can have one of two values: <code>true</code> or <code>false</code>. Booleans are often used in conditional 
            statements and loops to control program flow based on whether certain conditions are true or false
            </p>
            <h2 className="text-2xl font-bold mb-4">Important Boolean Facts</h2>

            <p>Booleans are represented by the <code> boolean keyword in Java.</code></p>
            <p> The default value for a boolean variable is <code>false.</code></p>
            <p> Boolean variables can be initialised to either true or false explicitly in the code.</p>
            <p> Comparisons between variables or values ​​can result in a boolean value.</p>
            <p> Boolean expressions are used in conditional statements like if, else, and switch statements.</p>
            <p> Boolean variables can be used to control loops, like while or do-while loops.</p>
            <h2 className="text-2xl font-bold mb-4">Boolean Example</h2>
            <p className="mb-4">
            Here are some examples of using booleans in Java:

 <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code className="text-sm font-mono">{ `boolean isStudent = true;
boolean isGraduating = false;

if (isStudent && isGraduating) {
    System.out.println("Congratulations, you're graduating!");
} else if (isStudent && !isGraduating) {
    System.out.println("Keep up the good work!");
} else {
    System.out.println("You're not a student.");
}

int x = 5;
int y = 10;

boolean isXGreaterThanY = x > y;
System.out.println("Is x greater than y? " + isXGreaterThanY);

boolean keepGoing = true;
int count = 0;

while (keepGoing) {
    count++;
    if (count > 10) {
        keepGoing = false;
    }
}

System.out.println("The loop ran " + count + " times.");
`}</code></pre>
In this example, we first declare two boolean variables: isStudent and isGraduating. 
We then use a conditional statement to check if both variables are true, if only isStudent is true, 
or if neither are true. We then compare two variables, x and y, using the greater-than operator, which
results in a boolean value. We print out the result of this comparison. Finally, we use a boolean variable,
 keepGoing, to control a while loop that counts how many times it runs. We set keepGoing to false after the loop 
 has run 10 times, and then print out the final count.

            </p>
        
           
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
     <Quiz quizData={quizData}/>
      </pre>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            Write a program that prompts the user to enter an integer and checks whether it is a prime number or not using a 
            boolean variable. If the number is prime, output "The number is prime", otherwise output "The number is not prime".
            </p>
            Remember:
            <p>
                <p>1. The code-checker is case sensitive.</p>
                <p>
                    2. Always use the semicolon <code>;</code> at the end of each
                    statement in Java.
                </p>
                <CodeRunner
                    testCases={"The number is prime"}
                    testCase2={"The number is not prime"}
                    preMadeText={props.preMadeText}
                    input1={"7"}
                    input2={"20"}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}

        
                />
            </p>
            <div>
                <Link to={`/Lab2/3`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/5`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default Lab2a18View;
