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
import Progress from "./Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";

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


  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
      
      

      <main id="page-wrap">
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/createaccount" element={!isAuthenticated ? <CreateAccount setAuth={setAuth}/> : <Navigate to="/main"/>} />
          <Route path="/main" element={isAuthenticated ? <MainContent setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/exam" element={isAuthenticated ? <Exam setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/labs" element={isAuthenticated ? <MainContent setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/theory" element={ isAuthenticated ? <Theory setAuth={setAuth} /> : <Navigate to="/login" />  }/>
          <Route path="/profile" element={isAuthenticated ? <Profile setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/main" />}/>
         
          <Route path="/aboutus" element={isAuthenticated ?  <Aboutus setAuth={setAuth} />: <Navigate to="/login" />}/>
         
          <Route path="/Arrays" element={[< Scrollingbar/> ,<Theory/>]}/>
         
          <Route path="/Lab1/1" element={[< Lab1a1/> ,<Sidebar/>,<TopBar/>,<PinnedList/>,<RightSideBar/>,<Progress/>,<Scrollingbar/>]}/>
         
          <Route path="/Lab1/2" Component={Lab1a2} />
          <Route path="/labs" Component={WelcomePage} />
          <Route path="/Arrays" element={[< Scrollingbar/> ,<Theory/>]}/>
          <Route path="/logout" Component={WelcomePage} />
        </Routes>
      </main>
    </div>

    
  </BrowserRouter>)
}

export default App;
