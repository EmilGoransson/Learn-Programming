import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoUser } from "./user.svg";
import { ReactComponent as LogoLab } from "./terminal.svg";
import { ReactComponent as LogoExam } from "./edit-2.svg";
import { ReactComponent as LogoTheory } from "./book.svg";
import { ReactComponent as LogoUs } from "./users.svg";

const Sidebar = () => {
  return (
    <div className="sidenav mt-10 bg-[1B2432] rounded-3xl pb-96">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <div className="nav-Image -mt-6">
        <img
          src="https://i.imgur.com/xj9BUtI.png"
          className=""
          alt="My Image"
        />
      </div>
      <NavLink to="/labs" activeClassName="active">
        <div className="sidebar-Item align-middle d-flex gap-2 align-items-center pr-3 pl-3 rounded-3xl">
          <LogoLab />
          <span>Overview</span>
        </div>
      </NavLink>
      <NavLink to="/exam" activeClassName="active">
        <div className="sidebar-Item align-middle d-flex gap-2 align-items-center pr-10 pl-3 rounded-3xl">
          <LogoExam /> Exams
        </div>
      </NavLink>
      <NavLink to="/theory" activeClassName="active">
        <div className="sidebar-Item align-middle d-flex gap-2 align-items-center pr-10 pl-3 rounded-3xl">
          <LogoTheory /> Theory
        </div>
      </NavLink>
      <NavLink to="/profile" activeClassName="active">
        <div className="sidebar-Item align-middle d-flex gap-2 align-items-center pr-10 pl-3 rounded-3xl">
          <LogoUser />
          Profile
        </div>
      </NavLink>
      <NavLink to="/aboutus" activeClassName="active">
        <div className="sidebar-Item align-middle d-flex gap-2 align-items-center pr-8 pl-3 rounded-3xl">
          <LogoUs /> Contact
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
