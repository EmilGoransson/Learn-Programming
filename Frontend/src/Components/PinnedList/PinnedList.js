import React from "react";
import useLevelStore from "../../Model/frontEndStore";
import "./PinnedList.css";
import xbutton from "./x-button.png"; // import the image file

function PinnedList() {
  const removePinned = useLevelStore((state) => state.removePinned);
  const pinnedTheory = useLevelStore((state) => state.pinnedTheory);

  function removeItem(item) {
    removePinned(item);
  }

  if (pinnedTheory) {
    return (
      <div className="Pinned-container h-80 -mt-32 w-40 rounded-xl">
        <h2 className="Pinned-title rounded-sm">Pinned</h2>
        <ul className="ui-test">
          {pinnedTheory.map((item) => (
            <li className="Pinned-list z-10" key={item}>
              <img
                src={xbutton}
                className="x-button cursor-click"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item)}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PinnedList;
