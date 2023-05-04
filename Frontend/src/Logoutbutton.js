import React from 'react';
import { Link } from 'react-router-dom';
import './pages/profile.css';

function Logoutbutton() {
  const handleLogoutClick = () => {
    localStorage.removeItem("token");
};

  return (
    <div className="buttonslog">
    <Link to={'/logout'}>
        <button className="logoutbut" onClick={handleLogoutClick}>
            Logout
        </button>
    </Link>
  </div>
  );
}

export default Logoutbutton;
