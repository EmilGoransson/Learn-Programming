import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import { Link } from "react-router-dom";
import "./Assignment3View.css";


function Lab1a3View(props) {
  return (
    <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
      <a onClick={props.addPinned} style={{ cursor: "pointer" }}>
        {props.svg}
      </a>
      <h1 className="text-3xl font-bold mb-4">
        Strings
      </h1>
      <p className="mb-4">
      a string is a sequence of characters that is used to represent text. Strings in Java are 
      represented by the <code>String</code> class, which provides many methods for manipulating strings. 
      Here are some important things to know about strings in Java.
      </p>
      <h2 className="text-2xl font-bold mb-4">Creating a String</h2>
      <p className="mb-4">
      You can create a String in Java by enclosing the text in double quotes.
      The "str" part in the example below is simply a name, you can name the String whatever is appropriate.   
      </p>
      <pre className="pre-Code rounded-md p-4 mb-4">
        <code className="text-sm font-mono">String str = "Hello, World!";</code>
      </pre>
      <h2 className="text-2xl font-bold mb-4">String Concatenation</h2>
      <p className="mb-4">
        You can concatenate strings in Java using the + operator. 
      </p>
      <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str = "Hello, " + "World!";
// This will result in 1 String:
'Hello, World!'`}
          </code>
        </pre>
      <h2 className="text-2xl font-bold mb-4">String Length</h2>
      <p className="mb-4">
        You can find the length of a string using the <code>length()</code> method. 
      </p>
      <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str = "Hello, " + "World!";
int len = str.length();

// This will result in len being equal to 13`}
          </code>
        </pre>
      <h2 className="text-2xl font-bold mb-4">String Comparison</h2>
      <p className="mb-4">
        You can compare two strings in Java using the <code>equals()</code> method or 
        the <code>compareTo()</code> method. 
      </p>
      <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str1 = "Hello";
String str2 = "World";
boolean result = str1.equals(str2);

// The Boolean statment (True or False) will be result in being equal to false`}
          </code>
        </pre>
      <p className="mb-4">
      String Manipulation: The String class provides many methods for manipulating strings, such 
      as <code>charAt()</code>, <code>substring()</code>, <code>indexOf()</code>, <code>replace()</code>, 
      and <code>toUpperCase()</code>.
      </p>
      <p className="mb-4">
      It's important to note that strings in Java are immutable, which means that once a string is created, 
      it cannot be changed. However, you can create a new string that contains the desired changes.
      </p>
      <h2 className="text-2xl font-bold mb-4">An exercise</h2>
      <p>
        In this exercise we will concatenate two Strings{" "}
      </p>
      To pass the exercise you need to
      <p>
        <p>1. Declare two Strings named str1 and str2</p>
        <p>2. st1 should equal "Merge ".</p>
        <p>2. st2 should equal "conflict".</p>
        <CodeRunner
          testCases={"Merge conflict"}
          preMadeText={props.preMadeText}
          shouldIncrement={true}
          thisLevel={props.thisLevel}
        />
      </p>
      <div>
        <Link to={`/Lab1/2`}>
          <button className="next-button text-black">Prev</button>
        </Link>
        <Link to={`/Lab1/4`}>
          <button className={props.disabled[1]} disabled={props.disabled[0]}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Lab1a3View;

/* The quiz 

What is a string in Java?
A) A sequence of numbers
B) A sequence of characters
C) A data type that stores Boolean values
D) A type of loop
Answer: B

Which operator is used for string concatenation in Java?
A) *
B) %
C) +
D) -
Answer: C

What is the length of the string "Java Programming"?
A) 13
B) 14
C) 15
D) 16
Answer: D
kuggis: med 15,16,17,18

What is the output of the following code?
vbnet
Copy code
String str1 = "Java";
String str2 = "Java";
String str3 = new String("Java");
System.out.println(str1 == str2);
System.out.println(str1.equals(str3));
A) true false
B) true true
C) false false
D) false true

Answer: B

Explanation: The first println() statement will output true because str1 and str2 refer to the same string literal, so they are equal. The second println() statement will output true because the equals() method compares the contents of the strings, not their references, and str1 and str3 have the same contents.
*/