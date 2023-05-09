import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizSwitch";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab3a41View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Switch</h1>
            <p className="mb-4">
            Switch statements are a type of control statement in Java that allows the program to
             execute different blocks of code based on the value of a variable or an expression. 
             They provide a way to write more concise and readable code in situations where multiple
              if-else statements would be required otherwise.
            </p>
            <h2 className="text-2xl font-bold mb-4"> Syntax </h2>
            <p className="mb-4">
            The syntax of a Switch statement in Java is as follows:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`switch (variable/expression) {
   case value1:
      // code to be executed if variable/expression matches value1
      break;
   case value2:
      // code to be executed if variable/expression matches value2
      break;
   ...
   default:
      // code to be executed if variable/expression does not match any of the cases
      break;
}`}
        </code>
      </pre>
      <p classname="mb-4"> Here, the variable/expression is evaluated, 
      and the code block corresponding to the first matching case label is executed. 
      The break statement is used to terminate each case block and prevent fall-through 
      into the next one. If none of the cases match, the code block under default is executed.
      </p>

      <h1 className="text-3xl font-bold mb-4">Rules and limitations of Switch</h1>
            <p className="mb-4">
            Switch statements can be used with byte, short, int, char, and enumerated types 
            in Java. They cannot be used with long, float, double, boolean, or String types.
            </p>
            <p className="mb-4">
            Switch statements are especially useful when there are many possible values for 
            the variable or expression being evaluated. They can help make code more 
            readable and efficient, as they allow the program to jump directly to the 
            relevant code block instead of evaluating each if statement in turn.
            </p>
            <p className="mb-4">
            Here are some important things to keep in mind when using Switch statements in Java:
            </p>
            <ul className="list-disc list-inside">
                     <li> Each case label must be a constant expression 
                     that evaluates to a value compatible with the type of the variable being tested.</li>
                     <li> The <code>break</code> statement is required after each case 
                     block to prevent fall-through into the next one.</li>
                    <li>The <code>default</code> case is optional, but recommended. It should be 
                    used to handle any values that do not match any of the other cases.</li>
                </ul>
                <br></br>

                <h2 className="text-2xl font-bold mb-4"> Example of Switch Statement </h2>
            <p className="mb-4">
            Here's an example of a Switch statement that uses an enumerated type to determine 
            which day of the week it is and print a message accordingly:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`public enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

public class SwitchExample {
    public static void main(String[] args) {
        Day today = Day.MONDAY;

        switch (today) {
            case MONDAY:
                System.out.println("Today is Monday");
                break;
            case TUESDAY:
                System.out.println("Today is Tuesday");
                break;
            case WEDNESDAY:
                System.out.println("Today is Wednesday");
                break;
            case THURSDAY:
                System.out.println("Today is Thursday");
                break;
            case FRIDAY:
                System.out.println("Today is Friday");
                break;
            case SATURDAY:
                System.out.println("Today is Saturday");
                break;
            case SUNDAY:
                System.out.println("Today is Sunday");
                break;
            default:
                System.out.println("Invalid day");
                break;
        }
    }
}
`}
        </code>
      </pre>
      <p classname="mb-4"> 
      In this example, we declare an enumerated type called <code>Day</code> that represents 
      the days of the week. We then declare a variable called <code>today</code> and assign it 
      the value <code>Day.MONDAY.</code> We use a Switch statement to determine the value of <code>today</code> and 
      execute the corresponding code block.
      </p>


      <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
            <p className="mb-4">
            In conclusion, Switch statements are an important control structure in Java that allow 
            programs to execute different code blocks based on the value of a variable or expression. 
            They can help make code more concise and readable, and are especially useful when 
            dealing with multiple possible values. By following some basic guidelines, you can 
            use Switch statements effectively in your Java programs.
            </p>


            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <br></br>

            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            Write a program that takes a number as input and outputs a message based 
            on the number using a switch statement. The program should do the following:
            </p>
            <p>
            1. If the number is 1, output "You selected option 1."
            </p>
            <p>
                2. If the number is 2, output "You selected option 2."
            </p>
            <p>
                3. If the number is 3, output "You selected option 3."
            </p>
            <p>
                4. If the number is not 1, 2, or 3, output "Invalid option selected."
            </p>
            <p>
            Your program should be implemented in a Java class named Progman. It should have a 
            public static method named main which should read an int from the scanner and  
            pass it to a method named selectOption.
             The selectOption method should use a switch statement to determine which message to output based on 
             the input number, and then print that message to the console.
            </p>
              <p>Remember to use <code>System.out.print()</code> for the print statement and also to
              use a Switch statement! </p>
            <p>
                <CodeRunner
                    testCases={"You selected option 2."}
                    testCase2={"Invalid option selected."}
                    preMadeText={props.preMadeText}
                    input1={2}
                    input2={10}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab3/12`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab3/14`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab3a41View;
