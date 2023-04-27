import React from "react";
import RightSideBarView from "./rightSideBarView";
import LeftSideBar from "../Sidebar/leftSideBar";
function RightSideBar() {
  return (
    <div>
      <LeftSideBar></LeftSideBar>
      <RightSideBarView />
    </div>
  );
}
export default RightSideBar;
