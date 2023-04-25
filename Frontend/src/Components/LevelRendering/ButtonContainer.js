import React, { useState, useEffect } from "react";
import "./ButtonContainer.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, Link, NavLink, useParams}  from "react-router-dom";


const ButtonContainer = (props) => {
  //fetch from model
  const currentLevel = 6;
  //hard-coded or db integration VIKTIGT ATT ÄNDRA OM VI ÄNDRAR ANTAL NIVÅER I VARJE LAB
  const lab1Amount = 14;
  const lab2Amount = 14;
  const lab3Amount = 10;
  const labNumberTracker = props.buttonLabels[props.buttonLabels.length - 1];

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const { title, buttonLabels } = props;
  let counter = 0;

  //format data
  /*
  useEffect(() => {
    if (!loading) return;

    fetch("http://localhost:3003/test")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [loading]);
*/

  const handleClick = () => {
    //setLoading(true);
    console.log("button clicked");
  };

  return (
    <div className="button-container">
      <h2>{title}</h2>
      <div className="button-row">
        {buttonLabels.slice(0, 7).map((label, index) => {
          counter++;
          let color = "button-lab-gray";
          let status = false;

          const [number, moduleName] = label.split("\n");
          switch (labNumberTracker) {
            case "1":
              if (counter < currentLevel) {
                color = "button-lab-green";
                status = false;
              } else if (counter === currentLevel) {
                color = "button-lab-yellow";
                status = false;
              } else {
                color = "button-lab-gray";
                status = true;
              }
              break;
            case "2":
              if (counter + lab1Amount < currentLevel) {
                status = false;
                color = "button-lab-green";
              } else if (counter + lab1Amount === currentLevel) {
                color = "button-lab-yellow";
                status = false;
              } else {
                color = "button-lab-gray";
                status = true;
              }
              break;
            case "3":
              if (counter + lab1Amount + lab2Amount < currentLevel) {
                color = "button-lab-green";
                status = false;
              } else if (counter + lab1Amount + lab2Amount === currentLevel) {
                color = "button-lab-yellow";
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
            <Link to={`/Button${index + 1}`}>
            <button
              className={color}
              key={buttonId}
              disabled={status}
            >
              <div>{number}</div>
              <div>{moduleName}</div>
            </button>
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
                color = "button-lab-green";
                status = false;
              } else if (counter === currentLevel) {
                color = "button-lab-yellow";
                status = false;
              } else {
                color = "button-lab-gray";
                status = true;
              }
              break;
            case "2":
              if (counter + lab1Amount < currentLevel) {
                color = "button-lab-green";
                status = false;
              } else if (counter + lab1Amount === currentLevel) {
                color = "button-lab-yellow";
                status = false;
              } else {
                color = "button-lab-gray";
                status = true;
              }
              break;
            case "3":
              if (counter + lab1Amount + lab2Amount < currentLevel) {
                color = "button-lab-green";
                status = false;
              } else if (counter + lab1Amount + lab2Amount === currentLevel) {
                color = "button-lab-yellow";
                status = false;
              } else {
                color = "button-lab-gray";
                status = true;
              }
              break;
          }

          const buttonId = 'button-${index + 8}';
          return (
            <Link to={`/Button${index + 8}`}>
            <button className={color} key={buttonId}>
              <div>{line1}</div>
              <div>{line2}</div>
            </button>
            </Link>
          );
        })}
      </div>
      {message}
    </div>
  );
};

export default ButtonContainer;
