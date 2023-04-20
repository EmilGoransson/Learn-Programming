import React from 'react';
import './ButtonContainer.css';

const ButtonContainer = (props) => {
  const { title, buttonLabels } = props;

  return (
    <div className="button-container">
      <h2>{title}</h2>
      <div className="button-row">
        {buttonLabels.slice(0, 7).map((label) => {
          const [line1, line2] = label.split("\n");
          return (
            <button>
              <div>{line1}</div>
              <div>{line2}</div>
            </button>
          );
        })}
      </div>
      <div className="button-row">
        {buttonLabels.slice(7, 14).map((label) => {
          const [line1, line2] = label.split("\n");
          return (
            <button>
              <div>{line1}</div>
              <div>{line2}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonContainer;