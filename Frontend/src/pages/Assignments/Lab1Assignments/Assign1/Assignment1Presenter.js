import React from "react";
import Lab1a1View from "./Assignment1View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";

function Lab1a1() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab1 = useLevelStore((state) => state.levelsLab1);

  const addPinned = useLevelStore((state) => state.addPinned);
  const getPinned = useLevelStore((state) => state.pinnedTheory);
  const removePinned = useLevelStore((state) => state.removePinned);
  //update this variable if using this as template!!
  const thisLevel = 1;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
class Progman
{  
    public static void main(String[] args) {
      //print the "Hello World"
        
    }
}`;
  function addToPinned() {
    if (!getPinned.includes(contentName)) {
      addPinned(contentName);
    }
    if (getPinned.includes(contentName)) {
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
  }, [currentLevel]);

  return (
    <Lab1a1View
      addPinned={addToPinned}
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
    ></Lab1a1View>
  );
}
export default Lab1a1;
