import React from "react";
import Lab1a8View from "./Assignment8View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";

function Lab1a8() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab3 = useLevelStore((state) => state.levelsLab8);

  //update this variable if using this as template!!
  const thisLevel = 8;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
import java.util.Scanner;

class Progman
{  
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); 
        //Your code here
        
        
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

      <Lab1a8View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab1a8View>
    </div>
  );
}
export default Lab1a8;
