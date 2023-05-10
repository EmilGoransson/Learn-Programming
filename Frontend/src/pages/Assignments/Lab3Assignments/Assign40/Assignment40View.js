import CodeRunner from "../../../../Components/CodeRunner/Presenter/codeRunnerPresenter";
import Quiz from "../../../../Components/Quiz/quiz";
import React from "react";
import {Link} from "react-router-dom";
import "../../Lab1Assignments/AssignmentView.css";
import {quizData} from "./QuizThis";

function Lab3a40View(props) {
    return (
        <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
                <h1 className="text-3xl font-bold mb-4">Introduction to Java Standard Libraries</h1>
                <p className="mb-4">
                In Java, the standard libraries, also known as the Java Class Library or Java API (Application Programming Interface), 
                are pre-built collections of classes and methods that provide a wide range of functionality to simplify common programming 
                tasks. These libraries come bundled with the Java Development Kit (JDK) and are readily available for developers to use in 
                their Java programs.
            <p></p>
                </p>
                <p className="mb-4">
           </p>
                <p className="mb-4">
               
                </p>

                <p className="mb-4">
            
                </p>
                <h2 className="text-2xl font-bold mb-4"> Java Standard Libraries - Key Categories:</h2>
                <p className="mb-4">
                The Java standard libraries cover various categories, each serving a specific purpose. Here are some of the most important categories:
<br></br><br></br>
<a href="https://docs.oracle.com/javase/8/docs/api/java/lang/package-summary.html" target="_blank">java.lang</a>:

Provides fundamental classes and utilities that are automatically imported into every Java program.
Contains classes such as String, Object, Math, and System.
<br></br><br></br>
<a href="https://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html" target="_blank">java.util</a>: 

Offers utility classes for data structures, collections, input/output, and more.
Contains classes such as ArrayList, HashMap, Scanner, and Date.
<br></br><br></br>
<a href="https://docs.oracle.com/javase/8/docs/api/java/io/package-summary.html" target="_blank">java.io</a>: 

Provides classes for handling input and output operations.
Includes classes such as File, InputStream, OutputStream, and PrintWriter.
<br></br><br></br>
<a href="https://docs.oracle.com/javase/8/docs/api/java/net/package-summary.html" target="_blank">java.net</a>: 

Enables network programming and communication over the internet.
Includes classes such as URL, URLConnection, Socket, and ServerSocket.
<br></br><br></br>
<a href="https://docs.oracle.com/javase/8/docs/api/java/awt/package-summary.html" target="_blank">java.awt</a> and 
<a href="https://docs.oracle.com/javase%2F7%2Fdocs%2Fapi%2F%2F/javax/swing/package-summary.html" target="_blank"> javax.swing</a>: 
Used for creating graphical user interfaces (GUIs) in Java applications.
Provides classes for windows, buttons, menus, and other GUI components.
<br></br><br></br>
<a href="https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html" target="_blank">java.time</a>: 

Introduced in Java 8, it offers classes for working with dates, times, durations, and time zones.
Includes classes such as LocalDate, LocalTime, Instant, and DateTimeFormatter.
</p>

<h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
                <p className="mb-4">

                The Java standard libraries are a vital resource for Java developers, offering a wide range of ready-to-use classes and methods. These libraries simplify common programming tasks, allowing developers to focus on implementing application-specific logic rather than reinventing the wheel. By leveraging the power of the standard libraries, developers can save time, improve productivity, and build robust Java applications efficiently.

As you continue your journey in Java programming, familiarizing yourself with the Java standard libraries and exploring their documentation will be invaluable in becoming a proficient Java developer.
                </p>
               
<h2 className="text-2xl font-bold mb-4">A Quiz</h2>
            <Quiz quizData={quizData}/>
            

       
                <div>
                    <Link to={`/Lab3/11`}>
                        <button className="next-button text-black">Prev</button>
                    </Link>
                    <Link to={`/Lab3/13`}>
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

export default Lab3a40View;
