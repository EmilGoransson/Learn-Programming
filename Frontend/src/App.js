import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Progress from "./Components/Sidebar/Progress";
import "./Components/Sidebar/Progress.css";
import "./App.css";
import ButtonContainer from "./Components/LevelRendering/ButtonContainer";
import "./Components/LevelRendering/ButtonContainer.css";
import CodeRunner from "./Components/CodeRunner/Presenter/codeRunnerPresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizTemp from "./Components/Quizes/quiz";

function App() {
  const [message, setMessage] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3003/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    //DEMO QUIZ
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap"></div>
      <ButtonContainer
        title="Lab 1"
        buttonLabels={[
          "1 \n Class",
          "2 \nMethod",
          "3 \nSystem.out",
          "4 \nString",
          "5 \nVariables",
          "6 \nOperation",
          "7 \nIf-loop",
          "8 \nElse",
          "9 \nFor-loop",
          "10 \nFor-loop 2",
          "11 \nArray",
          "12 \nMatrix",
          "13 \nScanner",
          "14 \nFinal Boss",
        ]}
      />
      <ButtonContainer
        title="Lab 2"
        buttonLabels={[
          "Button 1",
          "Button 2",
          "Button 3",
          "Button 4",
          "Button 5",
          "Button 6",
          "Button 7",
          "Button 8",
          "Button 9",
          "Button 10",
          "Button 11",
          "Button 12",
          "Button 13",
          "Button 14",
        ]}
      />
      <ButtonContainer
        title="Lab 3"
        buttonLabels={[
          "1 Class",
          "2 Method",
          "Button 3",
          "Button 4",
          "Button 5",
          "Button 6",
          "Button 7",
          "Button 8",
          "Button 9",
          "Button 10",
          "Button 11",
          "Button 12",
          "Button 13",
          "Button 14",
        ]}
      />
      <Progress />
      {message}
    </div>

    //DEMO CodeRunner
    // <CodeRunner testCases={6} input={3} />

    //DEMO QUIZZ!!

    // <QuizTemp />
  );
}

export default App;
