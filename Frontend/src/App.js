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
import PinnedList from "./Components/PinnedList/PinnedList";
import Progress from "./Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import decode from "./decode_token";
import useLevelStore, { IP } from "./Model/frontEndStore";

import Lab1a1 from "./pages/Assignments/Lab1Assignments/Assign1/Assignment1Presenter";
import Lab1a2 from "./pages/Assignments/Lab1Assignments/Assign2/Assignment2Presenter";
import Lab1a3 from "./pages/Assignments/Lab1Assignments/Assign3/Assignment3Presenter";
import Lab1a4 from "./pages/Assignments/Lab1Assignments/Assign4/Assignment4Presenter";
import Lab1a5 from "./pages/Assignments/Lab1Assignments/Assign5/Assignment5Presenter";
import Lab1a6 from "./pages/Assignments/Lab1Assignments/Assign6/Assignment6Presenter";
import Lab1a7 from "./pages/Assignments/Lab1Assignments/Assign7/Assignment7Presenter";
import Lab1a9 from "./pages/Assignments/Lab1Assignments/Assign9/Assignment9Presenter";
import Lab1a8 from "./pages/Assignments/Lab1Assignments/Assign8/Assignment8Presenter";
import Lab1a10 from "./pages/Assignments/Lab1Assignments/Assign10/Assignment10Presenter";
import Lab1a11 from "./pages/Assignments/Lab1Assignments/Assign11/Assignment11Presenter";
import Lab1a12 from "./pages/Assignments/Lab1Assignments/Assign12/Assignment12Presenter";
import Lab1a13 from "./pages/Assignments/Lab1Assignments/Assign13/Assignment13Presenter";
import Lab1a14 from "./pages/Assignments/Lab1Assignments/Assign14/Assignment14Presenter";

import Lab2a15 from "./pages/Assignments/Lab2Assignments/Assign15/Assignment15Presenter";
import Lab2a16 from "./pages/Assignments/Lab2Assignments/Assign16/Assignment16Presenter";
import Lab2a17 from "./pages/Assignments/Lab2Assignments/Assign17/Assignment17Presenter";
import Lab2a18 from "./pages/Assignments/Lab2Assignments/Assign18/Assignment18Presenter";
import Lab2a19 from "./pages/Assignments/Lab2Assignments/Assign19/Assignment19Presenter";
import Lab2a20 from "./pages/Assignments/Lab2Assignments/Assign20/Assignment20Presenter";
import Lab2a21 from "./pages/Assignments/Lab2Assignments/Assign21/Assignment21Presenter";
import Lab2a22 from "./pages/Assignments/Lab2Assignments/Assign22/Assignment22Presenter";
import Lab2a23 from "./pages/Assignments/Lab2Assignments/Assign23/Assignment23Presenter";
import Lab2a28 from "./pages/Assignments/Lab2Assignments/Assign28/Assignment28Presenter";
import Lab3a2 from "./pages/Assignments/Lab3Assignments/Assign30/Assignment30Presenter";
import Lab3a3 from "./pages/Assignments/Lab3Assignments/Assign31/Assignment31Presenter";
import Lab2a24 from "./pages/Assignments/Lab2Assignments/Assign24/Assignment24Presenter";
import Lab2a25 from "./pages/Assignments/Lab2Assignments/Assign25/Assignment25Presenter";
import Lab2a26 from "./pages/Assignments/Lab2Assignments/Assign26/Assignment26Presenter";
import Lab2a27 from "./pages/Assignments/Lab2Assignments/Assign27/Assignment27Presenter";
import Lab3a42 from "./pages/Assignments/Lab3Assignments/Assign42/Assignment42Presenter";

