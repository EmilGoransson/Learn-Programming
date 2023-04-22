
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
import {lab1Levels} from "./Components/LevelRendering/Levels/lab1";
import {lab2Levels} from "./Components/LevelRendering/Levels/lab2";
import {lab3Levels} from "./Components/LevelRendering/Levels/lab3";
import {mainString} from "./Components/CodeRunner/mainClassString";


function App() {
    const [message, setMessage] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3003/api")
            .then((res) => res.json())
            .then((data) => setMessage(data.message));
    }, []);

    return (

        <div className="App" id="outer-container">
            <div id="page-wrap" className="align-content-center"></div>
            <QuizTemp></QuizTemp>


            {/*} <ButtonContainer
                title="Lab 1"
                buttonLabels={lab1Levels}
            />
            <ButtonContainer
                title="Lab 2"
                buttonLabels={lab2Levels}
            />
            <ButtonContainer
                title="Lab 3"
                buttonLabels={lab3Levels}
            />
            <Progress/>
            {message} */}
            <CodeRunner input={3} testCases={6} preMadeText={mainString}/>
            <CodeRunner input={1} testCases={5}/>

        </div>


    );

}

export default App;
