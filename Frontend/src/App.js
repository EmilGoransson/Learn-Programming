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
import Lab1a3 from "./pages/Assignments/Lab1Assignments/Assign3/Assignment3Presenter";
import Lab1a4 from "./pages/Assignments/Lab1Assignments/Assign4/Assignment4Presenter";
import Lab1a5 from "./pages/Assignments/Lab1Assignments/Assign5/Assignment5Presenter";
import Lab1a6 from "./pages/Assignments/Lab1Assignments/Assign6/Assignment6Presenter";
import Lab1a7 from "./pages/Assignments/Lab1Assignments/Assign7/Assignment7Presenter";
import Lab2a15 from "./pages/Assignments/Lab2Assignments/Assign15/Assignment15Presenter";
import Lab1a8 from "./pages/Assignments/Lab1Assignments/Assign8/Assignment8Presenter";
import Lab1a10 from "./pages/Assignments/Lab1Assignments/Assign10/Assignment10Presenter";
import Lab1a11 from "./pages/Assignments/Lab1Assignments/Assign11/Assignment11Presenter";
import Lab1a12 from "./pages/Assignments/Lab1Assignments/Assign12/Assignment12Presenter";
import Lab1a13 from "./pages/Assignments/Lab1Assignments/Assign13/Assignment13Presenter";
import Lab1a9 from "./pages/Assignments/Lab1Assignments/Assign9/Assignment9Presenter";
import Lab1a14 from "./pages/Assignments/Lab1Assignments/Assign14/Assignment14Presenter";
import Login from "./Components/LoginPage/Login";
import CreateAccount from "./Components/SignupPage/SignupPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Scrollingbar from "./Components/Scrollingbar/scrollingbar";


import PinnedList from "./Components/PinnedList/PinnedList";
import Progress from "./Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import decode from "./decode_token";
import useLevelStore, {IP} from "./Model/frontEndStore";

function App() {

    const setLevel = useLevelStore((state) => state.setLevel);
    const setName = useLevelStore((state) => state.setName);
    const setID = useLevelStore((state) => state.setID);
    const setProfilePicture = useLevelStore((state) => state.setProfilePic);
    const setPinned = useLevelStore((state) => state.setPinned);
    async function setData() {
        try {
            const res = await fetch(IP + "/authentication/getInfo", {
                method: "GET",
                headers: {
                    id: decode(localStorage.token).user.id,
                    token: localStorage.token,
                },
            });
            const resJson = await res.json();
            console.log(resJson.currentLevel);
            setLevel(Number(resJson.currentLevel));
            setName(String((resJson.firstName + " " + resJson.lastName)));
            setID((Number(resJson.id)));
            setPinned(resJson.pinnedItems);

            setProfilePicture(resJson.profilePicture);

            console.log(resJson);
        } catch (error) {
            console.error(error);
        }
    }

  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        IP + "/authentication/verify",
        {
          metod: "POST",
          headers: { token: localStorage.token }, // Tries to find local token
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

  useEffect(  () => {
      checkAuthenticated();
      if (isAuthenticated) {
          setData();
          const id = decode(localStorage.token).user.id;
          setID(Number(id));
      }
  
  });
  // Default state of authentication is false
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <BrowserRouter>
      <div>
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
                  <div>
                    <Theory setAuth={setAuth} />
                    <Scrollingbar />
                  </div>
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
            <Route path="/Lab1/1" element={<Lab1a1 />} />
            <Route path="/Lab1/2" element={<Lab1a2 />} />
            <Route path="/Lab1/3" element={<Lab1a3 />} />
            <Route path="/Lab1/4" element={<Lab1a4 />} />
            <Route path="/Lab1/5" element={<Lab1a5 />} />
            <Route path="/Lab1/6" element={<Lab1a6 />} />
            <Route path="/Lab1/7" element={<Lab1a7 />} />
            <Route path="/Lab1/8" element={<Lab1a8 />} />
            <Route path="/Lab1/9" element={<Lab1a9 />} />
            <Route path="/Lab1/10" element={<Lab1a10 />} />
            <Route path="/Lab1/11" element={<Lab1a11 />} />
            <Route path="/Lab1/12" element={<Lab1a12 />} />
            <Route path="/Lab1/13" element={<Lab1a13 />} />
            <Route path="/Lab1/14" element={<Lab1a14 />} />

            <Route path="/Lab2/1" element={<Lab2a15 />} />

            <Route path="/Arrays" element={[<Scrollingbar />, <Theory />]} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
