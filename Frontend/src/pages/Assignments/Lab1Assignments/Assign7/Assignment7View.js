import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import { Link } from "react-router-dom";
import "../AssignmentView.css";
import { quizData } from "./QuizMethod";

function Lab1a7View(props) {
  return (
    <div className="mt-20">
      <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
        <h1 className="text-3xl font-bold mb-4">Methods</h1>
        <p className="mb-4">
          Methods, also known as functions, are a fundamental concept in
          programming. They allow us to group a set of instructions together,
          give them a name, and reuse them throughout our code.
        </p>
        <h2 className="text-2xl font-bold mb-4">Declaring Methods</h2>
        <p className="mb-4">
          To declare a method, we first need to specify its access modifier,
          return type, name, and parameters (if any). For example, to declare a
          method that returns an
          <code> int</code> value and takes two <code>int</code> parameters, we
          could write:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public static int addNumbers(int a, int b) {
        return a + b;
        }`}
          </code>
        </pre>
        <p className="mb-4">
          This declares a method named <code>addNumbers</code> that takes two
          integer parameters, adds them together, and returns the result.
        </p>
        <h2 className="text-2xl font-bold mb-4">Using a Method</h2>
        <p className="mb-4">
          Once we have declared a method, we can use it in our code by calling
          it. For example, we can call the <code>addNumbers</code> method we
          declared above like this:
        </p>
        <pre className="bg-gray-100 rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int result = addNumbers(3, 5);`}
          </code>
        </pre>
        <p className="mb-4">
          This will call the <code>addNumbers</code> method with the parameters
          3 and 5, and store the result (8) in the variable named{" "}
          <code>result</code>.
        </p>
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="mb-4">
          Methods are an important part of programming, as they allow us to
          break our code into smaller, reusable pieces. By using methods, we can
          write code that is easier to read, maintain, and debug.
        </p>
        <pre className="bg-gray-100 rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            System.out.println(myNumber);
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
        <Quiz quizData={quizData}/>
        <h2 className="text-2xl font-bold mb-4">An exercise</h2>
        <p>
          In this exercise you will create a Method called "Words" that takes 2
          Strings as parameters and returns a Sting containing both of the input
          strings.{" "}
        </p>
        To pass the exercise you need to:
        <p>
          <br></br>
          <p>1. Declare two Strings, "Hello" and "World" in the main method.</p>
          <p>2. Print the result of the method call to Words to the console.</p>
          <CodeRunner
            testCases={"HelloWorld"}
            preMadeText={props.preMadeText}
            input={"Hello"}
            shouldIncrement={true}
            thisLevel={props.thisLevel}
          />
        </p>
        <div>
          <Link to={`/Lab1/6`}>
          <button className="next-button text-black">Prev</button>
          </Link>
          <Link to={`/Lab1/8`}>
            <button className={props.disabled[1]} disabled={props.disabled[0]}>
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Lab1a7View;
