import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/aboutus/aboutus";
import Examn from "./pages/exam";
import Theory from "./pages/theory";
import Profile from "./pages/profile";
import Lab1a1 from "./pages/Assignments/Lab1Assignments/Assignment1Presenter";
import LoginPage from "./Components/LoginPage/LoginPage";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { useEffect, useState } from "react";
import Scrollingbar from "./Components/scrolling bar/scrollingbar";


function App() {
  const noSidebarRoutes = ["/", "/login", "/createaccount","/logout"];
  const [message, setMessage] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [JSONmessage, setJSONmessage] = React.useState(null);
  const[darkMode,setDarkMode]=useState(false);
  React.useEffect(() => {
    fetch("http://localhost:3003/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
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

  return (
    
    <BrowserRouter>
      <div className={`App ${darkMode ? "dark" : ""}`} id="outer-container">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        {!noSidebarRoutes.includes(window.location.pathname) && (<Sidebar className={`Sidebar ${darkMode ? "dark" : ""}`} />)}
        <main id="page-wrap">
          <Routes>
            <Route path="" element={<WelcomePage />} />

            <Route path="/aboutus"
              element={
                <Aboutus
                  hej="hej"
                  title="test"
                  test={JSONmessage}
                  firstN={firstName}
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/logout" element={<WelcomePage/>}  />
            <Route path="/Arrays" element={<Theory/>}/>
            
            <Route path="/exam" element={<Examn />} />
            <Route path="/labs" element={<MainContent />} />
            <Route path="/theory" element={< Scrollingbar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Lab1/1" Component={Lab1a1} />
            <Route path="/Lab1/2" Component={Lab1a1} />
            <Route path="/labs" Component={WelcomePage} />
            

          </Routes>
        </main>
      </div>

      {message}
    </BrowserRouter>
  );
}

export default App;
