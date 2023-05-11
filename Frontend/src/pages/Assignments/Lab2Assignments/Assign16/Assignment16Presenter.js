import React from "react";
import Lab2a16View from "./Assignment16View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import { ReactComponent as LogoBookmark } from "../../bookmark.svg";
import { ReactComponent as LogoBookmarkFilled } from "../../filledBookmark.svg";
import RightSideBar from "../../../../Components/rightSideBar/rightSideBarPresenter";
import Progress from "../../../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import PinnedList from "../../../../Components/PinnedList/PinnedList";
import TopBar from "../../../../Components/topBar/topBarPresenter";


function Lab2a16() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const addPinned = useLevelStore((state) => state.addPinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  const removePinned = useLevelStore((state) => state.removePinned);
  //update this variable if using this as template!!
  const contentName = "IOException";
  const thisLevel = 16;
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


  const preMadeText = `import java.util.Scanner;  // Import the Scanner class
  
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
  
class Progman {  
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);  
    //declare a BufferedReader and intializw it by wrapping System in


    //Create a try block and inside it read the input using "readLine()"


    //Claculate the square of the of the input och print inte "use 'print' only"


    //Close the try block and catch an IOException

    
    //Create a finally block

        
    //Inside the finally blok create a new try

    
    //Close the reader and then the try block
    catch (IOException e) {
      System.err.print("An error occurred while closing the reader: " + e.getMessage());
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
  
    <Lab2a16View
      addPinned={addToPinned}
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
      svg={isFilled}
    ></Lab2a16View>
    </div>
    
  );
}
export default Lab2a16;