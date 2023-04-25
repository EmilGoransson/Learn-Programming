import "../Components/LevelRendering/ButtonContainer.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Aboutus from "./aboutus";
import Examn from "./exam";
import Labs from "./labs";
import Theory from "./theory";
import Profile from "./profile";

import ButtonContainer from "../Components/LevelRendering/ButtonContainer.js";
import { lab2Levels } from "../Components/LevelRendering/Levels/lab2";
import { lab1Levels } from "../Components/LevelRendering/Levels/lab1";
import { lab3Levels } from "../Components/LevelRendering/Levels/lab3";
import ProgressStar from "../Components/ProgressInStar/Presenter/ProgressInStarPresenter";
import Progress from "../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Lab1 from "../Lab1";
function MainContent() {
  return (
    <div>
      <div>
        <Progress></Progress>
        <ProgressStar></ProgressStar>
        <ButtonContainer
          title="Lab 1"
          linkTitle="Lab1"
          buttonLabels={lab1Levels}
        />

        <ButtonContainer title="Lab 2" buttonLabels={lab2Levels} />

        <ButtonContainer title="Lab 3" buttonLabels={lab3Levels} />
      </div>
    </div>
  );
}
export default MainContent;
