import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import { quizData } from "./QuizBufferReader";
import Quiz from "../../../../Components/Quiz/quiz";

function Lab2a15View(props) {
    return (
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">
                Buffered reader
            </h1>
            <p className="mb-4" >
                In Java, the <code> BufferedReader</code>  class is a part of the <code>java.io</code> package and
                provides efficient of text from character input streams. It extends the <code> Reader</code> class and adds
                buffering capabilities, whick enhance the performance of reading operations by reducing the number of I/O interactions
                with the underlying stream.
            </p>
            <h2 className="text-2xl font-bold mb-4">Overview and Advantages</h2>
            <p className="mb-4">
            The BufferedReader class adds a buffering feature for reading character-based input streams. It works by wrapping around an 
            existing Reader object like <code> BufferedReader</code> class is a part of the <code>FileReader</code> or 
            <code> BufferedReader</code> class is a part of the <code> InputStreamReader</code>. This wrapping reduces the number of times we have to interact with the underlying
            stream,making our reading operatiosn much more efficient. 
            </p>

            <p>
            One of the key <code>advantages</code> of using BufferedReader is its ability to improve performance. By employing a buffering mechanism, it reduces the overhead of frequent disk or network read operations. How does it achieve this? Well, it stores a larger chunk of data in memory, which enables faster and more efficient reading of text.

When it comes to handling large volumes of text data, BufferedReader truly shines. It minimizes the number of costly I/O operations, making it particularly useful for processing extensive text files. By doing so, it ensures a smooth and efficient reading experience, saving valuable system resources
            </p>
            <h2 className="text-2xl font-bold mb-4">Methods provided by BufferedReader</h2>
            <p className="mb-4">
            <p> <code>read()</code>: This method reads a single character from the input stream and returns it as an integer value. You can cast it to a char type if needed.</p>

           <p> <code>read(char[] cbuf)</code>: With this method, you can read characters into an array and get the number of characters read as the return value. It's useful when you want to process multiple characters at once.</p>

            <p><code>readLine()</code>: If you need to read an entire line of text from the input stream, this method is your go-to. It reads the line as a String and returns it. If the end of the stream is reached, it returns null.</p>

          <p>  <code>skip(long n)</code>: When you want to skip a specific number of characters from the input stream, this method comes in handy. It discards the specified number of characters and returns the actual number of characters skipped.</p>
          </p>
          <h2 className="text-2xl font-bold mb-4">Using BufferedReader Example</h2>
        
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
  {`import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}`}
</code>

      </pre>
      <p className="mb-4">
      In this example, We import the necessary <code>classes: BufferedReader, FileReader, and IOException.</code>

Within the <code>main()</code>main method, we create a BufferedReader object named reader. It wraps around a FileReader object, which takes the file name ("example.txt") as a parameter.

We use a try-with-resources statement to automatically close the BufferedReader after we're done with it. This ensures proper resource management.

Inside the try block, we declare a String variable named line to store each line of text read from the file.

We use a while loop to repeatedly read lines from the file using the <code>readLine()</code> method. The loop continues until <code>readLine()</code> returns null, indicating the end of the file.

Within the loop, we simply print each line to the console using System.out.println(line).

If any IO exception occurs, it is caught in the catch block, and the stack trace is printed.
            </p>
            <h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            
        
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="mb-4">
            BufferedReader is a class in Java that provides buffering functionality for reading character-based input streams. By wrapping around existing Reader objects, it improves reading performance by reducing the number of I/O interactions with the underlying stream. It is particularly useful for handling large volumes of text data and offers methods for reading characters, lines of text, and skipping characters.
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
                <Link to={`/Labs/`}>
                    <button className="next-button text-black">Prev</button>
                </Link>
                <Link to={`/Lab2/2`}>
                    <button className={props.disabled[1]} disabled={props.disabled[0]}
                            onClick={() => window.scrollTo(0, 0)}>
                        Next
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Lab2a15View;