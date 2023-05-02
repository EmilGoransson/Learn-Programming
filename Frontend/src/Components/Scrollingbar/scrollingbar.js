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

          <li>
          <NavLink to="/Varibels" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/Item3" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/Item4" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/Item 5" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/Item6" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/Item7" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/Item8" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li><NavLink to="/Item9" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          
          <li>
          <NavLink to="/item10" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item11" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item12" activeClassName="active">
              Arrays
            </NavLink>
          </li>

          <li>
            <NavLink to="/item13" activeClassName="active">
              Arrays
            </NavLink>

          </li>
          <li>
          <NavLink to="/item14" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item15" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item16" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item17" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item18" activeClassName="active">
              Arrays
            </NavLink>
          </li>
          <li>
          <NavLink to="/item19" activeClassName="active">
              Arrays
            </NavLink>

          </li>

          <li>
          <NavLink to="/item20" activeClassName="active">
              Arrays
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Scrollingbar;
