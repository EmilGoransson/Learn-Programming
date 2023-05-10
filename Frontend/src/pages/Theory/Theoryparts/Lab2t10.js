import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab2t10(props) {
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
      <div className="mt-20">
            <div className="Lab-page max-w-3xl mx-auto text-left py-8 px-4 text-sans text-[#CECECE]">
                <h1 className="text-3xl font-bold mb-4">Array Index Insertion</h1>
                <p className="mb-4">
                In Java, <code>arrays</code> have a fixed length that is determined when the array is created. 
                However, it is possible to <code>insert</code> and <code>remove</code> elements at specific indexes within an array.
                To insert an <code>element</code> at a specific <code>index</code>, you must shift all the existing elements after the 
                <code>insertion point</code> to the right by one position. Here's an example code snippet that demonstrates 
                how to insert an element into an <code>array</code>:
            <p></p>
                </p>
                <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int[] arr = new int[5];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;

// Insert the element 5 at index 2
for (int i = arr.length - 1; i > 2; i--) {
    arr[i] = arr[i - 1];
}
arr[2] = 5;`}
          </code>
        </pre>
                <p className="mb-4">
           </p>
                <p className="mb-4">
               
                </p>

                <p className="mb-4">
                Note that in the example, we initialize an <code>array</code> with a <code>fixed length </code>
                and assign values to specific <code>indexes</code> using the <code>square bracket notation</code> ( [] ).
                </p>
                <h2 className="text-2xl font-bold mb-4"> Changing Array Sizes Manually</h2>
                <p className="mb-4">
                As mentioned earlier, arrays in Java have a <code>fixed length </code> that is determined when the <code>array </code> is created. 
                If you need to change the <code>size </code> of an <code>array</code>, you must create a <code>new array </code> with the desired length and copy 
                the <code>elements</code> from the <code>old array</code> to the <code>new array</code>.
                Here's an example code snippet that demonstrates how to change the size of an array:
<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
          <code className="text-sm font-mono">
            {`int[] arr = new int[5];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

int[] newArr = new int[10];
for (int i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
}
arr = newArr;
`}
          </code>
        </pre>
        In this example, we create an array <code>arr </code> with a length of <code>5 </code> and assign <code>values</code> to specific 
        <code> indexes</code>. 
        We then create a new array <code>newArr</code> with a length of <code>10</code> and copy the elements from <code>arr </code>
         to <code>newArr</code>. 
        Finally, we assign <code>arr</code> to <code>newArr</code>, effectively changing the size of the original array.
                </p>
                <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                <p className="mb-4">
                In Java, arrays have a <code>fixed length</code> that is determined when the array is created. 
                However, it is possible to <code>insert </code> elements at specific <code>indexes</code> within 
                an array, as well as change the size of an array manually. Keep in mind that changing 
                the size of an array involves creating a <code>new array</code> with the desired length and copying 
                the <code>elements</code> from the <code>old array</code> to the <code>new array</code>.
</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Lab2t10;
