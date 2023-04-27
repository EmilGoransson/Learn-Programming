import React from "react";
import Lab1a2View from "./Assignment2View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";

function Lab1a2() {
  const currentLevel = useLevelStore((state) => state.currentLeve2);
  const levelLab2 = useLevelStore((state) => state.levelsLab2);

  //update this variable if using this as template!!
  const thisLevel = 2;

  const [status, setStatus] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
class Progman
{  
    public static void main(String[] args) {
        //declare two variables of the type String
        
        
        // Call the Words method


        //print the sum of the two variables
        
    }

    //Declare your method here
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
  }, [status]);

  return (
    <Lab1a2View
      preMadeText={preMadeText}
      disabled={status}
      thisLevel={thisLevel}
    ></Lab1a2View>
  );
}
export default Lab1a2;
