import React from 'react';
import logo from './image.png';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <img src={logo} alt='Logo' />
      <a className="menu-item" href="/profile">
        Profile
      </a>
      <a className="menu-item" href="/labs">
        Labs
      </a>
      <a className="menu-item" href="/exam">
        Exam
      </a>
      <a className="menu-item" href="/theory">
        Theory
      </a>
      <a className="menu-item" href="/about-us">
        About us
      </a>
    </Menu>
  );
};