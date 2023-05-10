import React, { useState, useEffect } from "react";
import "./ButtonContainer.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";

import { useStore } from "zustand";
import useLevelStore from "../../Model/frontEndStore";

const ButtonContainer = (props) => {
  const litStar = "https://i.imgur.com/PO5mEkq.png";
  const star = "https://i.imgur.com/qtoAhpa.png";

  //fetch from model
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //hard-coded or db integration VIKTIGT ATT ÄNDRA OM VI ÄNDRAR ANTAL NIVÅER I VARJE LAB
  const lab1Amount = 14;
  const lab2Amount = 14;
  const lab3Amount = 14;

  const labNumberTracker = props.buttonLabels[props.buttonLabels.length - 1];

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const { title, linkTitle, buttonLabels } = props;

  let counter = 0;
  let countLab = 0;

  function isLit(labAmount) {
    if (currentLevel - 1 >= labAmount) {
      return litStar;
    } else {
      return star;
    }
  }

  //array of stars
  const stars = [
    isLit(lab1Amount),
    isLit(lab1Amount + lab2Amount),
    isLit(lab1Amount + lab2Amount + lab3Amount),
  ];

  const handleClick = () => {
    //setLoading(true);
    console.log("button clicked");
  };
  console.log(stars);

  <a>{linkTitle}</a>;

  return (
    <div className="pt-20 ">
      <div className=" rounded-3xl flex items-center justify-center position-relative align-items-flex- z-1">
        <div className="button-container rounded-2xl pl-10 pr-10 pt-3 pb-3 mt-3">
          <h2 className="text-[CECECE] flex justify-between">
            <span>{title}</span>
            <span>
              <img
                src={stars[props.labNumber - 1]}
                alt={"test"}
                className="w-[40px] h-[40px]"
              ></img>
            </span>
          </h2>{" "}
          <div className="button-row">
            {buttonLabels.slice(0, 7).map((label, index) => {
              counter++;
              let color = "button-lab-gray";
              let status = false;

              const [number, moduleName] = label.split("\n");
              switch (labNumberTracker) {
                case "1":
                  if (counter < currentLevel) {
                    color = "button-lab-green zoom-out zoom-out--green";
                    status = false;
                  } else if (counter === currentLevel) {
                    color = "button-lab-yellow zoom-out zoom-out--yellow";
                    status = false;
                  } else {
                    color = "button-lab-gray";
                    status = true;
                  }
                  break;
                case "2":
                  if (counter + lab1Amount < currentLevel) {
                    status = false;
                    color = "button-lab-green zoom-out zoom-out--green";
                  } else if (counter + lab1Amount === currentLevel) {
                    color = "button-lab-yellow zoom-out zoom-out--yellow";
                    status = false;
                  } else {
                    color = "button-lab-gray";
                    status = true;
                  }
                  break;
                case "3":
                  if (counter + lab1Amount + lab2Amount < currentLevel) {
                    color = "button-lab-green zoom-out zoom-out--green";
                    status = false;
                  } else if (
                    counter + lab1Amount + lab2Amount ===
                    currentLevel
                  ) {
                    color = "button-lab-yellow zoom-out zoom-out--yellow";
                    status = false;
                  } else {
                    color = "button-lab-gray";
                    status = true;
                  }
                  break;
              }

              const buttonId = `button-${index + 1}`;
              const enabled = "true";
              const disabled = "false";

              return (
                <Link to={`/${linkTitle}/${index + 1}`}>
                 <OverlayTrigger
                 
                 rootClose
                    overlay={
                      <Tooltip id="tooltip-disabled">{moduleName}</Tooltip>
                    }
                  >
                    <button className={color} key={buttonId} disabled={status}>
                      <div>{number}</div>
                    </button>
                  </OverlayTrigger>
                </Link>
              );
            })}
          </div>
          <div className="button-row">
            {buttonLabels.slice(7, 14).map((label, index) => {
              counter++;
              const [line1, line2] = label.split("\n");
              let color = "button-lab-green";
              let status = false;
              switch (labNumberTracker) {
                case "1":
                  if (counter < currentLevel) {
                    color = "button-lab-green zoom-out zoom-out--green";
                    status = false;
                  } else if (counter === currentLevel) {
                    color = "button-lab-yellow zoom-out zoom-out--yellow";
                    status = false;
                  } else {
                    color = "button-lab-gray";
                    status = true;
                  }
                  break;
                case "2":
                  if (counter + lab1Amount < currentLevel) {
                    color = "button-lab-green zoom-out zoom-out--green";
                    status = false;
                  } else if (counter + lab1Amount === currentLevel) {
                    color = "button-lab-yellow zoom-out zoom-out--yellow";
                    status = false;
                  } else {
                    color = "button-lab-gray";
                    status = true;
                  }
                  break;
                case "3":
                  if (counter + lab1Amount + lab2Amount < currentLevel) {
                    color = "button-lab-green zoom-out zoom-out--green";
                    status = false;
                  } else if (
                    counter + lab1Amount + lab2Amount ===
                    currentLevel
                  ) {
                    color = "button-lab-yellow zoom-out zoom-out--yellow";
                    status = false;
                  } else {
                    color = "button-lab-gray";
                    status = true;
                  }
                  break;
              }

              const buttonId = `button-${index + 8}`;
return (
  <Link to={`/${linkTitle}/${index + 8}`}>
    <OverlayTrigger
    rootClose
                    overlay={
                      <Tooltip id="tooltip-disabled">{line2}</Tooltip>
                    }
                  >
                    <button className={color} key={buttonId} disabled={status}>
                      <div>{line1}</div>
                    </button>
                  </OverlayTrigger>
  </Link>
);
            })}
          </div>
          {message}
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
