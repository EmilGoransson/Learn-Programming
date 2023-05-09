import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizStringBuilder";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab3a31View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">Stringbuilder</h1>
            <p className="mb-4">
            In Java, StringBuilder is a class that provides a more efficient way to manipulate 
            strings than using the traditional String class. StringBuilder is designed for situations 
            where you need to make repeated modifications to a string, such as concatenating multiple 
            strings or replacing characters.
            </p>
            <h2 className="text-2xl font-bold mb-4"> Using Stringbuilder</h2>
            <p className="mb-4">
            To use StringBuilder in your Java code, you first need to create a new instance of 
            the StringBuilder class:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`StringBuilder sb = new StringBuilder();`}
        </code>
      </pre>
      <p classname="mb-4"> Once you have an instance of StringBuilder, you can use its methods to 
      modify the string it contains. Some of the most commonly used methods include:
      </p>
            <ul className="list-disc list-inside">
                     <li><span className="font-medium"><code>append():</code></span> Adds a 
                     string to the end of the StringBuilder.</li>
                     <li><span className="font-medium"> <code>insert(): </code></span> Inserts a 
                     string at a specified position in the StringBuilder.</li>
                    <li><span className="font-medium"><code>delete():</code></span> Removes a range 
                    of characters from the StringBuilder.</li>
                    <li><span className="font-medium"><code>replace():</code></span> Replaces a range of 
                    characters in the StringBuilder with a new string.</li>
                </ul>
                <br></br>
                <p classname="mb-4">
                Here's an example that demonstrates how to use some of these methods:
                </p>
                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
        <code className="text-sm font-mono">
          {`StringBuilder sb = new StringBuilder("Hello, ");
sb.append("world!");
sb.insert(7, "Java ");
sb.replace(0, 5, "Hi");
System.out.println(sb.toString());`}
        </code>
      </pre>
      <p className = "mb-4">
      In this example, we create a new StringBuilder object with the initial string <code>"Hello, ". </code>
      We then append the string <code>"world!"</code> to the end of it, insert the string <code>"Java " </code>
      at position 7 (just before <code>"world!"</code>), replace the first five characters (i.e., <code>"Hello"</code>) with <code>"Hi"</code>, 
      and finally print the resulting string <code>("Hi, Java world!")</code>.
      </p>

      <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
            <p className="mb-4">
            StringBuilder is a useful class in Java for manipulating strings efficiently. By using its methods,
             you can concatenate, insert, delete, and replace strings in a more flexible and performant way than 
             using the String class directly. If you're working with large strings or need to make frequent 
             modifications to a string, consider using StringBuilder in your Java code.
            </p>


            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <br></br>

            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
                In this first exercise we will simply print a String to the console which will be built
                with the help of Stringbuilder. In the process of doing this we will practice the different
                ways one can manipulate a string with Stringbuilder. So follow the comments in the code below
                and you should pass this coding assignment!
            </p>
              <p>Remember to use <code>System.out.print()</code> for the print statement! </p>
            <p>
                <CodeRunner
                    testCases={"Hi World!"}
                    testCase2={"Hi Java!!"}
                    preMadeText={props.preMadeText}
                    input1={"World"}
                    input2={"Java!"}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab3/2`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab3/4`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab3a31View;
