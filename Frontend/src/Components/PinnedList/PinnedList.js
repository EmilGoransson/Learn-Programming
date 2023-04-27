import React from "react";
import useLevelStore from "../../Model/frontEndStore";
import "./PinnedList.css";
import xbutton from "./x-button.png"; // import the image file
//TODO: ADD FUNCTIONALITY TO REMOVE ITEMS FROM PINNED LIST
function PinnedList() {
  const removePinned = useLevelStore((state) => state.removePinned);
  const pinnedTheory = useLevelStore((state) => state.pinnedTheory);

  function removeItem(item) {
    console.log(item);
    removePinned(item);
  }

  return (
    <div className="Pinned-container">
      <h2 className="Pinned-title">Pinned</h2>
      <ul>
        {pinnedTheory.map((item) => (
          <li className="Pinned-list" key={item}>
            {item}
            <img
              src={xbutton}
              className="x-button"
              onClick={removeItem(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PinnedList;
