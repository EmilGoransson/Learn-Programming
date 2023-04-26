import React, {Fragment, useState, useEffect}from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/aboutus";
import Examn from "./pages/exam";
import Theory from "./pages/theory";
import Profile from "./pages/profile";
import Class from "./pages/Assignments/Class";
import Method from "./pages/Assignments/Method";
import LoginPage from "./Components/LoginPage/Login";
import SignupPage from "./Components/SignupPage/SignupPage";

function App() {
  // Checks for generated token in browser session local storage
  const checkAuthenticated = async () => {
    try{
      const res = await fetch("http://localhost:3003/authentication/login", {
      metod: "POST",
      header: {jwt_token: localStorage.token} // Tries to find local token
      });

      const parseRespone = await res.json();
      // if the header respone is true (token exists or not)
      // If found - user is authenticated.
      parseRespone === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    }
    catch(error){
      console.error(error.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();  
  }, [])
  // Default state of authentication is false
  const[isAuthenticated, setIsAuthenticated] = React.useState(true);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }
/*
  const [message, setMessage] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [JSONmessage, setJSONmessage] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3003/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
*/
/*
  React.useEffect(() => {
    fetch("http://localhost:3003/mypage")
      .then((res) => res.json())
      .then((data) => setJSONmessage(data.JSONmessage));
  }, []);
*//*
  //const userid = "1";
  React.useEffect(() => {
    fetch(`http://localhost:3003/users/:userId`)    //Change (wildcard) userID something like               : `http://localhost:3003/users/${userid}`
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json()
      })
      .then((data) => setFirstName(data.firstName))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      })
  }, []);
*/
  /*React.useEffect(() => {
    fetch("http://localhost:3003/auth/login")
      .then((res) => res.json())
      .then((data) => setJSONmessage(data.JSONmessage));
      }, 
      []);

*/
  return (
    
   <BrowserRouter>
      <Fragment className="App" id="outer-container">
        <main id="page-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />

            <Route path="/exam" element={<Examn />} />
            <Route path="/labs" element={<MainContent />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element ={<LoginPage/>}/>
            <Route path="/register" element ={<SignupPage/>}/>
            <Route path="/Lab1/1" Component={Class} />
            <Route path="/Lab1/2" Component={Method} />
          </Routes>
        </main>
      </Fragment  >


    </BrowserRouter>
  );
}

export default App;
