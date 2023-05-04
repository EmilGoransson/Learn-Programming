import React from "react";
import Lab1a1View from "./Assignment1View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";

function Lab1a1() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab1 = useLevelStore((state) => state.levelsLab1);
  const pinnedTheory = useLevelStore((state) => state.pinnedTheory);
  const addPinned = useLevelStore((state) => state.addPinned);
  const removePinned = useLevelStore((state) => state.removePinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  //update this variable if using this as template!!
  const contentName = "Printing";
  const thisLevel = 1;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
class Progman
{  
    public static void main(String[] args) {
        //declare two variables of the type int
        
        //print the sum of the two variables
        
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
  }, [status]);

  return (
    <Lab1a1View
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
    ></Lab1a1View>
  );
}
export default Lab1a1;
