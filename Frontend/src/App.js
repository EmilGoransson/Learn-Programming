import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Components/Sidebar/Progress.css";
import "./App.css";


import LoginPage from "./Components/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import ButtonContainer from "./Components/LevelRendering/ButtonContainer";
import "./Components/LevelRendering/ButtonContainer.css";
import CodeRunner from "./Components/CodeRunner/Presenter/codeRunnerPresenter";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizTemp from "./Components/Quizes/quiz";
import {lab1Levels} from "./Components/LevelRendering/Levels/lab1";
import {lab2Levels} from "./Components/LevelRendering/Levels/lab2";
import {lab3Levels} from "./Components/LevelRendering/Levels/lab3";
import {mainString} from "./Components/CodeRunner/mainClassString";
import {Routes, Route, BrowserRouter, Link, NavLink} from "react-router-dom";
import MainContent from './pages/MainContent';




import Aboutus from './pages/aboutus';
import Examn from './pages/exam';
import Labs from './pages/labs';
import Theory from './pages/theory';
import Profile from './pages/profile';

function App() {
  const [message, setMessage] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3003/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <BrowserRouter>
    <div className="App" id="outer-container">
      
      <Sidebar/>
      <main id="page-wrap">
        <Routes>
          <Route path ="/" element= {<MainContent/>} />
    
            <Route path="/aboutus" element={<Aboutus hej ="hej" title="test"/>} />
            <Route path="/exam" element={<Examn />} />
            <Route path="/labs" element={<MainContent />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/profile" element={<Profile />} />
            </Routes>
        
      
      </main>
      </div>

      {message}
    </BrowserRouter>
  );
}

export default App;
