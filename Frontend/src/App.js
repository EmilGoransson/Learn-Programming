import React, {Fragment, useState, useEffect}from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/aboutus";
import Examn from "./pages/exam";
import Theory from "./pages/theory";
import Profile from "./pages/profile";
import Class from "./pages/Assignments/Class";
import Method from "./pages/Assignments/Method";
import LoginPage from "./Components/LoginPage/Login";
import SignupPage from "./Components/SignupPage/SignupPage";
import Login from "./Components/LoginPage/Login";

function App() {
  // Checks for generated token in browser session local storage
  const checkAuthenticated = async () => {
    try{
      const res = await fetch("http://localhost:3003/authentication/verify", {
      metod: "POST",
      headers: {token: localStorage.token} // Tries to find local token
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
  const[isAuthenticated, setIsAuthenticated] = React.useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }
  
  return (
    
    <BrowserRouter>
    <div className="App" id="outer-container">
      <main id="page-wrap">
        <Routes>
          <Route path="/register" element={!isAuthenticated ? <SignupPage setAuth={setAuth}/> : <Navigate to="/"/>} />
          <Route path="/" element={isAuthenticated ? <MainContent setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/exam" element={isAuthenticated ? <Examn setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/labs" element={isAuthenticated ? <MainContent setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/theory" element={isAuthenticated ? <Theory setAuth={setAuth}/> : <Navigate to="/login"/>}/>
          <Route path="/login" element={!isAuthenticated ? <LoginPage setAuth={setAuth} /> : <Navigate to="/" />}/>
        </Routes>
      </main>
    </div>

    
  </BrowserRouter>)
}

export default App;
