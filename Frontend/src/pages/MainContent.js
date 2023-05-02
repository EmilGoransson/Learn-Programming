import "../Components/LevelRendering/ButtonContainer.css";
import ButtonContainer from "../Components/LevelRendering/ButtonContainer.js";
import { lab2Levels } from "../Components/LevelRendering/Levels/lab2";
import { lab1Levels } from "../Components/LevelRendering/Levels/lab1";
import { lab3Levels } from "../Components/LevelRendering/Levels/lab3";
import ProgressStar from "../Components/ProgressInStar/Presenter/ProgressInStarPresenter";
import Progress from "../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import RightSideBar from "../Components/rightSideBar/rightSideBarPresenter";
import TopBar from "../Components/topBar/topBarPresenter";
import PinnedList from "../Components/PinnedList/PinnedList";

function MainContent() {
  return (
    <div>
      <div></div>

      <ButtonContainer
        title="Lab 1"
        buttonLabels={lab1Levels}
        linkTitle="Lab1"
        labNumber="1"
      />
      <ButtonContainer
        title="Lab 2"
        buttonLabels={lab2Levels}
        linkTitle="Lab2"
        labNumber="2"
      />
      <ButtonContainer
        title="Lab 3"
        buttonLabels={lab3Levels}
        linkTitle="Lab3"
        labNumber="3"
      />
    </div>
  );
}
export default MainContent;
