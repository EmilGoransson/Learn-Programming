
import React from "react";
import useLevelStore from "../../Model/frontEndStore";
import './PinnedList.css';
import xbutton from "./x-button.png"; // import the image file

function PinnedList() {
  const pinnedTheory = useLevelStore((state) => state.pinnedTheory);

  return (
    <div className="Pinned-container">
      <h2 className="Pinned-title">Pinned</h2>
      <ul>
        {pinnedTheory.map((item) => (
          <li className="Pinned-list" key={item}>
            {item} 
            <img src={xbutton} className="x-button"/>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default PinnedList;