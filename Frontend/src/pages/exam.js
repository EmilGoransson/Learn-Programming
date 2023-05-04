import RightSideBar from "../Components/Sidebar/leftSideBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Progress from "../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import PinnedList from "../Components/PinnedList/PinnedList";
import TopBar from "../Components/topBar/topBarPresenter";
import './exam.css';

function Exam (){
  return (
    <div>
    <div>
        <TopBar/>
        <RightSideBar />
        <PinnedList />
        <Progress/>
        <Sidebar/>
    </div>
    <div className="exam">
      <main>
        <h1 className = "examHeader">Tips for the Exam </h1>
        <p> Here we have gathered some of our best tips on how to ace the exam. Follow these tips and start 
          preparing in good time before the exam and you'll see that you'll ace the exam! </p>
        <h1>1. Practice on Old Exams</h1>
        <p> Most of the exams in Programming 1 follow a similar structure. By practicing old exams and understanding them
          you'll have a good chance of doing well on your exam. You can find the old exams and their solutions on you canvas page.
          Try to give the exam a serious try before checking the solutions!
        </p>
          <h1>2. Practice Writing Code on Paper</h1>
          <p>The exam is pen and paper hence no compilator or IDE will help you autofill your code. 
             So do yourself a favor and practice writing code on a paper. When doing this remember to still 
             indent as you would do in a real coding environment so it's easier to read.
          </p>
          <h1>3. Write Comments</h1>
          <p> It can be of great help to comment your code even on the exam. Try to include comments 
            explaining what you are thinking and how the code works. This can be of great help if 
            the code that you've written isn't correct hence your comments may help to show that you
            still know what you're doing. 
          </p>
          <h1>4. Pseudocode</h1>
          <p> If you don't know how to write something in code on the exam, write pseudocode! Even though you haven't 
            written the full code you still have written some code and shown understanding that you know what the 
            code should do and be formatted. So practice on pseudocode so that you have something to fall back on
            in case you need.
          </p>
          <h1>5. Sorting Algoritms</h1>
          <p> Question 5 on the exam always contains a sorting algoritm and a question about time complexity. Also, in order 
            to pass the exam one needs atleast 3 points on this question. The sorting algoritms are usually either
            selection sort or insertion sort. So look up these algoritms and learn how they work and how the sorting goes
            step by step. Also make sure to look up and understand the timecomplexity for both of them, both in worst 
            case and best case. It's good to do this some time before the exam since these can be a little tricky to 
            understand at first.
          </p>
          <h1>6. Do this Course</h1>
          <p> This course is carefully designed to be aligned with the concepts that are included in Programming 1. If you do 
            this course you should be introduced to all the key concepts. If you have any pinned items at the end of this
            webcourse make sure to read up on them before the final exam. It's possible to redo old levels and if you only need
            to fresh up on some theory check out our theory section we're we have gathered all the theory from the different
            levels!
          </p>
      </main>
    </div>
    </div>
  );
};
export default Exam;
