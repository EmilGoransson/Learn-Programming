import React from "react";
import Lab3a6View from "./Assignment36View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 2 - Nested For-Loops
function Lab3a36() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //update this variable if using this as template!
  const thisLevel = 36;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `import java.util.Scanner;
class Progman
{  
    public static void main(String[] args) {
      Scanner scanner = new Scanner(System.in);
      int input = scanner.nextInt();

      //Your code here

      if(input == 1){
        System.out.print("Before method call: x = " + x + ", y[0] = " + y[0]);
        }

      //call modifyValues() with x and y as parameters

      if(input == 2){
        System.out.print("After method call: x = " + x + ", y[0] = " + y[0]);
        }
    }
    public static void modifyValues(int x, int[] y) {
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

      <Lab3a6View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab3a6View>
    </div>
  );
}
export default Lab3a36;
