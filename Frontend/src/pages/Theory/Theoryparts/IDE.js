import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function IDE(props) {
  return (
    <div>
      <div>
        <RightSideBar></RightSideBar>
        <Sidebar></Sidebar>
        <Progress />
        <PinnedList />
        <TopBar></TopBar>
        <Scrollingbar />
      </div>
      <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
        <h1 className="text-3xl font-bold mb-4">Printing</h1>
        <p className="mb-4">
          The <code>System.out.print()</code> method is a commonly used method
          in Java programming. It is used to display output to the console or
          standard output stream. The <code>System.out</code> part of the method
          refers to the standard output stream in Java, and the{" "}
          <code>print()</code> part is the method that actually prints the
          output to the console.
        </p>
        <h2 className="text-2xl font-bold mb-4">print and println</h2>
        <p className="mb-4">
          The <code>System.out.print()</code> method differs from the{" "}
          <code>System.out.println()</code> method in that <code>print()</code>{" "}
          does not append a newline character at the end of the output, while{" "}
          <code>println()</code> does. This means that if you use{" "}
          <code>print()</code>, the output will continue on the same line, while{" "}
          <code>println()</code> will start a new line after the output is
          displayed.
        </p>
        <p>
          Here is an example to illustrate the difference between the two
          methods:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`System.out.print("Hello ");
System.out.print("World");

Output:
Hello World
            `}
          </code>
        </pre>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`System.out.println("Hello ");
System.out.println("World");

Output:
Hello
World
            `}
          </code>
        </pre>
        <p className="mb-4">
          It is important to note that <code>print()</code> and{" "}
          <code>println()</code> can be used to print not just text, but also{" "}
          <code>variables</code>, <code>expressions</code>, and other data types
          in Java.
        </p>
        <h2 className="text-2xl font-bold mb-4">An exercise</h2>
        <p>
          In this first exercise we will simply print "Hello World" to the
          console using <code>System.out.print()</code> method.
        </p>
        Remember:
        <p>
          <p>1. The code-checker is case sensetive.</p>
          <p>
            2. You should write the print statment in the <code>main</code>{" "}
            method.
          </p>
          <p>
            3. Always use the semicolon <code>;</code> at the end of each
            statement in Java.
          </p>
        </p>
      </div>
    </div>
  );
}

export default IDE;
