import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab3t2(props) {
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
        <h1 className="text-3xl font-bold mb-4">String Concatenation</h1>
        <p className="mb-4">
          In Java, string concatenation is the process of joining two or more
          strings together to create a new string. Java provides several ways to
          perform string concatenation.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          {" "}
          Using the <code>+</code> Operator
        </h2>
        <p className="mb-4">
          The most common way to concatenate strings in Java is to use the{" "}
          <code>+</code> operator. When you use the <code>+</code> operator to
          concatenate two or more strings, Java creates a new string that
          contains the characters from all of the input strings.
        </p>
        <p className="mb-4">
          For example, the following code snippet concatenates two strings:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str1 = "Hello";
String str2 = "World";
String result = str1 + " " + str2;`}
          </code>
        </pre>
        <p classname="mb-4">
          {" "}
          In this example, the variables <code>str1</code> and <code>str2</code>{" "}
          contain the strings <code>"Hello"</code> and <code>"World"</code>,
          respectively. The <code>+</code> operator is used to concatenate these
          two strings with a space in between, resulting in a new string{" "}
          <code>"Hello World"</code> which is assigned to the{" "}
          <code>result</code> variable.
        </p>
        <p classname="mb-4">
          {" "}
          You can also create a empty string and add onto it using the{" "}
          <code>+</code> operator. An example of this can be seen below:
        </p>
        <br></br>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String s = "";
s += "hello";`}
          </code>
        </pre>
        <p className="mb-4">
          In this example, the variable s is initialized as an empty string
          using the assignment operator <code>=</code>. Then, the{" "}
          <code>+=</code> operator is used to concatenate the string{" "}
          <code>"hello"</code> to the end of the <code>s</code> string,
          resulting in the string <code>"hello"</code>.
        </p>
        <h2 className="text-2xl font-bold mb-4"> Using the concat() Method</h2>
        <p className="mb-4">
          In addition to the <code>+</code> operator, Java also provides a{" "}
          <code>concat()</code> method that can be used to concatenate strings.
          This method takes a single string argument and appends it to the end
          of the original string.
        </p>
        <p className="mb-4">For example:</p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String str1 = "Hello";
String str2 = "World";
String result = str1.concat(" ").concat(str2);`}
          </code>
        </pre>
        <p className="mb-4">
          This code snippet does the same thing as the previous example, but
          instead of using the <code>+</code> operator, it uses the{" "}
          <code>concat()</code> method to join the two strings together.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          {" "}
          Using StringBuilder or StringBuffer Class
        </h2>
        <p className="mb-4">
          In Java, concatenating a large number of strings using the{" "}
          <code>+</code> operator can be inefficient because each concatenation
          creates a new string object. To avoid this problem, you can use the
          StringBuilder or StringBuffer class instead.
        </p>
        <p className="mb-4">
          These classes provide methods for appending strings to a mutable
          buffer, which can then be converted to a string when needed. This
          approach can be much faster and more memory-efficient than using the{" "}
          <code>+</code> operator, especially when dealing with large strings or
          loops that perform many concatenations.
        </p>

        <h2 className="text-2xl font-bold mb-4"> Conclusion</h2>
        <p className="mb-4">
          String concatenation is a common operation in Java programming, and
          there are several ways to perform it. The simplest way is to use the{" "}
          <code>+</code> operator, but the <code>concat()</code> method and the
          StringBuilder or StringBuffer classes offer additional options that
          may be more efficient in certain situations. By understanding how
          string concatenation works in Java, you can write code that is both
          readable and performant.
        </p>
      </div>
    </div>
  );
}

export default Lab3t2;
