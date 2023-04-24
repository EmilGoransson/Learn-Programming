import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./Components/Sidebar/Progress.css";
import "./App.css";
import "./Components/LevelRendering/ButtonContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";
import MainContent from "./pages/MainContent";
import Aboutus from "./pages/aboutus";
import Examn from "./pages/exam";
import Theory from "./pages/theory";
import Profile from "./pages/profile";

function App() {
  const [message, setMessage] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3003/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
        <Sidebar />
        <main id="page-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />

            <Route
              path="/aboutus"
              element={<Aboutus hej="hej" title="test" />}
            />
            <Route path="/exam" element={<Examn />} />
            <Route path="/labs" element={<MainContent />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>

      {message}
    </BrowserRouter>
  );
}

export default App;
