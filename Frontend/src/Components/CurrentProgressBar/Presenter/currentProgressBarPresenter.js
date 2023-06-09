import React from "react";
import ProgressBarView from "../View/currentProgressBarView";
import useLevelStore from "../../../Model/frontEndStore";

function Progress() {
  const totalLevels = useLevelStore((state) => state.totalLevels);
  //maybe change to local file idk
  const litStar = "https://i.imgur.com/PO5mEkq.png";
  const star = "https://i.imgur.com/qtoAhpa.png";
  //fetch from model
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //Change here depending on the amount of levels in each lab (maybe fetch from db)
  const lab1Amount = 14;
  const lab2Amount = 14;
  const lab3Amount = 14;
  //calculates which stars should be lit
  //array of stars

  //fetch from model
  const numberOfLevels = useLevelStore((state) => state.totalLevels);
  //hard-code unless cant be fetched from DB
  //for progressbar
  const currentLevelPercentage = (currentLevel / (numberOfLevels + 1)) * 100;

  function isLit(labAmount) {
    if (currentLevel - 1 >= labAmount) {
      return litStar;
    } else {
      return star;
    }
  }
  //returns the sidebar stars and checks if they should be lit
  const stars = [
    isLit(lab1Amount),
    isLit(lab1Amount + lab2Amount),
    isLit(lab1Amount + lab2Amount + lab3Amount),
  ];
  return (
    <ProgressBarView
      level={currentLevel}
      progress={currentLevelPercentage}
      totalLevels={totalLevels}
      stars={stars}
    />
  );
}
export default Progress;
