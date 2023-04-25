import React from "react";
import CodeRunner from "../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Button from "react-bootstrap/Button";
import useLevelStore from "../../Model/frontEndStore";

//TODO: FIX SO THAT THE BUTTON IS GRAY IF DISABELED & check that it works!!, test so that current implementation works.

function Lab1a1() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab1 = useLevelStore((state) => state.levelsLab1);
  const thisLevel = 1;
  const [disabled, setDisabled] = React.useState(isDisabeled());

  function isDisabeled() {
    if (thisLevel > currentLevel) {
      return true;
    }
  }
  const PreMadeText = `
class Progman
{  
    public static void main(String[] args) {
        //declare two variables of the type int
        
        //print the sum of the two variables
        
    }
}`;
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
          preMadeText={PreMadeText}
          input={3}
          incrementLevel={true}
        />
      </p>
      <div>
        <button className="next-button bg-[#a3d7cb] text-black font-sans">
          Previous
        </button>
        <button
          className="next-button bg-[#a3d7cb] text-black font-sans"
          disabled={disabled}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Lab1a1;
