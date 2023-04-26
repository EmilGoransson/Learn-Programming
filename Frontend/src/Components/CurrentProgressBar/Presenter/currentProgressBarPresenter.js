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
  const lab1Amount = 10;
  const lab2Amount = 10;
  const lab3Amount = 10;
  //calculates which stars should be lit
  //array of stars

  //fetch from model
  const numberOfLevels = 40;
  //hard-code unless cant be fetched from DB
  //for progressbar
  const currentLevelPercentage = (currentLevel / numberOfLevels) * 100;

  function isLit(labAmount) {
    if (currentLevel >= labAmount) {
      return litStar;
    } else {
      return star;
    }
  }
  //array of stars
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
