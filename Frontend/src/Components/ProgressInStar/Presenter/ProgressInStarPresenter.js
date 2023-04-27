import React from "react";
import ProgressStarView from "../View/ProgressInStarView";
import useLevelStore from "../../../Model/frontEndStore";
//NOW USED FOR PINNED STUFF!!!

function ProgressStar() {
  //maybe change to local file idk

  //fetch from model
  //Change here depending on the amount of levels in each lab (maybe fetch from db)
  //calculates which stars should be lit

  //array of stars

  return (
    <div>
      <ProgressStarView></ProgressStarView>
    </div>
  );
}
export default ProgressStar;
