import React from "react";
import "./scrollingbar.css";
import { NavLink } from "react-router-dom";

const Scrollingbar = () => {
  return (
    <div className="sidebar no-scroll-bar">
      <ul>
        <div className="bg-lightBlueGray  text-textGray">
          <li>
            <li>Theory</li>
            <NavLink to="/Arrays" activeClassName="active">
              Arrays
            </NavLink>
          </li>

          <li>Item 2</li>
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
        </div>
      </ul>
    </div>
  );
};

export default Scrollingbar;
