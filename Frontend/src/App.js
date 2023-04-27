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
import Lab1a2 from "./pages/Assignments/Lab1Assignments/Assignment2Presenter";
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
            <Route path="/Lab1/2" Component={Lab1a2} />
            <Route path="/labs" Component={WelcomePage} />
            

          </Routes>
        </main>
      </div>

      
    </BrowserRouter>
  );
}

export default App;
