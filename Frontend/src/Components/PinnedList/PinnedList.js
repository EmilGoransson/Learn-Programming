import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import the Link component from React Router
import useLevelStore from "../../Model/frontEndStore";
import "./PinnedList.css";
import xbutton from "./x-button.png"; // import the image file
import { lab1Levels } from "../LevelRendering/Levels/lab1";
import { lab2Levels } from "../LevelRendering/Levels/lab2";
import { lab3Levels } from "../LevelRendering/Levels/lab3";

function PinnedList() {
  const removePinned = useLevelStore((state) => state.removePinned);
  const pinnedTheory = useLevelStore((state) => state.pinnedTheory);

  function removeItem(item) {
    removePinned(item);
  }

  if (pinnedTheory) {
    return (
      <div className="Pinned-container h-80 -mt-24 w-40 rounded-xl">
        <h2 className="Pinned-title rounded-sm">Pinned</h2>
        <ul className="ui-test">
          {pinnedTheory.map((item) => (
            <li className="Pinned-list z-10" key={item}>
              <img
                src={xbutton}
                className="x-button cursor-click transition-transform duration-100ms hover:scale-110"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item)}
              />
              <Link
                to={`/${getItemRouteAutomated(item)}`}
                className="custom-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function getItemRouteAutomated(item) {
    let route = "";
    lab1Levels.some((label, index) => {
      const [level, string] = label.split("\n");
      if (string == item) {
        route = `Lab1/${index + 1}`;
        return true;
      }
    });
    lab2Levels.some((label, index) => {
      const [level, string] = label.split("\n");
      if (string == item) {
        route = `Lab2/${index + 1}`;
        return true;
      }
    });
    lab3Levels.some((label, index) => {
      const [level, string] = label.split("\n");
      if (string == item) {
        route = `Lab3/${index + 1}`;
        return true;
      }
    });
    return route;
  }
}

export default PinnedList;
