import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab3t1(props) {
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
        <h1 className="text-3xl font-bold mb-4">Objects </h1>
        <p className="mb-4">
          In Java, everything is an object. An object is an instance of a class,
          which is a blueprint that defines the properties and behavior of the
          object. For example, you might have a class called <code>Person</code>{" "}
          that defines the properties of a person, such as their name and age,
          as well as methods for interacting with a person object, such as{" "}
          <code>sayHello()</code>.
        </p>
        <h2 className="text-2xl font-bold mb-4">Creating Objects</h2>
        <p className="mb-4">
          To create an object in Java, you first need to define a class. Here's
          an example Person class:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void sayHello() {
        System.out.println("My name is " + name + " and I'm " + age + " years old.");
    }
}
            `}
          </code>
        </pre>
        <p className="mb-4">
          This class has two private fields (<code>name</code> and{" "}
          <code>age</code>) and two methods (<code>Person()</code> and{" "}
          <code>sayHello()</code>). The <code>Person()</code> method is a
          constructor that takes a name and age as arguments and initializes the
          corresponding fields. The <code>sayHello()</code> method prints a
          greeting message that includes the person's name and age.
        </p>
        <p className="mb-4">
          To create a Person object, you use the <code>new</code> keyword to
          instantiate the class and pass in the required arguments to the
          constructor:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`Person john = new Person("John Doe", 30);`}
          </code>
        </pre>
        <p className="mb-4">
          This creates a <code>Person</code> object called john with the name
          "John Doe" and age 30.
        </p>
        <h2 className="text-2xl font-bold mb-4">
          Accessing Object Fields and Methods
        </h2>
        <p className="mb-4">
          Once you've created an object, you can access its fields and methods
          using dot notation. For example, to access the name field of the{" "}
          <code>John</code> object, you would use the following code
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`String name = john.name;`}
          </code>
        </pre>
        <p className="mb-4">
          To call the <code>sayHello()</code> method of the john object, you
          would use the following code:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">{`john.sayHello();`}</code>
        </pre>
        <p className="mb-4">
          This would output the following message to the console:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`Hello, my name is John Doe and I'm 30 years old.`}
          </code>
        </pre>

        <h2 className="text-2xl font-bold mb-4">Static vs. Non-Static</h2>
        <p className="mb-4">
          In Java, you can define fields and methods as either static or
          non-static. Static fields and methods belong to the class itself,
          while non-static fields and methods belong to each instance of the
          class.
        </p>
        <p className="mb-4">
          Use static fields and methods when you want to share data or behavior
          across all instances of the class. For example, you might have a{" "}
          <code>Person</code> class with a static field that keeps track of the
          total number of <code>Person</code> objects that have been created:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`public class Person {
    private static int count = 0;
    
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        count++;
    }
    
    public static int getCount() {
        return count;
    }
}`}
          </code>
        </pre>
        <p className="mb-4">
          In this example, the <code>count</code> field is static, so it belongs
          to the <code>Person</code> class rather than each individual{" "}
          <code>Person</code> object. The <code>Person()</code> constructor
          increments the <code>count</code> field each time a new{" "}
          <code>Person</code> object is created. The <code>getCount()</code>{" "}
          method is also static, so it can be called on the <code>Person</code>{" "}
          class itself rather than an individual <code>Person</code> object.
        </p>
        <p className="mb-4">
          To access the static <code>count</code> field or{" "}
          <code>getCount()</code> method, you use the class name rather than an
          object instance:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int count = Person.getCount();`}
          </code>
        </pre>
        <p className="mb-4">
          This would return the total number of <code>Person</code> objects that
        </p>
      </div>
    </div>
  );
}

export default Lab3t1;
