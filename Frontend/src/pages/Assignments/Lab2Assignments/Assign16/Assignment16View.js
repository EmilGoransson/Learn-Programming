import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import { quizData } from "./QuizIOException";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab2a16View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                IOException
            </h1>
            <p className="mb-4" >
                <code>IOException</code> is an exception class in Java that <code>represents an input/output (I/O) exception</code>.
                 It is a checked exception, which means that it must be explicitly handled in your code or declared in the method's throws clause. 
            </p>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
            When working with <code>input/output operations</code>, such as reading from or writing to files, network sockets, 
            or other I/O streams, there is a possibility of encountering various errors. 
            These errors can include file not found, permission issues, unexpected end of file, interrupted I/O operations, and more. 
            <code>IOException is a general exception class </code>that encompasses these types of errors.
            The IOException class is part of the java.io package, 
            which provides classes and interfaces for performing input and output operations. 
            When an I/O operation encounters an error, <code>an instance of IOException is typically thrown to indicate the exceptional condition</code>.
            </p>

    
            <h2 className="text-2xl font-bold mb-4">Import points about IOException</h2>
            <p className="mb-4">
            <p> <code>Handling IOException</code>: As IOException is a checked exception, you must either catch it using a try-catch block or declare it in the method's throws clause. It's important to handle or propagate the exception appropriately to prevent program termination or unexpected behavior.</p>

           <p> <code>Common Subclasses</code>:IOException has several subclasses that represent specific types of input/output errors. Some commonly used subclasses include <code>FileNotFoundException</code> (for file-related errors), <code>SocketException</code> (for socket-related errors), <code>EOFException</code> (for end-of-file errors), and <code>InterruptedIOException </code>(for interrupted I/O operations).</p>

            <p><code>Exception Hierarchy</code>: IOException is a subclass of <code>Exception </code>and is part of the broader exception hierarchy in Java. This hierarchy includes more specific subclasses for different types of exceptions. By catching IOException, you can handle or differentiate I/O-related errors separately from other types of exceptions.</p>

          <p>  <code>Handling Resources</code>: When working with input/output operations, it's crucial to properly handle and close any resources, such as file streams or network connections, to prevent resource leaks. The try-with-resources statement introduced in Java 7 can help automatically close resources, including those that may throw IOException .</p>
          </p>
          <h2 className="text-2xl font-bold mb-4">Using IOException Example</h2>
        
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
  {` import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class IOExceptionExample {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            System.out.print("Enter a number: ");
            String input = reader.readLine();
            int number = Integer.parseInt(input);
            System.out.println("You entered: " + number);
        } catch (IOException e) {
            System.err.println("An error occurred during input/output operation: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.err.println("Invalid input format. Please enter a valid number.");
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                System.err.println("An error occurred while closing the reader: " + e.getMessage());
            }
        }
    }
}
`}
</code>

      </pre>
      <p className="mb-4">
      
      In this basic example, we use <code>BufferedReader </code>to read input from the console. We prompt the user to enter a number, read the input using <code>reader.readLine()</code>, and then attempt to parse it as an integer using <code>Integer.parseInt()</code>.

If an IOException occurs during the input/output operation (e.g., if there is an error reading the input), the catch block will handle it and display an error message.

Additionally, if the user enters an invalid input format (e.g., a non-numeric value), a <code>NumberFormatException</code> may occur. We catch this exception separately and display a specific error message.

In the <code>finally</code> block, we ensure that the <code> BufferedReader </code>is closed, even if an exception occurs during the reading process. Closing the <code>BufferedReader</code> is important to release system resources and prevent resource leaks.
            </p>
            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            
        
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="mb-4">
            <code>IOException</code> is an exception class in Java that represents input/output (I/O) errors. It is used to handle situations where there is an issue with reading from or writing to a source, such as a file, network connection, or input/output stream.

When performing I/O operations, various errors can occur, such as file not found, permission denied, unexpected end of file, or interrupted I/O operations. <code>IOException</code> is a class that encompasses these types of errors and allows you to handle them in your code.


            </p>
            
            
         
            <h2 className="text-2xl font-bold mb-4">An exercise</h2>
            <p>Write a Java program that prompts the user for their name and age, and then displays a personalized greeting along with the entered age.</p>
            <p>Instruction: </p>
               <p> 1.Import the necessary <code>classes</code> </p>
                    
                    <p>2. Create a <code>BufferedReader</code> object that wraps <code>System.in</code> to read the input
                    </p>
                    
                    <p>3. Implement the logic to prompt the input using <code>BufferedReader</code> object, the <code>println</code> line should be in this format <code>System.out.println("Hello, " + [bufferreaderobject]+ "!");</code>.
                    </p>
                   
                    <p>4. Close the <code>BufferedReader</code> object </p>
                   
                    <p>5. Run the program</p>
                    
                    <CodeRunner
                    testCases={"Hello, Ayah!"}
                    
                    preMadeText={props.preMadeText}
                    input1={"Ayah"}
                    
                    shouldIncrement={true}
                    thisLevel={props.thisLevel}
                />
                
               
  
            <div>
                <Link to={`/Lab2/1`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/3`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab2a16View;