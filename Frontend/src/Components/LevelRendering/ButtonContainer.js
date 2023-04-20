import React, { useState, useEffect } from 'react';
import './ButtonContainer.css';

const ButtonContainer = (props) => {

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!loading) return;

    fetch("http://localhost:3003/test")
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [loading]);

  const handleClick = () => {
    setLoading(true);
  };

  const { title, buttonLabels } = props;

  return (
    <div className="button-container">
      <h2>{title}</h2>
      <div className="button-row">
        {buttonLabels.slice(0, 7).map((label) => {
          const [line1, line2] = label.split("\n");
          return (
            <button onClick={handleClick}>
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
      {message}
    </div>
  );
};

export default ButtonContainer;