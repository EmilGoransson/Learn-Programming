import React from "react";
import "./scrollingbar.css";
import { NavLink } from "react-router-dom";


const LinkWrapper = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};






const Scrollingbar = () => {
  return (
    <div className="sidebar">
      <ul>
      <li>
        <li>Theory</li>
        <LinkWrapper to="#arrays">
        <NavLink to= "/Arrays" activeClassName ="active">
            Arrays
        </NavLink>
        </LinkWrapper>
        </li>
        <li>
          <LinkWrapper tp="#variables">
           <NavLink to= "/Variables" activeClassName ="active">
            Variables
        </NavLink>
        </LinkWrapper>
        </li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
        <li>Item 11</li>
        <li>Item 12</li>
        <li>Item 13</li>
        <li>Item 14</li>
        <li>Item 15</li>
        <li>Item 16</li>
        <li>Item 17</li>
        <li>Item 18</li>
        <li>Item 19</li>
        <li>Item 20</li>
      </ul>
    </div>
  );
};

export default Scrollingbar;