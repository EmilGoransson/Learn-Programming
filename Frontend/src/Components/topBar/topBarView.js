import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function TopBarView(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    props.onLogoutClick();
  };

  /* const dropdownMenu = (
    <div className="absolute top-16 right-0 w-30 py-0 bg-pink rounded shadow-xl z-10">
      <button
        className="block w-full text-center px-4 py-0 text-pink hover:bg-pink-200"
        onClick={handleLogoutClick}
      >
        Log out
      </button>
    </div> 
  );*/

  return (
    <div className="bg-[#14161B] h-16 position-fixed text-right item-right top-0 px-6 z-50 w-screen flex justify-end items-center">
      <div className="text-white pr-2 flex items-center relative">
        <div className="mr-5 text-xl text-[#CECECE]">{props.name}</div>
        <NavLink to={`/profile`} activeClassName="active" className="my-link">
          <img
            className="w-12 h-12 rounded-full transform scale-100 hover:scale-110 transition-all duration-300 ease cursor-pointer"
            alt="avatar"
            src={props.avatar}
            /* onMouseEnter={props.onAvatarClick} */
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          />
        </NavLink>

        {isDropdownOpen && (
          <div
            className="absolute  top-12 right-0 w-20 py-1 rounded shadow-xl z-10"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="block w-full text-right font-bold text-xl px-100 py-1  hover:bg-green-200 cursor-pointer"
              onClick={handleLogoutClick}
            >
              Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBarView;
