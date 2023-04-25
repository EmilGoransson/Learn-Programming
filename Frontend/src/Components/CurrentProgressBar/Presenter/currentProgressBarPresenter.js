import React from "react";
import ProgressBarView from "../View/currentProgressBarView";
import useLevelStore from "../../../Model/frontEndStore";

function Progress() {
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //fetch from model
  const numberOfLevels = 40;
  //hard-code unless cant be fetched from DB
  //for progressbar
  const currentLevelPercentage = (currentLevel / numberOfLevels) * 100;
  return (
    <ProgressBarView level={currentLevel} progress={currentLevelPercentage} />
  );
}
export default Progress;
