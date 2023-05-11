import React from "react";
import Lab3a10View from "./Assignment38View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import { ReactComponent as LogoBookmark } from "../../bookmark.svg";
import { ReactComponent as LogoBookmarkFilled } from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";
//Module 10 Lab 3 - Null
function Lab3a10() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const addPinned = useLevelStore((state) => state.addPinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  const removePinned = useLevelStore((state) => state.removePinned);
  //update this variable if using this as template!!
  const contentName = "Null";
  const thisLevel = 38;
  const [isFilled, setIsFilled] = React.useState(
      <LogoBookmarkFilled className="bookmark-icon"/>
  );

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  function scrollToTop() {
    window.scrollTo(0, 0)
  };

  function isPinned() {
    if (getPinned.includes(contentName)) {
      setIsFilled(
          <LogoBookmarkFilled className="text-textGray h-6 w-6 fill-current"/>
      );
    } else {
      setIsFilled(
          <LogoBookmark className="text-textGray h-6 w-6 fill-current"/>
      );
    }
  }

  const preMadeText = `
  import java.util.Scanner;
  class Progman
  {  
      public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try{
          //Your code here
        }
        catch(Exception e){
          //Your code here
        }
    }
  }`;
  function addToPinned() {
    if (!getPinned.includes(contentName)) {
      addPinned(contentName);
    } else {
      removePinned(contentName);
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

      <Lab3a10View
      addPinned={addToPinned}
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
      svg={isFilled}
      ></Lab3a10View>
    </div>
  );
}
export default Lab3a10;
