import React from "react";
import TopBarView from "./topBarView";
import useLevelStore from "../../Model/frontEndStore";
import { useState } from 'react';

function TopBar() {
  const name = useLevelStore((state) => state.name);
  const avatar = useLevelStore((state) => state.profilePic);
  /*const [isDropdownOpen, setIsDropdownOpen] = useState(false); */
/*
  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }; */

  const handleLogoutClick = () => {
    localStorage.removeItem("token");
    window.location.reload();
    // Implement logout functionality here
    console.log("Logout clicked");
  };

  return (
    <TopBarView
      avatar={avatar}
      name={name}
      onLogoutClick={handleLogoutClick}
      /*
      isDropdownOpen={isDropdownOpen}
      onAvatarClick={handleAvatarClick} */
    />
  );
}

export default TopBar;
