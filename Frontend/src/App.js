import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import './Components/Sidebar/Progress.css';
import './App.css';
import './Components/LevelRendering/ButtonContainer.css'
import { BrowserRouter, Routes, Route, Link, NavLink}  from "react-router-dom";

import MainContent from './pages/MainContent';

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
      
      <Sidebar/>
      <main id="page-wrap">
      <MainContent/>
      </main>
      </div>
     
      
      {message}
      

    </BrowserRouter>
  );
}

export default App;

