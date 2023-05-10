import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab3t3(props) {
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
        <h1 className="text-3xl font-bold mb-4">Stringbuilder</h1>
        <p className="mb-4">
          In Java, StringBuilder is a class that provides a more efficient way
          to manipulate strings than using the traditional String class.
          StringBuilder is designed for situations where you need to make
          repeated modifications to a string, such as concatenating multiple
          strings or replacing characters.
        </p>
        <h2 className="text-2xl font-bold mb-4"> Using Stringbuilder</h2>
        <p className="mb-4">
          To use StringBuilder in your Java code, you first need to create a new
          instance of the StringBuilder class:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`StringBuilder sb = new StringBuilder();`}
          </code>
        </pre>
        <p classname="mb-4">
          {" "}
          Once you have an instance of StringBuilder, you can use its methods to
          modify the string it contains. Some of the most commonly used methods
          include:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-medium">
              <code>append():</code>
            </span>{" "}
            Adds a string to the end of the StringBuilder.
          </li>
          <li>
            <span className="font-medium">
              {" "}
              <code>insert(): </code>
            </span>{" "}
            Inserts a string at a specified position in the StringBuilder.
          </li>
          <li>
            <span className="font-medium">
              <code>delete():</code>
            </span>{" "}
            Removes a range of characters from the StringBuilder.
          </li>
          <li>
            <span className="font-medium">
              <code>replace():</code>
            </span>{" "}
            Replaces a range of characters in the StringBuilder with a new
            string.
          </li>
        </ul>
        <br></br>
        <p classname="mb-4">
          Here's an example that demonstrates how to use some of these methods:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`StringBuilder sb = new StringBuilder("Hello, ");
sb.append("world!");
sb.insert(7, "Java ");
sb.replace(0, 5, "Hi");
System.out.println(sb.toString());`}
          </code>
        </pre>
        <p className="mb-4">
          In this example, we create a new StringBuilder object with the initial
          string <code>"Hello, ". </code>
          We then append the string <code>"world!"</code> to the end of it,
          insert the string <code>"Java " </code>
          at position 7 (just before <code>"world!"</code>), replace the first
          five characters (i.e., <code>"Hello"</code>) with <code>"Hi"</code>,
          and finally print the resulting string{" "}
          <code>("Hi, Java world!")</code>.
        </p>

        <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
        <p className="mb-4">
          StringBuilder is a useful class in Java for manipulating strings
          efficiently. By using its methods, you can concatenate, insert,
          delete, and replace strings in a more flexible and performant way than
          using the String class directly. If you're working with large strings
          or need to make frequent modifications to a string, consider using
          StringBuilder in your Java code.
        </p>
      </div>
    </div>
  );
}

export default Lab3t3;
