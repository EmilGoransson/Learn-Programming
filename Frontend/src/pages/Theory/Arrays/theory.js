import React from "react";
import "./theory.css";
import TopBar from "../../../Components/topBar/topBarPresenter";
import RightSideBar from "../../../Components/Sidebar/leftSideBar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../Components/PinnedList/PinnedList";
import Progress from "../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Scrollingbar from "../../../Components/Scrollingbar/scrollingbar";

function Theory() {
  return (
    <div>
    <TopBar/>
  
 <RightSideBar/>
 <Scrollingbar/>
 <Sidebar/>
 <Progress />
 <PinnedList/>
  


    <div className="Theory mt-20 ">
    
      <div className="theory-header">
        <h3 className="text-3xl font-bold mb-4">
          Getting started with Java, Integrated Development <br></br>Environments (IDEs) and other useful tips
        </h3>
        <p className="mb-4">
        </p>
        </div>
        </div>
  </div>
  )};

export default Theory;
