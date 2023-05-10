import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t2(props) {
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
      <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE] ">
        <a onClick={props.addPinned} style={{ cursor: "pointer" }}>
          {props.svg}
        </a>
        <h1 className="text-3xl font-bold mb-4">Variables</h1>
        <p className="mb-4">
          In Java, a variable is a named container that stores a value.
          Variables are used to store data that can change during the execution
          of a program. They are a fundamental concept in programming and allow
          us to write more flexible and dynamic code.
        </p>
        <h2 className="text-2xl font-bold mb-4">Declaring Variables</h2>
        <p className="mb-4">
          To declare a variable in Java, we need to specify its type and name.
          For example, to declare a variable of type <code>int</code> with the
          name <code>myNumber</code>, we would write:
        </p>
        <pre className="pre-Code rounded-md p-4 mb-4">
          <code className="text-sm font-mono">int myNumber;</code>
        </pre>
        <p className="mb-4">
          This declares a variable of type <code>int</code> with the name{" "}
          <code>myNumber</code>. We can also initialize the variable with a
          value at the time of declaration:
        </p>
        <pre className="pre-Code rounded-md p-4 mb-4">
          <code className="text-sm font-mono">int myNumber = 42;</code>
        </pre>
        <p className="mb-4">
          This declares a variable of type <code>int</code> with the name{" "}
          <code>myNumber</code> and initializes it with the value{" "}
          <code>42</code>.
        </p>
        <h2 className="text-2xl font-bold mb-4">Using Variables</h2>
        <p className="mb-4">
          Once we have declared and initialized a variable, we can use it in our
          program. For example, we can print the value of <code>myNumber</code>{" "}
          to the console:
        </p>
        <pre className="pre-Code rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            System.out.println(myNumber);
          </code>
        </pre>
        <p className="mb-4">
          This will print the value of <code>myNumber</code> (in this case,{" "}
          <code>42</code>) to the console.
        </p>
      </div>
    </div>
  );
}

export default Lab1t2;
