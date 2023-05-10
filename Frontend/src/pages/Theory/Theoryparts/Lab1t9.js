import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t9(props) {
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
          <h1 className="text-3xl font-bold mb-4">Nested For-Loops</h1>
          <p className="mb-4">
            Nested for-loops are loops that are inside another loop. In Java,
            nested loops can be used to iterate over two-dimensional arrays or
            to perform operations on pairs of values. Example 1: Iterating over
            a Two-Dimensional <code>array</code>. Here's an example of a nested
            for-loop in Java that prints the values of a two-dimensional{" "}
            <code>array</code>:<p></p>
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int[][] array = { {1, 2}, {3, 4}, {5, 6} };

for(int i=0; i < array.length; i++) {
    for(int j=0; j < array[i].length; j++) {
        System.out.print(array[i][j] + " ");
    }
    System.out.println();
    }
}`}
            </code>
          </pre>
          <p className="mb-4">
            This code iterates over a two-dimensional array array and prints its
            values. The outer loop iterates over the rows of the array, and the
            inner loop iterates over the columns of each row.
          </p>
          <p className="mb-4">
            Example 2: Performing Operations on Pairs of Values Nested loops can
            also be used to perform operations on pairs of values. For example,
            here's a nested for-loop that calculates the product of all pairs of
            numbers from two arrays:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int[] nums1 = {1, 2, 3};
int[] nums2 = {4, 5};

for(int i=0; i<nums1.length; i++) {
    for(int j=0; j<nums2.length; j++) {
        int product = nums1[i] * nums2[j];
        System.out.println(nums1[i] + " * " + nums2[j] + " = " + product);
    }
}`}
            </code>
          </pre>
          <p className="mb-4">
            This code iterates over two arrays <code>nums1</code> and{" "}
            <code>nums2</code> and calculates the product of each pair of
            values. The outer loop iterates over the values in{" "}
            <code>nums1</code>, and the inner loop iterates over the values in{" "}
            <code>nums2</code>.
          </p>
          <h2 className="text-2xl font-bold mb-4">
            Performance Considerations
          </h2>
          <p className="mb-4">
            It's important to be careful when using nested loops, as they can
            lead to performance issues if used incorrectly. In particular,
            nested loops that perform operations on large data structures can be
            very slow, especially if the inner loop is executed many times. To
            avoid performance issues, it's important to optimize nested loops as
            much as possible, and to use alternative algorithms or data
            structures when necessary.
          </p>
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p className="mb-4">
            Nested for-loops are a powerful tool for solving programming
            problems that involve two-dimensional data structures or pairs of
            values. However, they should be used with caution, and performance
            considerations should be taken into account when using them. With
            careful use, nested loops can help solve complex programming
            problems and create efficient and effective code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lab1t9;