import Lab3a29 from "./pages/Assignments/Lab3Assignments/Assign29/Assignment29Presenter";
import Lab3a30 from "./pages/Assignments/Lab3Assignments/Assign30/Assignment30Presenter";
import Lab3a31 from "./pages/Assignments/Lab3Assignments/Assign31/Assignment31Presenter";
import Lab3a32 from "./pages/Assignments/Lab3Assignments/Assign32/Assignment32Presenter";
import Lab3a33 from "./pages/Assignments/Lab3Assignments/Assign33/Assignment33Presenter";
import Lab3a34 from "./pages/Assignments/Lab3Assignments/Assign34/Assignment34Presenter";
import Lab3a35 from "./pages/Assignments/Lab3Assignments/Assign35/Assignment35Presenter";
import Lab3a37 from "./pages/Assignments/Lab3Assignments/Assign37/Assignment37Presenter";
import Lab3a41 from "./pages/Assignments/Lab3Assignments/Assign41/Assignment41Presenter";
import Lab3a6 from "./pages/Assignments/Lab3Assignments/Assign34/Assignment34Presenter";
import Lab3a36 from "./pages/Assignments/Lab3Assignments/Assign36/Assignment36Presenter";
import Lab3a38 from "./pages/Assignments/Lab3Assignments/Assign38/Assignment38Presenter";
import Lab3a39 from "./pages/Assignments/Lab3Assignments/Assign39/Assignment39Presenter";

