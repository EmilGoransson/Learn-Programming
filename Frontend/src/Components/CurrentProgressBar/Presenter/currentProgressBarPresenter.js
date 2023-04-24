import React from "react";
import ProgressBarView from "../View/currentProgressBarView";

function Progress() {
  //fetch from model
  const numberOfLevels = 40;
  //hard-code unless cant be fetched from DB
  const currentLevel = 10;
  //for progressbar
  const currentLevelPercentage = (currentLevel / numberOfLevels) * 100;
  return (
    <ProgressBarView level={currentLevel} progress={currentLevelPercentage} />
  );
}
export default Progress;
