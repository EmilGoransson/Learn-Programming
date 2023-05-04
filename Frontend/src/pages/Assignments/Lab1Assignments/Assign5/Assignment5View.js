import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";


function Lab1a5View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                Operations
            </h1>
            <p className="mb-4">
                In Java, an operation is an action that is performed on one or more values or variables, resulting in a
                new value.
                There are several types of operations in Java, including arithmetic operations, comparison operations,
                and
                logical operations.
            </p>
            <h2 className="text-2xl font-bold mb-4">Arithmetic Operations</h2>
            <p className="mb-4">
                Java supports basic arithmetic operations such as addition (<code>+</code>), subtraction (<code>-</code>),
                multiplication (<code>*</code>), division (<code>/</code>), and modulus (<code>%</code>).
                These operations are performed on numeric data types such as int, double, float, etc. For example:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`int a = 10;
int b = 5;
int c = a + b; // result is 15`}
        </code>
      </pre>

            <h2 className="text-2xl font-bold mb-4">Comparison Operations</h2>
            <p className="mb-4">
                Comparison operations are used to compare two values and return a Boolean value (true or false) based on
                the comparison.
                Java supports comparison operators such as equal to (<code>==</code>), not equal to (<code>!=</code>),
                greater than (<code>&gt;</code>), less than (<code>&lt;</code>),
                greater than or equal to (<code>&gt;=</code>), and less than or equal to (<code>&lt;=</code>). For
                example:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`int a = 10;
int b = 5;
boolean result = (a > b); // result is true`}
        </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Logical Operations</h2>
            <p className="mb-4">
                Logical operations are used to evaluate Boolean expressions and return a Boolean value based on the
                evaluation.
                Java supports logical operators such as AND (<code>&&</code>), OR (<code>||</code>), and NOT
                (<code>!</code>). For example:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`boolean a = true;
boolean b = false;
boolean result = (a && b); // result is false`}
        </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="mb-4">
                It is important to understand the different types of operations and how to use them effectively in your
                code.
            </p>
            {/*TODO: gör kodfråga*/}
            <h2 className="text-2xl font-bold mb-4">Scanner in our exercises</h2>
            <p>
                To pass this, and following, exercises you need to understand how to use the <code>Scanner</code> class.
                The exercises will
                a pre-defined Scanner called "scanner" this will be the input. To declare a variable you will need to
                write:
            </p>
            <pre className="pre-Code rounded-md p-4 mb-4">
        <code className="text-sm font-mono">scanner.next[Datatype];</code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
                In this exercise print the <code>int</code> given from scanner to the console.
            </p>
            <p>
                <CodeRunner
                    testCases={1}
                    testCase2={2}
                    preMadeText={props.preMadeText}
                    input1={1}
                    input2={2}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab1/4`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab1/6`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab1a5View;