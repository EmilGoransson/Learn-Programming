import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../AssignmentView.css";
import {quizData} from "./QuizMethod";
import Quiz from "../../../../Components/Quiz/quiz";


function Lab1a6View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                Classes
            </h1>
            <p className="mb-4">
                A class is a blueprint for creating objects. A class defines the properties and behaviors of an object,
                and objects are instances of a class.
            </p>
            <h2 className="text-2xl font-bold mb-4">Syntax</h2>
            <p className="mb-4">
                A class in Java is defined using the <code>class</code> keyword followed by the name of the class. The
                body of the class
                is enclosed in curly braces <code>{}</code>. Here's an example of a class definition
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  // class body goes here
}`}
          </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Properties</h2>
            <p className="mb-4">
                A class can have properties, which are variables that store data. Properties are declared within the
                class body, outside of
                any method definitions. Here's an example of a class with two properties:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  int x = 5;
  String name = "John";
}`}
          </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Methods</h2>
            <p className="mb-4">
                A class can also have methods, which are functions that perform actions. Methods are declared within the
                class body, after the
                property declarations
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  int x = 5;
  String name = "John";
  
  public void printName() {
    System.out.println(name);
  }
}`}
          </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Constructors</h2>
            <p className="mb-4">
                A class can have a constructor, which is a special method that is called when an object is created. The
                constructor initializes
                the object's properties. Here's an example of a class with a constructor:
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  int x;
  
  public MyClass(int x) {
    this.x = x;
  }
}`}
          </code>
      </pre>
            <h2 className="text-2xl font-bold mb-4">Access modifiers</h2>
            <p>
                Classes and their properties and methods can have access modifiers, such as <code>public</code>,
                <code>private</code>, and <code>protected</code>, that determine
                their visibility to other classes. Public members can be accessed by any class, private members can only
                be accessed by the
                same class, and protected members can be accessed by subclasses and classes in the same package.
            </p>

            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p>
                Classes are an important part of object-oriented programming in Java, and understanding how to create
                and use classes
                is essential for writing effective Java programs.
            </p>
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>
            Your task is to create a Java class called Progman that represents a progman object, and to implement the 
            following method: <code>getAge()</code> that returns the age of the progman as an integer.
            The Progman class should have a private instance variable for the age and a constructor that takes 
            this as parameter.
            </p>
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);  
    //print the input given from scanner
          
}`}
          </code>
      </pre>
            <p>
                <CodeRunner
                    testCases={33}
                    testCase2={56}
                    preMadeText={props.preMadeText}
                    input1={33}
                    input2={56}
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
            </p>
            <div>
                <Link to={`/Lab1/5`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab1/7`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab1a6View;