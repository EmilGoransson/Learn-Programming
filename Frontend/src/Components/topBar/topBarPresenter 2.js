import React from "react";
import TopBarView from "./topBarView";
import useLevelStore from "../../Model/frontEndStore";

function TopBar() {
  const name = useLevelStore((state) => state.name);
  const avatar = useLevelStore((state) => state.avatar);
  return <TopBarView avatar={avatar} name={name}></TopBarView>;
}
export default TopBar;
