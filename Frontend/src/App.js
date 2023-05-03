import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/Aboutus/aboutus";
import Exam from "./pages/exam";
import Theory from "./pages/Theory/Arrays/theory";
import Profile from "./pages/profile";
import Lab1a1 from "./pages/Assignments/Lab1Assignments/Assign1/Assignment1Presenter";
import Lab1a2 from "./pages/Assignments/Lab1Assignments/Assign2/Assignment2Presenter";
import Login from "./Components/LoginPage/Login";
import CreateAccount from "./Components/SignupPage/SignupPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import TopBar from "./Components/topBar/topBarPresenter";
import RightSideBar from "./Components/rightSideBar/rightSideBarPresenter";
import CurrentProgressBarPresenter from "./Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Scrollingbar from "./Components/Scrollingbar/scrollingbar";
import PinnedList from "./Components/PinnedList/PinnedList";
import decode from "./decode_token";
import useLevelStore from "./Model/frontEndStore";

function App() {
  const noSidebarRoutes = ["/", "/createaccount", "/logout"];
  const [darkMode, setDarkMode] = useState(false);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        "http://130.229.172.67:3003/authentication/verify",
        {
          metod: "POST",
          headers: {token : localStorage.token},
        }
      );

      const parseRespone = await res.json();

      // if the header respone is true (token exists or not)
      // If found - user is authenticated.
      parseRespone === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  //Set functions for model
  const setLevel = useLevelStore(state => state.setLevel);
  const setName = useLevelStore(state => state.setName);
  const setID = useLevelStore(state => state.setID);
  useEffect(() => {
    checkAuthenticated();
    if (isAuthenticated) {
      //gets information about user from token
      const first = decode(localStorage.token).user.firstName;
      const last = decode(localStorage.token).user.lastName;
      const id = decode(localStorage.token).user.id;
      const level = decode(localStorage.token).user.currentLevel;

      //sets correct level, name and ID in model for current user decoded token
      const name = String(first) + " " + String(last);
      setLevel(Number(level));
      setName(String(name));
      setID(Number(id));
    
      console.log("All info from token:\n First Name: "  + first + "\n Last Name: " + last + "\n ID: " + id + "\n Current Level: " + level);
    }
  });
  // Default state of authentication is false
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
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
      <div className={`App ${darkMode ? "dark" : ""}`} id="outer-container">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        {!noSidebarRoutes.includes(window.location.pathname) && (
          <div>
            {" "}
            <TopBar></TopBar>
            <RightSideBar></RightSideBar>
            <PinnedList></PinnedList>
            <CurrentProgressBarPresenter></CurrentProgressBarPresenter>
            <Sidebar className={`Sidebar ${darkMode ? "dark" : ""}`} />
          </div>
        )}

        <main id="page-wrap">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/createaccount"
              element={
                !isAuthenticated ? (
                  <CreateAccount setAuth={setAuth} />
                ) : (
                  <Navigate to="/main" />
                )
              }
            />
            <Route
              path="/main"
              element={
                isAuthenticated ? (
                  <MainContent setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/exam"
              element={
                isAuthenticated ? (
                  <Exam setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/labs"
              element={
                isAuthenticated ? (
                  <MainContent setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/theory"
              element={
                isAuthenticated ? (
                  <Theory setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? (
                  <Profile setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login setAuth={setAuth} />
                ) : (
                  <Navigate to="/main" />
                )
              }
            />
            <Route
              path="/aboutus"
              element={
                isAuthenticated ? (
                  <Aboutus setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/Lab1/1" Component={Lab1a1} />
            <Route path="/Lab1/2" Component={Lab1a2} />
            <Route path="/labs" Component={WelcomePage} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
