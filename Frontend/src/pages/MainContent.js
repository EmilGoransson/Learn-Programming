import "../Components/LevelRendering/ButtonContainer.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Aboutus from "./aboutus";
import Examn from "./exam";
import Labs from "./labs";
import Theory from "./theory";
import Profile from "./profile";
import Progress from "../Components/Sidebar/Progress";

import ButtonContainer from "../Components/LevelRendering/ButtonContainer.js";
import { lab1Levels } from "../Components/LevelRendering/Levels/lab1";
import { lab2Levels } from "../Components/LevelRendering/Levels/lab2";
import { lab3Levels } from "../Components/LevelRendering/Levels/lab3";

function MainContent() {
  return (
    <div>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="exam" element={<Examn />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ButtonContainer title="Lab 1" buttonLabels={lab1Levels} />
      <ButtonContainer title="Lab 2" buttonLabels={lab2Levels} />
      <ButtonContainer title="Lab 3" buttonLabels={lab3Levels} />
      <Progress />
    </div>
  );
}
export default MainContent;
