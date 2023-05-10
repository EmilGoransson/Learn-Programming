import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t5(props) {
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
        <h1 className="text-3xl font-bold mb-4">Operations</h1>
        <p className="mb-4">
          In Java, an operation is an action that is performed on one or more
          values or variables, resulting in a new value. There are several types
          of operations in Java, including arithmetic operations, comparison
          operations, and logical operations.
        </p>
        <h2 className="text-2xl font-bold mb-4">Arithmetic Operations</h2>
        <p className="mb-4">
          Java supports basic arithmetic operations such as addition (
          <code>+</code>), subtraction (<code>-</code>), multiplication (
          <code>*</code>), division (<code>/</code>), and modulus (
          <code>%</code>). These operations are performed on numeric data types
          such as int, double, float, etc. For example:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int a = 10;
int b = 5;
int c = a + b; // result is 15`}
          </code>
        </pre>
        <p className="mb-4">
          The division operator (<code>/</code>) for integer division, differes
          from what you are familliar with. When two integer values are divided
          using the division operator, the result is always an integer value.
          This means that any remainder resulting from the division is
          discarded.For example, if you were to perform the operation 7 / 3 in
          Java, the result would be 2, not 2.33333. This is because the decimal
          portion of the result is discarded, and only the integer portion is
          returned.
        </p>

        <h2 className="text-2xl font-bold mb-4">Modulus Operations</h2>
        <p className="mb-4">
          The modulo operator (<code>%</code>) is used to calculate the
          remainder of a division operation between two values. It can be used
          with both integer and floating-point values. The modulo operator
          returns the remainder of a division operation. For example, if you
          perform the operation 7 % 3 in Java, the result would be 1, because 7
          divided by 3 leaves a remainder of 1.
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int x = 9;
int y = 3;
int result = x % y; // result is 0 since there there will no remainder`}
          </code>
        </pre>

        <h2 className="text-2xl font-bold mb-4">Comparison Operations</h2>
        <p className="mb-4">
          Comparison operations are used to compare two values and return a
          Boolean value (true or false) based on the comparison. Java supports
          comparison operators such as equal to (<code>==</code>), not equal to
          (<code>!=</code>), greater than (<code>&gt;</code>), less than (
          <code>&lt;</code>), greater than or equal to (<code>&gt;=</code>), and
          less than or equal to (<code>&lt;=</code>). For example:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int a = 10;
int b = 5;
boolean result = (a > b); // result is true`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Logical Operations</h2>
        <p className="mb-4">
          Logical operations are used to evaluate Boolean expressions and return
          a Boolean value based on the evaluation. Java supports logical
          operators such as AND (<code>&&</code>), OR (<code>||</code>), and NOT
          (<code>!</code>). For example:
        </p>
        <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`boolean a = true;
boolean b = false;
boolean result = (a && b); // result is false`}
          </code>
        </pre>
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="mb-4">
          It is important to understand the different types of operations and
          how to use them effectively in your code.
        </p>
      </div>
    </div>
  );
}

export default Lab1t5;
