import React from "react";
import Lab1a3View from "./Assignment3View";
import useLevelStore from "../../../../Model/frontEndStore";
import { useEffect } from "react";

function Lab1a3() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab3 = useLevelStore((state) => state.levelsLab3);

  //update this variable if using this as template!!
  const thisLevel = 3;

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
  }, [currentLevel]);

  return (
    <div>
      <Lab1a3View
        preMadeText={preMadeText}
        disabled={status}
        thisLevel={thisLevel}
      ></Lab1a3View>
    </div>
  );
}
export default Lab1a3;
