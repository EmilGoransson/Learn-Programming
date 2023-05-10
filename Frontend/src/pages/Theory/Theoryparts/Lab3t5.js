import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab3t5(props) {
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
        <a onClick={props.addPinned} style={{ cursor: "pointer" }}>
          {props.svg}
        </a>
        <h1 className="text-3xl font-bold mb-4">Break statement</h1>
        <p className="mb-4">
          The break statement is a control statement in Java that allows you to
          exit a loop or switch statement prematurely. It is often used in
          situations where you want to terminate a loop or switch statement
          based on certain conditions. The break statement causes the program to
          jump to the next statement immediately after the loop or switch block.
        </p>
        <h2 className="text-2xl font-bold mb-4"> Syntax </h2>
        <p className="mb-4">
          The syntax of the break statement in Java is as follows:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">{`break;`}</code>
        </pre>
        <h2 className="text-2xl font-bold mb-4"> Usage </h2>
        <p classname="mb-4">
          The break statement can be used in the following scenarios:
        </p>
        <p classname="mb-4">
          1. Exit a loop: You can use the break statement to exit a loop
          prematurely. When the break statement is encountered inside a loop,
          the loop is immediately terminated, and the program execution
          continues with the next statement after the loop.
        </p>
        <p classname="mb-4">
          2. Exit a switch statement: You can use the break statement to exit a
          switch statement prematurely. When the break statement is encountered
          inside a switch block, the program execution continues with the next
          statement after the switch block.
        </p>
        <h2 className="text-2xl font-bold mb-4"> Example </h2>
        <p classname="mb-4">
          Here's an example that demonstrates the use of the break statement in
          a loop:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // exit the loop when i is equal to 5
    }
    System.out.println(i);
}`}
          </code>
        </pre>
        <p className="mb-4">
          In this example, the for loop iterates from 0 to 9. However, when i is
          equal to 5, the break statement is executed, causing the loop to
          terminate prematurely. Therefore, the output of this program will be:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`0
1
2
3
4`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
        <p className="mb-4">
          The break statement is a useful control statement in Java that allows
          you to exit a loop or switch statement prematurely. It is commonly
          used when you want to terminate a loop based on certain conditions. By
          using the break statement, you can make your code more efficient and
          easier to read.
        </p>
      </div>
    </div>
  );
}

export default Lab3t5;
