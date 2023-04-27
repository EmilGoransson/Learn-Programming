import React, {Fragment, useState, useEffect}from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/aboutus/aboutus";
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
  
import Lab1a1 from "./pages/Assignments/Lab1Assignments/Assignment1Presenter";
import LoginPage from "./Components/LoginPage/LoginPage";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  const noSidebarRoutes = ["/", "/login", "/createaccount","/logout"];
  const [message, setMessage] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [JSONmessage, setJSONmessage] = React.useState(null);
  
  React.useEffect(() => {
    Promise.all([
      fetch(`http://localhost:3003/users/:userId`).then((res) => res.json()),   //Change (wildcard) userID something like: `http://localhost:3003/users/${userid}`
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
      <div className="App" id="outer-container">
        {!noSidebarRoutes.includes(window.location.pathname) && <Sidebar />}
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
            
            <Route path="/exam" element={<Examn />} />
            <Route path="/labs" element={<MainContent />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/profile" element={<Profile firstN={firstName} lastN={lastName} mail={email}/>} />
            <Route path="/Lab1/1" Component={Lab1a1} />
            <Route path="/Lab1/2" Component={Lab1a1} />
            <Route path="/labs" Component={WelcomePage} />
            

          </Routes>
        </main>
      </div>

      
    </BrowserRouter>
  );
}

export default App;
