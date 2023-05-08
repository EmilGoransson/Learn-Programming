import React from "react";
import Lab1a9View from "./Assignment9View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 9 Lab 1 - Nested For-Loops
function Lab1a9() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab3 = useLevelStore((state) => state.levelsLab7);
  //update this variable if using this as template!
  const thisLevel = 9;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `import java.util.Scanner;
class Progman
{  
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);  
      System.out.print(count_sum(scanner.nextInt()));
        
    }
    public static int count_sum(int n){
      int sum = 0;
      //Your code here

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

      <Lab1a9View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab1a9View>
    </div>
  );
}
export default Lab1a9;
