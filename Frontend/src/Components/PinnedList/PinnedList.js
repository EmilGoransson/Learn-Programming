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
    <div className="Pinned-container h-80 -mt-32 w-40 rounded-xl z-20">
      <h2 className="Pinned-title rounded-sm">Pinned</h2>
      <ul className="ui-test text-center">
        {pinnedTheory.length > 0 ? (
          pinnedTheory.map((item) => (
            <li
              className="Pinned-list flex justify-end items-center z-10"
              key={item}
            >
              {item}
              <img
                src={xbutton}
                className="x-button cursor-click"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item)}
              />
            </li>
          ))
        ) : (
          <li className="Pinned-list text-center">Nothing here</li>
        )}
      </ul>
    </div>
  );
}

export default PinnedList;
