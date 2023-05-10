import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab2t6(props) {
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
            <h1 className="text-3xl font-bold mb-4">While Loop</h1>
            <p className="mb-4">
            A <code>while</code> loop is a control flow statement in Java that allows you to execute a block of code 
            repeatedly as long as a certain condition is true. The syntax for a while loop in Java is as follows:

             <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code> { `while (condition) {
    // code to execute while condition is true
}
`}</code></pre>
           The condition can be any boolean expression that evaluates to either true or false. When the while loop is executed, 
           Java first evaluates the condition. If the condition is true, then the code inside the while loop is executed. 
           After the code inside the while loop is executed, Java goes back and evaluates the condition again. This process continues 
           until the condition becomes false, at which point the loop terminates and Java moves on to the next statement in the program.
            </p>
            <h2 className="text-2xl font-bold mb-4">While Example</h2>
            <p className="mb-4">
            Here's an example of a while loop in Java that prints the numbers 1 to 10:

<pre className="bg-lightBlueGray rounded-md p-4 mb-4">
<code className="text-sm font-mono">
   { `int i = 1;

while (i <= 10) {
    System.out.println(i);
    i++;
}

 `}
</code>
</pre>


In this example, the while loop is executed as long as the variable i is less than or equal to 10. Inside the while loop, 
the program prints the value of i and then increments it by 1 using the i++ shorthand operator. 
The loop continues until i is incremented to 11, at which point the condition becomes false and the loop terminates.
            </p>
            <p>
            It's important to be careful when using while loops, as they can potentially result in an infinite loop if 
            the condition never becomes false. To avoid this, it is important to ensure that the condition will eventually 
            become false under all circumstances. In conclusion, while loops are a powerful tool in Java that allow you to 
            execute a block of code repeatedly as long as a certain condition is true. By understanding how while loops work 
            and how to use them effectively, you can write more complex and flexible programs in Java.



            </p>
      </div>
    </div>
    </div>
  );
}

export default Lab2t6;
