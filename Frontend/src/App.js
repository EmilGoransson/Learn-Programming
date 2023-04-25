import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/aboutus";
import Examn from "./pages/exam";
import Theory from "./pages/theory";
import Profile from "./pages/profile";
import Lab1a1 from "./pages/Assignments/Lab1Assignments/Assignment1Presenter";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  const noSidebarRoutes = ["/"];
  const [message, setMessage] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [JSONmessage, setJSONmessage] = React.useState(null);
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

  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
        {!noSidebarRoutes.includes(window.location.pathname) && <Sidebar />}
        <main id="page-wrap">
          <Routes>
            <Route path="" element={<WelcomePage />} />

            <Route
              path="/aboutus"
              element={
                <Aboutus
                  hej="hej"
                  title="test"
                  test={JSONmessage}
                  firstN={firstName}
                />
              }
            />
            
            <Route path="/exam" element={<Examn />} />
            <Route path="/labs" element={<MainContent />} />
            <Route path="/theory" element={<Theory />} />
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
