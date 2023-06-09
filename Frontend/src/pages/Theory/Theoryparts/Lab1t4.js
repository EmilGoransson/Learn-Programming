import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t4(props) {
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
        <h1 className="text-3xl font-bold mb-4">Scanner</h1>
        <p className="mb-4">
          In Java programming, the Scanner class is used to read input from the
          user or from a file. It provides methods for reading different types
          of data, such as integers, floating-point numbers, and strings.
        </p>
        <h2 className="text-2xl font-bold mb-4">Importing the Scanner class</h2>
        <p className="mb-4">
          To use the <code>Scanner</code> class, you must first import it into
          your Java program. You can do this by adding the following line at the
          top of your program:
        </p>
        <pre className="pre-Code rounded-md p-4 mb-4">
          <code className="text-sm font-mono">import java.util.Scanner;</code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Creating a Scanner object</h2>
        <p className="mb-4">
          To read input using Scanner, you must first create a Scanner object.
          You can do this by calling the Scanner constructor and passing in the
          input source as a parameter. For example, to read input from the
          keyboard, you can create a Scanner object like this:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`Scanner input = new Scanner(System.in);`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">
          Reading different types of data
        </h2>
        <p className="mb-4">
          The Scanner class provides methods for reading different types of
          data, such as <code>nextInt()</code> for reading integers,{" "}
          <code>nextDouble()</code> for reading floating-point numbers, and{" "}
          <code>nextLine()</code> for reading strings.
        </p>
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="mb-4">
          Overall, the <code>Scanner</code> class is a powerful tool for reading
          input in Java, and understanding how to use it is essential for many
          Java programming tasks.
        </p>
        <h2 className="text-2xl font-bold mb-4">Scanner in our exercises</h2>
        <p>
          To pass this, and following, exercises you need to understand how to
          use the <code>Scanner</code> class. The exercises will a pre-defined
          Scanner called "scanner" this will be the input. To declare a variable
          you will need to write:
        </p>
        <pre className="pre-Code rounded-md p-4 mb-4">
          <code className="text-sm font-mono">scanner.next[Datatype];</code>
        </pre>
      </div>
    </div>
  );
}

export default Lab1t4;
