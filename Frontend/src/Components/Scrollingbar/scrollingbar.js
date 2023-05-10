import React from "react";
import "./scrollingbar.css";
import { NavLink } from "react-router-dom";
import { lab1Levels } from "../LevelRendering/Levels/lab1";
import { lab2Levels } from "../LevelRendering/Levels/lab2";
import { lab3Levels } from "../LevelRendering/Levels/lab3";
const Scrollingbar = () => {
  function renderLevels(labImport) {
    const currentLevel = labImport.slice(-1)[0];

    return labImport.map((label, index) => {
      const [_, string] = label.split("\n");
      return (
        <li key={index}>
          <NavLink
            to={`/theory/Lab${currentLevel}/${index + 1}`}
            activeClassName="active"
            className="my-link"
          >
            {string == "Final Boss" ? null : string}
          </NavLink>
        </li>
      );
    });
  }

  return (
    <div className="sidebar no-scroll-bar">
      <ul>
        <br></br>
        <div className="bg-custom-color text-textGray">
          Lab 1{renderLevels(lab1Levels)}
        </div>

        <div className="bg-custom-color text-textGray">
          Lab 2 {renderLevels(lab2Levels)}
        </div>
        <div className="bg-custom-color text-textGray">
          Lab 3 {renderLevels(lab3Levels)}
        </div>
      </ul>
    </div>
  );
};

export default Scrollingbar;
