import React from "react";
import Lab1a7View from "./Assignment7View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";

function Lab1a7() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab3 = useLevelStore((state) => state.levelsLab7);

  //update this variable if using this as template!!
  const thisLevel = 7;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
class Progman
{  
    public static void main(String[] args) {
        //declare two variables of the type String
        
        
        // Call the Words method


        //print the sum of the two variables
        
    }

    //Declare your method here
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

      <Lab1a7View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab1a7View>
    </div>
  );
}
export default Lab1a7;
