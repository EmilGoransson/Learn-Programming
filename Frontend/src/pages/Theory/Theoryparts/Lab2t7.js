import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab2t7(props) {
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
      <div>
      <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
            <a onClick={props.addPinned} style={{cursor: "pointer"}}>
                {props.svg}
            </a>
            <h1 className="text-3xl font-bold mb-4">String Array</h1>
            <p className="mb-4">
            In Java, a <code>string array</code> is an array of strings. It is a collection of string elements that
             are stored in a contiguous block of memory.To declare a string array in Java, you can use the following syntax:
             <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code>String[] myArray = new String[5];</code></pre>
<p>This declares an array of 5 strings, where each element is initialized to null. </p>
<pre className="bg-lightBlueGray rounded-md p-4 mb-4"><code>{`String[] myArray = {"apple", "banana", "orange", "grape", "kiwi"}`};</code></pre>
This declares an array of 5 strings, with the values ​​"apple", "banana", "orange", "grape", and "kiwi" assigned to each element respectively.
      </p>
            <p>String fruit = myArray[1];
            To access an element in a string array, you can use the array index like this:
            <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code>{`String fruit = myArray[1];`};</code></pre>
This assigns the second element in the array, which is "banana", to the variable fruit.
</p>
<p>You can also use a loop, such as a for loop or a foreach loop, to iterate over the elements in a string array:
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code>{`for (int i = 0; i < myArray.length; i++) {
    System.out.println(myArray[i]);
}`};</code></pre>

This loop prints out each element in the myArray array.
</p>
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <p className="mb-4">
            Overall, string arrays are a useful data structure in Java for storing and manipulating collections of strings.
            </p>
      </div>
    </div>
    </div>
  );
}

export default Lab2t7;
