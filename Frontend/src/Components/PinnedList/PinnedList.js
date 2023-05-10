import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from React Router
import useLevelStore from "../../Model/frontEndStore";
import "./PinnedList.css";
import xbutton from "./x-button.png"; // import the image file

function PinnedList() {
  const removePinned = useLevelStore((state) => state.removePinned);
  const pinnedTheory = useLevelStore((state) => state.pinnedTheory);

  function removeItem(item) {
    removePinned(item);
  }

  if (pinnedTheory) {
    return (
      <div className="Pinned-container h-80 -mt-32 w-40 rounded-xl">
        <h2 className="Pinned-title rounded-sm">Pinned</h2>
        <ul className="ui-test">
          {pinnedTheory.map((item) => (
            <li className="Pinned-list z-10" key={item}>
              <img
                src={xbutton}
                className="x-button cursor-click transition-transform duration-100ms hover:scale-110"
                style={{ cursor: "pointer" }}
                onClick={() => removeItem(item)}
              />
              <Link to={`/${getItemRoute(item)}`} className="custom-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function getItemRoute(item) {
    switch (item) {
      case "Printing":
        return "Lab1/1";
      case "Variables":
        return "Lab1/2";
      case "Strings":
        return "Lab1/3";
      case "Scanner":
        return "Lab1/4";
      case "Operations":
        return "Lab1/5";
      case "Classes":
        return "Lab1/6";
      case "Methods":
        return "Lab1/7";
      case "For-loop":
        return "Lab1/8";
      case "Nested for-loop":
        return "Lab1/9";
      case "Arrays":
        return "Lab1/10";
      case "Matrix":
        return "Lab1/11";
      case "If-statement":
        return "Lab1/12";
      case "Else":
        return "Lab1/13";
      case "Boss 1":
        return "Lab1/14";
      case "Buffered Reader":
        return "Lab2/1";
      case "IOException":
        return "Lab2/2";
      case "For-Each":
        return "Lab2/3";
      case "Boolean":
        return "Lab2/4";
      case "Logical Operators":
        return "Lab2/5";
      case "While-Loop":
        return "Lab1/6";
      case "String Array":
        return "Lab2/7";
      case "String Comparison":
        return "Lab2/8";
      case "Linked List":
        return "Lab2/9";
      case "Array Index Insertion":
        return "Lab2/10";
      case "Delete":
        return "Lab2/11";
      case "Selection Sort 1":
        return "Lab2/12";
      case "Selection Sort 2":
        return "Lab2/13";
      case "Boss 2":
        return "Lab2/14";
      case "Objects":
        return "Lab3/1";
      case "String Concatenation":
        return "Lab3/2";
      case "String Builder":
        return "Lab3/3";
      case "Queue":
        return "Lab3/4";
      case "Break Statement":
        return "Lab3/5";
      case "Pass by Reference":
        return "Lab3/6";
      case "Creating Linked List":
        return "Lab3/7";
      case "Traverse Linked List":
        return "Lab3/8";
      case "Linkedlist to Array":
        return "Lab3/9";
      case "Null":
        return "Lab3/10";
      case "Delete Linkedlist":
        return "Lab3/11";
      case "Java Library":
        return "Lab3/12";
      case "Switch":
        return "Lab3/13";
      case "Boss 3":
        return "Lab3/14";
      // Add more cases for other items if needed
      default:
        return "main"; // Default route if no specific route is defined
    }
  }
}

export default PinnedList;
