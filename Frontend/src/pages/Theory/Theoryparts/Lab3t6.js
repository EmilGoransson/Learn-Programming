import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab3t6(props) {
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
          <h1 className="text-3xl font-bold mb-4">
            Pass by Reference vs Pass by Value
          </h1>
          <p className="mb-4">
            When we talk about passing variables to methods in Java, there are
            two ways to do it: pass by value and pass by reference.
            <p></p>
          </p>
          <p className="mb-4"></p>
          <p className="mb-4"></p>

          <p className="mb-4"></p>
          <h2 className="text-2xl font-bold mb-4"> Pass by Value</h2>
          <p className="mb-4">
            In <code>pass by value</code>, a copy of the value of the variable
            is passed to the method. This means that any changes made to the
            variable inside the method do not affect the original variable
            outside of the method. Java is strictly <code>pass by value</code>,
            which means that any variable that is passed to a method is actually
            a copy of the variable, not a reference to the original variable.
            <br></br>
            <br></br>
            For example, consider the following code:
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
              <code className="text-sm font-mono">
                {`public void changeValue(int x) {
    x = 5;
}

public static void main(String[] args) {
    int a = 10;
    changeValue(a);
    System.out.println(a);
}
`}
              </code>
            </pre>
            In this code, we define a method <code>changeValue()</code> that
            takes an integer <code>x</code> as a parameter and sets its value to{" "}
            <code>5</code>. We then define a variable <code>a </code> and set
            its value to <code>10</code>. We call the <code>changeValue()</code>{" "}
            method with <code>a</code> as an argument, and then we print out the
            value of <code>a</code>.<br></br>
            <br></br>
            When we run this code, the output will be <code>10</code>. This is
            because a is passed by value to the <code>changeValue()</code>{" "}
            method, meaning that a copy of a is passed to the method. Inside the
            method, we change the value of the copy to <code>5</code>, but this
            has no effect on the original value of a outside of the method.
          </p>
          <h2 className="text-2x font-bold mb-4">Pass by Reference</h2>
          <p>
            In <code>pass by reference</code>, a reference to the original
            variable is passed to the method. This means that any changes made
            to the variable inside the method will affect the original variable
            outside of the method. However, Java does not support pass by
            reference for non-object types.
            <br></br>
            <br></br>
            For example, consider the following code:
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
              <code className="text-sm font-mono">
                {`public void changeValue(int[] arr) {
    arr[0] = 5;
}

public static void main(String[] args) {
    int[] a = {10};
    changeValue(a);
    System.out.println(a[0]);
}
`}
              </code>
            </pre>
            In this code, we define a method changeValue() that takes an integer
            array <code>arr </code> as a parameter and sets the value of the
            first element to <code>5</code>. We then define an integer array{" "}
            <code>a </code> with a single element of <code>10</code>. We call
            the <code>changeValue()</code> method with a as an argument, and
            then we print out the value of the first element of a.
            <br></br>
            <br></br>
            When we run this code, the output will be <code>5</code>. This is
            because a is passed by reference to the <code>changeValue()</code>{" "}
            method, meaning that a reference to the original array is passed to
            the method. Inside the method, we change the value of the first
            element of the original array to <code>5</code>, which affects the
            original value of a outside of the method.
          </p>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4">
            So, in summary, Java is strictly pass by value, meaning that any
            variable passed to a method is a copy of the original variable.
            However, for object types, the copy is a reference to the original
            object, which means that changes made to the object inside the
            method will affect the original object outside of the method.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lab3t6;
