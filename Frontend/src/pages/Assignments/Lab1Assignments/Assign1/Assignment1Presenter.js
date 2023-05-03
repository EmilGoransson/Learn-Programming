import React from "react";
import Lab1a1View from "./Assignment1View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";
import { ReactComponent as LogoBookmark } from "../../bookmark.svg";
import { ReactComponent as LogoBookmarkFilled } from "../../filledBookmark.svg";

function Lab1a1() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const addPinned = useLevelStore((state) => state.addPinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  //update this variable if using this as template!!
  const contentName = "Variables";
  const thisLevel = 1;
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

  const preMadeText = `
  import java.util.Scanner;  // Import the Scanner class
class Progman
{  
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
        //declare two variables of the type int
        
        //print the sum of the two variables
        
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
    <Lab1a1View
      addPinned={addToPinned}
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
      svg={isFilled}
    ></Lab1a1View>
  );
}
export default Lab1a1;
