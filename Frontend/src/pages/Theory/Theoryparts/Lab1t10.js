import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t10(props) {
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
          <a onClick={props.addPinned} style={{ cursor: "pointer" }}>
            {props.svg}
          </a>
          <h1 className="text-3xl font-bold mb-4">Arrays</h1>
          <p className="mb-4">
            In Java, an array is a data structure that stores a fixed-size
            sequence of elements of the same data type. The elements of an array
            can be accessed by their index, which is an integer value that
            represents their position in the array. Arrays in Java are
            zero-indexed, meaning that the first element has an index of 0, the
            second element has an index of 1, and so on.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Declaring and Initialization Arrays
          </h2>
          <p className="mb-4">
            Declaring an array in Java involves specifying the data type of the
            elements and the number of elements in the array. For example, the
            following code declares an array of integers with five elements:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int[] numbers = new int[5];`}
            </code>
          </pre>
          <p className="mb-4">
            This creates an array called <code>numbers</code> with five
            elements, all of which are initialized to 0. You can also initialize
            the elements of an array with specific values, like this:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int[] numbers = {1, 2, 3, 4, 5};`}
            </code>
          </pre>
          <p className="mb-4">
            This creates an array called <code>numbers</code> with five
            elements, each of which is initialized to the corresponding value in
            the braces.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Filling an Array in a For Loop
          </h2>
          <p className="mb-4">
            Sometimes you might want to fill an array with values that are
            generated or obtained using a for loop. Here's an example of how to
            do that in Java:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int[] numbers = new int[10];
for (int i = 0; i < numbers.length; i++) {
    numbers[i] = i * i;
}`}
            </code>
          </pre>
          <p className="mb-4">
            This code creates an array called <code>numbers</code> with ten
            elements, and then uses a for loop to fill the array with the
            squares of the first ten integers
          </p>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4">
            Arrays in Java are a powerful tool for storing and manipulating
            data. They are commonly used in algorithms and data structures, and
            can simplify many programming tasks. In Swedish, an array is called
            "Vektor". By understanding how arrays work and how to use them
            effectively, you can become a more proficient Java programmer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lab1t10;
