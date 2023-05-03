import RightSideBar from "../Components/Sidebar/leftSideBar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Progress from "../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import PinnedList from "../Components/PinnedList/PinnedList";
import TopBar from "../Components/topBar/topBarPresenter";

function Exam (){
  return (
    
    <div>
       <div>
        <RightSideBar></RightSideBar>
        <Sidebar></Sidebar>
        <Progress />
        {/*<ProgressStar />*/}
        <PinnedList/>
      </div>
      <TopBar></TopBar>
    <div className="bg-lightBlueGray w-screen h-screen">
      {" "}
      <div>test</div>
    </div>
    </div>
  );
};
export default Exam;
