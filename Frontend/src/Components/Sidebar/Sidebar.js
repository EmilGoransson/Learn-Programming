import React from "react";
import "./Sidebar.css";

import {NavLink } from "react-router-dom";
import { ReactComponent as LogoUser } from "./user.svg"
import { ReactComponent as LogoLab } from "./terminal.svg"
import { ReactComponent as LogoExam } from "./edit-2.svg"
import { ReactComponent as LogoTheory } from "./book.svg"
import { ReactComponent as LogoUs } from "./users.svg"

const Sidebar = () => {
  return (
    <div className="sidenav">
      <img src="https://i.imgur.com/5sZenqF.png" alt="My Image" />
      <NavLink to="/labs" activeClassName="active">
        <LogoLab/> Labs
      </NavLink>
      <NavLink to="/exam" activeClassName="active">
        <LogoExam/> Exams
      </NavLink>
      <NavLink to="/theory" activeClassName="active">
        <LogoTheory/> Theory
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <LogoUser/> 
        Profile
      </NavLink>
      <NavLink to="/aboutus" activeClassName="active">
        <LogoUs/> About us
      </NavLink>
    </div>
  );
};

export default Sidebar;
