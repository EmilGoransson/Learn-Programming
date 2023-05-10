import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t3(props) {
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
        <h1 className="text-3xl font-bold mb-4">Strings</h1>
        <p className="mb-4">
          a string is a sequence of characters that is used to represent text.
          Strings in Java are represented by the <code>String</code> class,
          which provides many methods for manipulating strings. Here are some
          important things to know about strings in Java.
        </p>
        <h2 className="text-2xl font-bold mb-4">Creating a String</h2>
        <p className="mb-4">
          You can create a String in Java by enclosing the text in double
          quotes. The "str" part in the example below is simply a name, you can
          name the String whatever is appropriate.
        </p>
        <pre className="pre-Code rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            String str = "Hello, World!";
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">String Concatenation</h2>
        <p className="mb-4">
          You can concatenate strings in Java using the + operator.
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str = "Hello, " + "World!";
// This will result in 1 String:
'Hello, World!'`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">String Length</h2>
        <p className="mb-4">
          You can find the length of a string using the <code>length()</code>{" "}
          method.
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str = "Hello, " + "World!";
int len = str.length();

// This will result in len being equal to 13`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">String Comparison</h2>
        <p className="mb-4">
          You can compare two strings in Java using the <code>equals()</code>{" "}
          method or the <code>compareTo()</code> method.
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str1 = "Hello";
String str2 = "World";
boolean result = str1.equals(str2);

// The Boolean statment (True or False) will be result in being equal to false`}
          </code>
        </pre>
        <p className="mb-4">
          String Manipulation: The String class provides many methods for
          manipulating strings, such as <code>charAt()</code>,{" "}
          <code>substring()</code>, <code>indexOf()</code>,{" "}
          <code>replace()</code>, and <code>toUpperCase()</code>.
        </p>
        <p className="mb-4">
          It's important to note that strings in Java are immutable, which means
          that once a string is created, it cannot be changed. However, you can
          create a new string that contains the desired changes.
        </p>
      </div>
    </div>
  );
}

export default Lab1t3;
