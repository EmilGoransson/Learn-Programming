import React from "react";
import Lab2a26View from "./Assignment26View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import { ReactComponent as LogoBookmark } from "../../bookmark.svg";
import { ReactComponent as LogoBookmarkFilled } from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";


function Lab2a26() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const addPinned = useLevelStore((state) => state.addPinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  //update this variable if using this as template!!
  const contentName = "Selection Sort 1";
  const thisLevel = 26;
  const [isFilled, setIsFilled] = React.useState(
    <LogoBookmarkFilled className="bookmark-icon" />
  );

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  function isPinned() {
    if (getPinned.includes(contentName)) {
      setIsFilled(
        <LogoBookmarkFilled className="text-textGray h-6 w-6 fill-current" />
      );
    } else {
      setIsFilled(
        <LogoBookmark className="text-textGray h-6 w-6 fill-current" />
      );
    }
  }

  const preMadeText = `import java.util.Scanner;  // Import the Scanner class
  class Progman
  {  
      public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();
        int[]  array ={25,30,input,100,5,7};

        //Implement selection sort algorithm



        //Print the sorted array
        for (int i = 0; i < array.length; i++) {
          System.out.print(array[i] + ",");
      }
       

          
      }
  }`;
  function addToPinned() {
    if (!getPinned.includes(contentName)) {
      addPinned(contentName);
    }
  }
  function IsDisabled() {
    if (thisLevel >= currentLevel) {
      setStatus([true, "next-button-gray"]);
    } else {
      setStatus([false, "button-lab-cyan "]);
    }
  }
  useEffect(() => {
    IsDisabled();
    isPinned();
  }, [currentLevel, getPinned]);

  return (
    <div>
    <RightSideBar></RightSideBar>
    <Sidebar></Sidebar>
    <Progress />
    <PinnedList/>
    <TopBar></TopBar>
  
    <Lab2a26View
      addPinned={addToPinned}
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
      svg={isFilled}
    ></Lab2a26View>
    </div>
    
  );
}
export default Lab2a26;