import IDE from "./pages/Theory/Theoryparts/IDE";
import Lab1t1 from "./pages/Theory/Theoryparts/Lab1t1";
import Lab1t2 from "./pages/Theory/Theoryparts/Lab1t2";
import Lab1t3 from "./pages/Theory/Theoryparts/Lab1t3";
import Lab1t4 from "./pages/Theory/Theoryparts/Lab1t4";
import Lab1t5 from "./pages/Theory/Theoryparts/Lab1t5";
import Lab1t6 from "./pages/Theory/Theoryparts/Lab1t6";
import Lab1t7 from "./pages/Theory/Theoryparts/Lab1t7";
import Lab1t8 from "./pages/Theory/Theoryparts/Lab1t8";
import Lab1t9 from "./pages/Theory/Theoryparts/Lab1t9";
import Lab1t10 from "./pages/Theory/Theoryparts/Lab1t10";
import Lab1t11 from "./pages/Theory/Theoryparts/Lab1t11";
import Lab1t12 from "./pages/Theory/Theoryparts/Lab1t12";
import Lab1t13 from "./pages/Theory/Theoryparts/Lab1t13";
import Lab2t1 from "./pages/Theory/Theoryparts/Lab2t1";
import Lab2t2 from "./pages/Theory/Theoryparts/Lab2t2";
import Lab2t3 from "./pages/Theory/Theoryparts/Lab2t3";
import Lab2t4 from "./pages/Theory/Theoryparts/Lab2t4";
import Lab2t5 from "./pages/Theory/Theoryparts/Lab2t5";
import Lab2t6 from "./pages/Theory/Theoryparts/Lab2t6";
import Lab2t7 from "./pages/Theory/Theoryparts/Lab2t7";
import Lab2t8 from "./pages/Theory/Theoryparts/Lab2t8";
import Lab2t9 from "./pages/Theory/Theoryparts/Lab2t9";
import Lab2t10 from "./pages/Theory/Theoryparts/Lab2t10";
import Lab2t11 from "./pages/Theory/Theoryparts/Lab2t11";
import Lab2t12 from "./pages/Theory/Theoryparts/Lab2t12";
import Lab2t13 from "./pages/Theory/Theoryparts/Lab2t13";
import Lab3t1 from "./pages/Theory/Theoryparts/Lab3t1";
import Lab3t2 from "./pages/Theory/Theoryparts/Lab3t2";
import Lab3t3 from "./pages/Theory/Theoryparts/Lab3t3";
import Lab3t4 from "./pages/Theory/Theoryparts/Lab3t4";
import Lab3t5 from "./pages/Theory/Theoryparts/Lab3t5";
import Lab3t6 from "./pages/Theory/Theoryparts/Lab3t6";
import Lab3t7 from "./pages/Theory/Theoryparts/Lab3t7";
import Lab3t8 from "./pages/Theory/Theoryparts/Lab3t8";
import Lab3t9 from "./pages/Theory/Theoryparts/Lab3t9";
import Lab3t10 from "./pages/Theory/Theoryparts/Lab3t10";
import Lab3t11 from "./pages/Theory/Theoryparts/Lab3t11";
import Lab3t12 from "./pages/Theory/Theoryparts/Lab3t12";
import Lab3t13 from "./pages/Theory/Theoryparts/Lab3t13";
import Lab3a40 from "./pages/Assignments/Lab3Assignments/Assign40/Assignment40Presenter";
import Login from "./Components/LoginPage/Login";
import CreateAccount from "./Components/SignupPage/SignupPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import Scrollingbar from "./Components/Scrollingbar/scrollingbar";

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
      setLevel(Number(resJson.currentLevel));
      setName(String(resJson.firstName + " " + resJson.lastName));
      setID(Number(resJson.id));
      setPinned(resJson.pinnedItems);

      setProfilePicture(resJson.profilePicture);
    } catch (error) {
      console.error(error);
    }
  }

  const checkAuthenticated = async () => {
    try {
      const res = await fetch(IP + "/authentication/verify", {
        metod: "POST",
        headers: { token: localStorage.token }, // Tries to find local token
      });

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

  useEffect(() => {
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
            <Route
              path="/Lab1/1"
              element={
                isAuthenticated ? (
                  <Lab1a1 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/2"
              element={
                isAuthenticated ? (
                  <Lab1a2 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/3"
              element={
                isAuthenticated ? (
                  <Lab1a3 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/4"
              element={
                isAuthenticated ? (
                  <Lab1a4 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/5"
              element={
                isAuthenticated ? (
                  <Lab1a5 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/6"
              element={
                isAuthenticated ? (
                  <Lab1a6 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/7"
              element={
                isAuthenticated ? (
                  <Lab1a7 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/8"
              element={
                isAuthenticated ? (
                  <Lab1a8 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/9"
              element={
                isAuthenticated ? (
                  <Lab1a9 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/10"
              element={
                isAuthenticated ? (
                  <Lab1a10 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/11"
              element={
                isAuthenticated ? (
                  <Lab1a11 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/12"
              element={
                isAuthenticated ? (
                  <Lab1a12 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/13"
              element={
                isAuthenticated ? (
                  <Lab1a13 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab1/14"
              element={
                isAuthenticated ? (
                  <Lab1a14 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/Lab2/1"
              element={
                isAuthenticated ? (
                  <Lab2a15 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/2"
              element={
                isAuthenticated ? (
                  <Lab2a16 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/3"
              element={
                isAuthenticated ? (
                  <Lab2a17 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/4"
              element={
                isAuthenticated ? (
                  <Lab2a18 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/5"
              element={
                isAuthenticated ? (
                  <Lab2a19 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/6"
              element={
                isAuthenticated ? (
                  <Lab2a20 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/7"
              element={
                isAuthenticated ? (
                  <Lab2a21 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/8"
              element={
                isAuthenticated ? (
                  <Lab2a22 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/9"
              element={
                isAuthenticated ? (
                  <Lab2a23 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/10"
              element={
                isAuthenticated ? (
                  <Lab2a24 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/13"
              element={
                isAuthenticated ? (
                  <Lab2a27 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/11"
              element={
                isAuthenticated ? (
                  <Lab2a25 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/12"
              element={
                isAuthenticated ? (
                  <Lab2a26 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/14"
              element={
                isAuthenticated ? (
                  <Lab2a28 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/Lab3/6"
              element={
                isAuthenticated ? (
                  <Lab3a6 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/2"
              element={
                isAuthenticated ? (
                  <Lab3a2 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/3"
              element={
                isAuthenticated ? (
                  <Lab3a3 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/11"
              element={
                isAuthenticated ? (
                  <Lab2a25 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/12"
              element={
                isAuthenticated ? (
                  <Lab2a26 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab2/13"
              element={
                isAuthenticated ? (
                  <Lab2a27 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/14"
              element={
                isAuthenticated ? (
                  <Lab3a42 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/1"
              element={
                isAuthenticated ? (
                  <Lab3a29 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/2"
              element={
                isAuthenticated ? (
                  <Lab3a30 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/3"
              element={
                isAuthenticated ? (
                  <Lab3a31 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/4"
              element={
                isAuthenticated ? (
                  <Lab3a32 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/5"
              element={
                isAuthenticated ? (
                  <Lab3a33 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/6"
              element={
                isAuthenticated ? (
                  <Lab3a34 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/7"
              element={
                isAuthenticated ? (
                  <Lab3a35 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/9"
              element={
                isAuthenticated ? (
                  <Lab3a37 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/8"
              element={
                isAuthenticated ? (
                  <Lab3a36 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/10"
              element={
                isAuthenticated ? (
                  <Lab3a38 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/12"
              element={
                isAuthenticated ? (
                  <Lab3a40 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/13"
              element={
                isAuthenticated ? (
                  <Lab3a41 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/Lab3/11"
              element={
                isAuthenticated ? (
                  <Lab3a39 setAuth={setAuth} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route path="/theory/Lab1/1" element={<Lab1t1 />} />
            <Route path="/theory/Lab1/2" element={<Lab1t2 />} />
            <Route path="/theory/Lab1/3" element={<Lab1t3 />} />
            <Route path="/theory/Lab1/4" element={<Lab1t4 />} />
            <Route path="/theory/Lab1/5" element={<Lab1t5 />} />
            <Route path="/theory/Lab1/6" element={<Lab1t6 />} />
            <Route path="/theory/Lab1/7" element={<Lab1t7 />} />
            <Route path="/theory/Lab1/8" element={<Lab1t8 />} />
            <Route path="/theory/Lab1/9" element={<Lab1t9 />} />
            <Route path="/theory/Lab1/10" element={<Lab1t10 />} />
            <Route path="/theory/Lab1/11" element={<Lab1t11 />} />
            <Route path="/theory/Lab1/12" element={<Lab1t12 />} />
            <Route path="/theory/Lab1/13" element={<Lab1t13 />} />
            <Route path="/theory/Lab2/1" element={<Lab2t1 />} />
            <Route path="/theory/Lab2/2" element={<Lab2t2 />} />
            <Route path="/theory/Lab2/3" element={<Lab2t3 />} />
            <Route path="/theory/Lab2/4" element={<Lab2t4 />} />
            <Route path="/theory/Lab2/5" element={<Lab2t5 />} />
            <Route path="/theory/Lab2/6" element={<Lab2t6 />} />
            <Route path="/theory/Lab2/7" element={<Lab2t7 />} />
            <Route path="/theory/Lab2/8" element={<Lab2t8 />} />
            <Route path="/theory/Lab2/9" element={<Lab2t9 />} />
            <Route path="/theory/Lab2/10" element={<Lab2t10 />} />
            <Route path="/theory/Lab2/11" element={<Lab2t11 />} />
            <Route path="/theory/Lab2/12" element={<Lab2t12 />} />
            <Route path="/theory/Lab2/13" element={<Lab2t13 />} />
            <Route path="/theory/Lab3/1" element={<Lab3t1 />} />
            <Route path="/theory/Lab3/2" element={<Lab3t2 />} />
            <Route path="/theory/Lab3/3" element={<Lab3t3 />} />
            <Route path="/theory/Lab3/4" element={<Lab3t4 />} />
            <Route path="/theory/Lab3/5" element={<Lab3t5 />} />
            <Route path="/theory/Lab3/6" element={<Lab3t6 />} />
            <Route path="/theory/Lab3/7" element={<Lab3t7 />} />
            <Route path="/theory/Lab3/8" element={<Lab3t8 />} />
            <Route path="/theory/Lab3/9" element={<Lab3t9 />} />
            <Route path="/theory/Lab3/10" element={<Lab3t10 />} />
            <Route path="/theory/Lab3/11" element={<Lab3t11 />} />
            <Route path="/theory/Lab3/12" element={<Lab3t12 />} />
            <Route path="/theory/Lab3/13" element={<Lab3t13 />} />
            <Route path="/theory/Lab1/IDE" element={<IDE />} />

            <Route path="/Lab3/10" element={<Lab3a38 />} />

            <Route path="/Arrays" element={[<Scrollingbar />, <Theory />]} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
