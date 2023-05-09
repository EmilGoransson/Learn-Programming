import React from "react";
import Lab2a10View from "./Assignment24View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 2 - Nested For-Loops
function Lab2a24() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //update this variable if using this as template!
  const thisLevel = 24;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `import java.util.Scanner;
class Progman
{  
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      System.out.print(insert(scanner.nextInt()));    
    }
      public static int insert(int n) {
          int sum = 0;
          int[] array = {1,2,3,5,6,7,8,9};
          int[] new_array = ...;
          //Your code below
          
          return sum;
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

      <Lab2a10View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab2a10View>
    </div>
  );
}
export default Lab2a24;
