import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t8(props) {
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
      <div className="mt-20">
        <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
          <a onClick={props.addPinned} style={{ cursor: "pointer" }}>
            {props.svg}
          </a>
          <h1 className="text-3xl font-bold mb-4">For-loop</h1>
          <p className="mb-4">
            In Java, a for loop is a control flow statement that allows you to
            execute a block of code repeatedly based on a condition. It is
            useful when you need to iterate over a fixed number of times or when
            you need to perform a task for each item in a collection.
          </p>
          <h2 className="text-2xl font-bold mb-4">Syntax</h2>
          <p className="mb-4">
            The basic syntax of a for loop in Java is as follows:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`for (initialization; condition; update) {
    //code to be executed
}`}
            </code>
          </pre>
          <p className="mb-4">Here's what each of these components means:</p>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-medium">Initialization:</span> This is where
              you initialize the loop variable. You can declare and initialize
              multiple variables separated by commas. This code is executed only
              once, at the beginning of the loop.
            </li>
            <li>
              <span className="font-medium">Condition:</span> This is the
              condition that is evaluated at the beginning of each loop
              iteration. If the condition is true, the loop body is executed. If
              the condition is false, the loop terminates.
            </li>
            <li>
              <span className="font-medium">Update:</span> This is the code that
              is executed at the end of each loop iteration. It is usually used
              to update the loop variable. This code is executed after the loop
              body, before the condition is checked again.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">
            Example 1: Counting from 1 to 10
          </h2>
          <p className="mb-4">
            Let's take a look at an example. Suppose you want to print the
            numbers from 1 to 10. You can do this using a for loop like this:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`for (int i = 0; i <= 10; i++) {
    System.out.println(i);
}`}
            </code>
          </pre>
          <p className="mb-4">
            In this example, we initialize the loop variable <code>i</code> to
            1, set the condition to continue as long as <code>i</code> is less
            than or equal to 10, and update <code>i</code> by incrementing it by
            1 after each iteration. The code inside the loop body prints the
            value of
            <code>i</code> to the console.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Example 2: Printing characters in a string
          </h2>
          <p className="mb-4">
            You can also use a for loop to iterate over a string and perform an
            action on each character. For example, suppose you have a string and
            you want to print each character. You can do this using a for loop
            like this
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`String message = "Hello, World!";
for (int i = 0; i < message.length(); i++) {
    System.out.println(message.charAt(i));
}`}
            </code>
          </pre>
          <p className="mb-4">
            In this example, we initialize the loop variable <code>i</code> to
            0, set the condition to continue as long as <code>i</code> is less
            than the length of the <code>message</code> string, and update{" "}
            <code>i</code> by incrementing it by 1 after each iteration. The
            code inside the loop body prints the value of{" "}
            <code>message.charAt(i)</code> to the console.
          </p>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4">
            In Java, for loops are used to execute a block of code repeatedly
            based on a condition. The basic syntax of a for loop consists of an
            initialization statement, a condition expression, and an update
            statement, separated by semicolons. The initialization statement is
            executed only once, at the beginning of the loop, and initializes
            the loop variable. The condition expression is evaluated at the
            beginning of each loop iteration and determines whether the loop
            body 'is executed. The update statement is executed at the end of
            each loop iteration and is used to update the loop variable. For
            loops are commonly used to iterate over arrays or collections, but
            can also be used for other types of tasks that require repeated
            execution of a block of code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lab1t8;
