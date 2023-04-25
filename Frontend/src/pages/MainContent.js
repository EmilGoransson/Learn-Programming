import "../Components/LevelRendering/ButtonContainer.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Aboutus from "./aboutus";
import Examn from "./exam";
import Labs from "./labs";
import Theory from "./theory";
import Profile from "./profile";

import ButtonContainer from '../Components/LevelRendering/ButtonContainer.js';
import { lab2Levels} from "../Components/LevelRendering/Levels/lab2";
import { lab1Levels} from "../Components/LevelRendering/Levels/lab1";
import { lab3Levels} from "../Components/LevelRendering/Levels/lab3";
function MainContent(){
    return(
        <div>
            <ButtonContainer
        title="Lab 1"
        buttonLabels={lab1Levels}
        linkTitle="Lab1"
        
      />
      <ButtonContainer
        title="Lab2"
        buttonLabels={lab2Levels}
        linkTitle="Lab2"
      />
      <ButtonContainer
        title="Lab3"
        buttonLabels={lab3Levels}
        linkTitle="Lab3"
      />
        </div>
    );
}
export default MainContent;
