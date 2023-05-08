import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";

function Lab1a1View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Printing</h1>
            <p className="mb-4">
                The <code>System.out.print()</code> method is a commonly used method in
                Java programming. It is used to display output to the console or
                standard output stream. The <code>System.out</code> part of the method
                refers to the standard output stream in Java, and the{" "}
                <code>print()</code> part is the method that actually prints the output
                to the console.
            </p>
            <h2 className="text-2xl font-bold mb-4">print and println</h2>
            <p className="mb-4">
                The <code>System.out.print()</code> method differs from the{" "}
                <code>System.out.println()</code> method in that <code>print()</code>{" "}
                does not append a newline character at the end of the output, while{" "}
                <code>println()</code> does. This means that if you use{" "}
                <code>print()</code>, the output will continue on the same line, while{" "}
                <code>println()</code> will start a new line after the output is
                displayed.
            </p>
            <p>
                Here is an example to illustrate the difference between the two methods:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`System.out.print("Hello ");
System.out.print("World");

Output:
Hello World
            `}
        </code>
      </pre>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`System.out.println("Hello ");
System.out.println("World");

Output:
Hello
World
            `}
        </code>
      </pre>
            <p className="mb-4">
                It is important to note that <code>print()</code> and{" "}
                <code>println()</code> can be used to print not just text, but also{" "}
                <code>variables</code>, <code>expressions</code>, and other data types
                in Java.
            </p>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
                In this first exercise we will simply print "Hello World" to the console
                using <code>System.out.print()</code> method.
            </p>
            Remember:
            <p>
                <p>1. The code-checker is case sensetive.</p>
                <p>
                    2. You should write the print statment in the <code>main</code>{" "}
                    method.
                </p>
                <p>
                    3. Always use the semicolon <code>;</code> at the end of each
                    statement in Java.
                </p>
                <CodeRunner
                    testCases={"Hello World"}
                    preMadeText={props.preMadeText}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Labs`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab1/2`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab1a1View;
