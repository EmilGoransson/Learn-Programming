import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import {quizData} from "./QuizNullQuiz";

function Lab3a38View(props) {
    return (
        <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
                <h1 className="text-3xl font-bold mb-4">What is Null?</h1>
                <p className="mb-4">
                In Java, null is a special keyword that represents the absence of any object value. 
                It is often used to denote that a reference variable is not referring to any object.
            <p></p>
                </p>
                <p className="mb-4">
           </p>
                <p className="mb-4">
               
                </p>

                <p className="mb-4">
            
                </p>
                <h2 className="text-2xl font-bold mb-4"> How to use Null</h2>
                <p className="mb-4">
                When you declare a variable of an object type, such as String, Integer, or a custom class, 
                you are creating a reference variable. This variable does not actually hold the object itself, 
                but rather a reference or a memory address to where the object is stored in memory.
<br></br><br></br>
                If you do not initialize the reference variable with an object, it will have the default value of null. 
                When you try to use this reference variable to access an object method or field, Java will throw a NullPointerException.
<br></br><br></br>
                It is important to handle null values properly in your code, either by checking for null before accessing the object or 
                by using conditional statements to handle different cases.

Here is an example:
<br></br><br></br>
                For example, consider the following code:
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`// declaring a String reference variable and initializing it with null
String myString = null; 

if (myString != null) {
   // do something with myString
} else {
   // handle the null case
}
`}
          </code>
        </pre>
        In this example, we check if myString is not null before doing anything with it. If it is null, we handle the null case accordingly.
        <br></br>
        <br></br>
                </p>
                <h2 className="text-2x font-bold mb-4">Null Pointer Exceptions</h2>
                <p>
                A null pointer exception is a type of runtime error that occurs when a program tries to use a null object or reference, meaning it does not point to any object in memory.
                A null pointer exception occurs when a program tries to access a member of an object or an element of an array that is null. It can also occur when a method returns null and the program tries to access a member of the returned object.
                <br></br><br></br>Null pointer exceptions can be prevented by initializing variables and objects to a non-null value, checking for null values before accessing an object or element of an array, and using null-safe operations such as the null-conditional operator (?.) in Java 8 or later.
                <br></br><br></br>In Java, null pointer exceptions are unchecked exceptions, meaning they are not required to be handled explicitly by the programmer. However, it is good practice to handle them to prevent unexpected program behavior. This can be done by adding try-catch blocks around the code that may cause null pointer exceptions, or by using conditional statements to check for null values before accessing objects or elements of arrays.
                Here is an example of code that can cause a null pointer exception:
<br></br><br></br>
For example, consider the following code:
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str = null;
int length = str.length(); // This will cause a null pointer exception
`}
          </code>
        </pre>
        To prevent this error, the code should be modified to check for null before accessing the length of the string:

        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str = null;
if (str != null) {
    int length = str.length();
}
`}
          </code>
        </pre>
               </p>
                <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                <p className="mb-4">
                In Java, null is a special value that represents the absence of a value. 
                It can be assigned to any reference type variable. A null pointer exception 
                is an error that occurs when you try to access an object that is not initialized or set to null. 
                This means that you are trying to use an object reference that does not point to any object in memory, 
                resulting in a runtime error. It is a common mistake that can be easily avoided by checking if the 
                reference is null before using it.
</p>
<h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            <br></br>
                <h2 className="text-2xl font-bold mb-4">Exercise: Handling null</h2>
                <p>

                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <p>
            Handling null in Java is important to prevent user errors and unexpected behavior of <br></br>certain data structures e.g., Linked lists,
            Binary Trees, Queues, etc. Therefore, it <br></br>is important for all developers to know how to handle null. 
<br></br><br></br>
            In this assignment do the following:
            <br></br><br></br>
            1. Initiate a String variable called name to be initialized to scanner.next(); inside <br></br>the try statement
            <br></br><br></br>
            2. Create an int variable called name_length and store name.length(); in name_length <br></br>inside the try statement
            <br></br><br></br>
            3. Print the name length inside the try statement
            <br></br><br></br>
            4. In the catch block, print "Null Pointer Exception!"
</p>     </pre>

       
                    <CodeRunner
                        testCases={4}
                        testCase2={"Null Pointer Exception!"}
                        preMadeText={props.preMadeText}
                        input1={"John"}
                        input2={null}
                        shouldIncrement={true}
                        
                        thisLevel={props.thisLevel}
                    />
                </p>
                <div>
                    <Link to={`/Lab3/9`}>
                        <button className="next-button text-black">Prev</button>
                    </Link>
                    <Link to={`/Lab3/11`}>
                        <button className={props.disabled[1]} disabled={props.disabled[0]}
                                onClick={() => window.scrollTo(0, 0)}>
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Lab3a38View;
