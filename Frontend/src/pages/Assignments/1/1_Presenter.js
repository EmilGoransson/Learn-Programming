import React from "react";
import Lab1a1View from "./1_View";
import useLevelStore from "../../../Model/frontEndStore";
import { useEffect } from "react";

function Lab1a1() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const levelLab1 = useLevelStore((state) => state.levelsLab1);

  //update this variable if using this as template!!
  const thisLevel = 1;

  const [disabled, setDisabled] = React.useState([true, "next-button-gray"]);

  const preMadeText = `
class Progman
{  
    public static void main(String[] args) {
        //declare two variables of the type int
        
        //print the sum of the two variables
        
    }
}`;
  function isDisabeled() {
    if (thisLevel >= currentLevel) {
      return setDisabled([true, "next-button-gray "]);
    } else {
      return setDisabled([false, "next-button-green "]);
    }
  }
  useEffect(() => {
    setDisabled(isDisabeled());
  }, []);

  return (
    <Lab1a1View preMadeText={preMadeText} disabeled={disabled}></Lab1a1View>
  );
}
export default Lab1a1;
