import React from "react";
import ProgressStarView from "../View/ProgressInStarView";
import useLevelStore from "../../../Model/frontEndStore";
//might have to change const stars to use reactState

function ProgressStar() {
  //maybe change to local file idk
  const litStar = "https://i.imgur.com/2HZJWia.png";
  const star = "https://i.imgur.com/LInSggl.png";
  //fetch from model
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //Change here depending on the amount of levels in each lab (maybe fetch from db)
  const lab1Amount = 14;
  const lab2Amount = 14;
  const lab3Amount = 14;
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
