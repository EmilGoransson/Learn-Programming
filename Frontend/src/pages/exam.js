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
        <h1 className = "examHeader">Tips for the exam </h1>
        <br></br>
        <h1>1. Practice on old exams</h1>
        <p> Most of the exams in Programming 1 follow a similar structure. By practicing old exams and understanding them
          you'll have a good chance of doing well on your exam.
        </p>
          <h1>2. Practice writing code on paper</h1>
          <p>The exam is pen and paper hence no compilator or IDE will help you autofill your code. 
             So do yourself a favor and practice writing code on a paper. When doing this remember to still 
             indent as you would do on a computer so it makes it easier to read.
          </p>
          <h1>3. Write comments</h1>
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
          <h1>5. Sorting algoritms</h1>
          <p> Question 5 on the exam always contains a sorting algoritm and a question about time complexity. Also, in order 
            to pass the exam one needs atleast 3 points on this question. The sorting algoritms are usually either
            selection sort or insertion sort. So look up these algoritms and learn how they work and their time complexity.
            It's good to do this some time before the exam since these can be a little tricky to understand at first.
          </p>
          <h1>6. Read up</h1>
          <p> Question 5 on the exam always contains a sorting algoritm and a question about time complexity. Also, in order 
            to pass the exam one needs atleast 3 points on this question. The sorting algoritms are usually either
            selection sort or insertion sort. So look up these algoritms and learn how they work and their time complexity.
            It's good to do this some time before the exam since these can be a little tricky to understand at first.
          </p>
      </main>
    </div>
    </div>
  );
};
export default Exam;
