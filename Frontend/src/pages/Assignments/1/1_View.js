import CodeRunner from "../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";

function Lab1a1View(props) {
  return (
    <div className="max-w-3xl mx-auto text-left py-8 px-4 text-sans">
      <h1 className="text-3xl font-bold mb-4">
        Introduction to Variables in Java
      </h1>
      <p className="mb-4">
        In Java, a variable is a named container that stores a value. Variables
        are used to store data that can change during the execution of a
        program. They are a fundamental concept in programming and allow us to
        write more flexible and dynamic code.
      </p>
      <h2 className="text-2xl font-bold mb-4">Declaring Variables</h2>
      <p className="mb-4">
        To declare a variable in Java, we need to specify its type and name. For
        example, to declare a variable of type <code>int</code> with the name{" "}
        <code>myNumber</code>, we would write:
      </p>
      <pre className="bg-gray-100 rounded-md p-4 mb-4">
        <code className="text-sm font-mono">int myNumber;</code>
      </pre>
      <p className="mb-4">
        This declares a variable of type <code>int</code> with the name{" "}
        <code>myNumber</code>. We can also initialize the variable with a value
        at the time of declaration:
      </p>
      <pre className="bg-gray-100 rounded-md p-4 mb-4">
        <code className="text-sm font-mono">int myNumber = 42;</code>
      </pre>
      <p className="mb-4">
        This declares a variable of type <code>int</code> with the name{" "}
        <code>myNumber</code> and initializes it with the value <code>42</code>.
      </p>
      <h2 className="text-2xl font-bold mb-4">Using Variables</h2>
      <p className="mb-4">
        Once we have declared and initialized a variable, we can use it in our
        program. For example, we can print the value of <code>myNumber</code> to
        the console:
      </p>
      <pre className="bg-gray-100 rounded-md p-4 mb-4">
        <code className="text-sm font-mono">System.out.println(myNumber);</code>
      </pre>
      <p className="mb-4">
        This will print the value of <code>myNumber</code> (in this case,{" "}
        <code>42</code>) to the console.
      </p>
      <h2 className="text-2xl font-bold mb-4">An exercise</h2>
      <p>
        In this first exercise we will add two numbers of the type{" "}
        <code>int</code> and print it to the console using{" "}
        <code>System.out.println()</code>
      </p>
      To pass the exercise you need to
      <p>
        <p>1. Declare two variables which when added should equal 6</p>
        <p>2. Print the result to the console.</p>
        <CodeRunner
          testCases={6}
          preMadeText={props.preMadeText}
          input={3}
          incrementLevel={true}
        />
      </p>
      <div>
        <button className="next-button bg-[#a3d7cb] text-black font-sans">
          Previous
        </button>
        <button className={props.disabled[1]} disabled={props.disabled[0]}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Lab1a1View;
