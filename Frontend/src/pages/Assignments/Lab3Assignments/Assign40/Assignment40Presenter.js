import React from "react";
import Lab3a12View from "./Assignment40View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 3 - Null
function Lab3a12() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //update this variable if using this as template!
  const thisLevel = 40;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
//Import the Java time library
  class Progman
  {  
      public static void main(String[] args) {
      //Create a clock object
    }
  }`;
  function IsDisabled() {
    if (thisLevel >= currentLevel) {
      setStatus([true, "next-button-gray"]);
    } else {
      setStatus([false, "button-lab-cyan "]);
    } 
  }
  useEffect(() => {
    IsDisabled();
  }, [currentLevel]);

  return (
    <div>
      <RightSideBar></RightSideBar>
      <Sidebar></Sidebar>
      <Progress />
      <PinnedList/>
      <TopBar></TopBar>

      <Lab3a12View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab3a12View>
    </div>
  );
}
export default Lab3a12;
