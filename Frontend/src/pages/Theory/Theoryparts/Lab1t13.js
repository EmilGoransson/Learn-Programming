import "../../Assignments/Lab1Assignments/AssignmentView.css";
import RightSideBar from "../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import TopBar from "../../../Components/topBar/topBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Lab1t13(props) {
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
          <h1 className="text-3xl font-bold mb-4">Else and Else if</h1>
          <p className="mb-4">
            <code>else</code> and <code>else if</code> are additional control
            structures that can be used in conjunction with <code>if</code>{" "}
            statements to create more complex decision-making logic.
          </p>
          <h2 className="text-2xl font-bold mb-4">else</h2>
          <p className="mb-4">
            The <code>else</code> statement is used to specify a block of code
            that should be executed if the condition in the <code>if</code>{" "}
            statement is false. For example:{" "}
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int age = 17;
if (age >= 18) {
    System.out.println("You can vote!");
} else {
    System.out.println("You cannot vote yet.");
}`}
            </code>
          </pre>
          <p>
            In this case, if the age variable is less than 18, the message "You
            cannot vote yet" will be printed.
          </p>
          <h2 className="text-2xl font-bold mb-4">else if</h2>
          <p className="mb-4">
            The <code>else if</code> statement can be used to specify additional
            conditions to test after the initial <code>if</code> statement. For
            example:
          </p>
          <pre className="bg-lightBlueGray rounded-md p-4 mb-4">
            <code className="text-sm font-mono">
              {`int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("Fail");
}`}
            </code>
          </pre>
          <p className="mb-4">
            In this case, the code will test whether the score variable is
            greater than or equal to 90. If it is, the message "A" will be
            printed. If it is not, the next else if statement will be evaluated
            to see if the score is greater than or equal to 80. If it is, the
            message "B" will be printed. If not, the next else if statement will
            be evaluated, and so on. If none of the conditions are true, the
            message "Fail" will be printed.
          </p>
          <p className="mb-4">
            else if statements can be used to create complex decision-making
            logic with many different possible outcomes. However, it's important
            to remember that the order of the conditions matters - the first
            condition that is true will determine which block of code is
            executed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lab1t13;
