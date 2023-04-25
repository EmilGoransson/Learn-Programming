import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFlask,
  faBook,
  faPencilAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidenav shadow-xl">
      <img src="https://i.imgur.com/5sZenqF.png" alt="My Image" />
      <NavLink to="/profile" activeClassName="active">
        <FontAwesomeIcon icon={faUser} /> Profile
      </NavLink>
      <NavLink to="/labs" activeClassName="active">
        <FontAwesomeIcon icon={faFlask} /> Labs
      </NavLink>
      <NavLink to="/exam" activeClassName="active">
        <FontAwesomeIcon icon={faBook} /> Previous Exams
      </NavLink>
      <NavLink to="/theory" activeClassName="active">
        <FontAwesomeIcon icon={faPencilAlt} /> Theory
      </NavLink>
      <NavLink to="/aboutus" activeClassName="active">
        <FontAwesomeIcon icon={faUsers} /> About us
      </NavLink>
    </div>
  );
};

export default Sidebar;
