import React from "react";
import ProgressStarView from "../View/ProgressInStarView";
//might have to change const stars to use reactState

function ProgressStar() {
  //maybe change to local file idk
  const litStar = "https://i.imgur.com/jVBGvSp.png";
  const star = "https://i.imgur.com/wa5f5VZ.png";
  //fetch from model
  const currentLevel = 10;
  //Change here depending on the amount of levels in each lab (maybe fetch from db)
  const lab1Amount = 10;
  const lab2Amount = 10;
  const lab3Amount = 10;
  //calculates which stars should be lit
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
    <div>
      <ProgressStarView stars={stars}></ProgressStarView>
    </div>
  );
}
export default ProgressStar;
