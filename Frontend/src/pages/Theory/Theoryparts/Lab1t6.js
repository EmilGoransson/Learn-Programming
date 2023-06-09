import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t6(props) {
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
        <h1 className="text-3xl font-bold mb-4">Classes</h1>
        <p className="mb-4">
          A class is a blueprint for creating objects. A class defines the
          properties and behaviors of an object, and objects are instances of a
          class.
        </p>
        <h2 className="text-2xl font-bold mb-4">Syntax</h2>
        <p className="mb-4">
          A class in Java is defined using the <code>class</code> keyword
          followed by the name of the class. The body of the class is enclosed
          in curly braces <code>{}</code>. Here's an example of a class
          definition
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  // class body goes here
}`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Properties</h2>
        <p className="mb-4">
          A class can have properties, which are variables that store data.
          Properties are declared within the class body, outside of any method
          definitions. Here's an example of a class with two properties:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  int x = 5;
  String name = "John";
}`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Methods</h2>
        <p className="mb-4">
          A class can also have methods, which are functions that perform
          actions. Methods are declared within the class body, after the
          property declarations
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  int x = 5;
  String name = "John";
  
  public void printName() {
    System.out.println(name);
  }
}`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Constructors</h2>
        <p className="mb-4">
          A class can have a constructor, which is a special method that is
          called when an object is created. The constructor initializes the
          object's properties. Here's an example of a class with a constructor:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class MyClass {
  int x;
  
  public MyClass(int x) {
    this.x = x;
  }
}`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Access modifiers</h2>
        <p>
          Classes and their properties and methods can have access modifiers,
          such as <code>public</code>, <code>private</code>, and{" "}
          <code>protected</code>, that determine their visibility to other
          classes. Public members can be accessed by any class, private members
          can only be accessed by the same class, and protected members can be
          accessed by subclasses and classes in the same package.
        </p>
      </div>
    </div>
  );
}

export default Lab1t6;
