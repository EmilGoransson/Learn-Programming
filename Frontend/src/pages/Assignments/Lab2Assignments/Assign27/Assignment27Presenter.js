import React from "react";
import Lab2a13View from "./Assignment27View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 13 Lab 2 - Selection Sort 2
function Lab2a27() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //update this variable if using this as template!
  const thisLevel = 27;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `import java.util.Scanner;
class Progman
{  
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print((scanner.nextInt()));    
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

      <Lab2a13View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab2a13View>
    </div>
  );
}
export default Lab2a27;
