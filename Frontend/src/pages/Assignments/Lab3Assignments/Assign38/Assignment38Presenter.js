import React from "react";
import Lab3a10View from "./Assignment38View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 3 - Null
function Lab3a10() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //update this variable if using this as template!
  const thisLevel = 38;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
  import java.util.Scanner;
  class Progman
  {  
      public static void main(String[] args) {
        //Your code here
        Scanner scanner = new Scanner(System.in);
        int[] badArray = {1,2,3,4,5,6,7,8,9};
        int index = scanner.nextInt();
        System.out.print(badArray[index])
  
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

      <Lab3a10View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab3a10View>
    </div>
  );
}
export default Lab3a10;
