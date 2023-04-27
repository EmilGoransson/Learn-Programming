import React, {Fragment, useState, useEffect}from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/Aboutus/aboutus";
import Exam from "./pages/exam";
import Theory from "./pages/Theory/Arrays/theory";
import Profile from "./pages/profile";
import Lab1a1 from "./pages/Assignments/Lab1Assignments/Assign1/Assignment1Presenter";
import Lab1a2 from "./pages/Assignments/Lab1Assignments/Assign2/Assignment2Presenter";
import LoginPage from "./Components/LoginPage/LoginPage";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import TopBar from "./Components/topBar/topBarPresenter";
import RightSideBar from "./Components/rightSideBar/rightSideBarPresenter";
import CurrentProgressBarPresenter from "./Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import { useEffect, useState } from "react";
import Scrollingbar from "./Components/Scrollingbar/scrollingbar";
import PinnedList from "./Components/PinnedList/PinnedList";

function App() {
  const noSidebarRoutes = ["/", "/login", "/createaccount", "/logout"];
  const [message, setMessage] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [JSONmessage, setJSONmessage] = React.useState(null);
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3003/users/:userId`).then((res) => res.json()), //Change (wildcard) userID something like: `http://localhost:3003/users/${userid}`
      fetch("http://localhost:3003/mypage").then((res) => res.json()),
      //fetch("http://localhost:3003/api").then((res) => res.json())
    ]).then(([data1, data2, data3]) => {
      setFirstName(data1.firstName);
      setLastName(data1.lastName);
      setEmail(data1.email);
      setJSONmessage(data2.JSONmessage);
      //setMessage(data3.message)
    });
  }, []);

  React.useEffect(() => {
    fetch("http://localhost:3003/mypage")
      .then((res) => res.json())
      .then((data) => setJSONmessage(data.JSONmessage));
  }, []);

  //const userid = "Lab1Assignments";
  React.useEffect(() => {
    fetch(`http://localhost:3003/users/:userId`) //Change (wildcard) userID something like               : `http://localhost:3003/users/${userid}`
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setFirstName(data.firstName))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  /*React.useEffect(() => {
    fetch("http://localhost:3003/mypage")
      .then((res) => res.json())
      .then((data) => setJSONmessage(data.JSONmessage));
      .then((data) => setTesting(data.testing));
  }, []);*/
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
/*
  useEffect(() => {
    const body = document.body;
    const sidebar = document.querySelector(".sidenav");

    if (darkMode) {
      body.classList.add("dark");
      sidebar.classList.add("dark");
    } else {
      body.classList.remove("dark");
      sidebar.classList.remove("dark");
    }
  }, [darkMode]);
*/
  return (
    
    
    <BrowserRouter>
    <div className="App" id="outer-container">
    {!noSidebarRoutes.includes(window.location.pathname) && <Sidebar />}
      <main id="page-wrap">
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/createaccount" element={!isAuthenticated ? <SignupPage setAuth={setAuth}/> : <Navigate to="/main"/>} />
          <Route path="/main" element={isAuthenticated ? <MainContent setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/exam" element={isAuthenticated ? <Examn setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/labs" element={isAuthenticated ? <MainContent setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/theory" element={isAuthenticated ? <Theory setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/profile" element={isAuthenticated ? <Profile setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/main" />}/>
          <Route path="/aboutus" element={isAuthenticated ? <Aboutus setAuth={setAuth} /> : <Navigate to="/login" />}/>
        </Routes>
      </main>
    </div>

    
  </BrowserRouter>)
}

export default App;
