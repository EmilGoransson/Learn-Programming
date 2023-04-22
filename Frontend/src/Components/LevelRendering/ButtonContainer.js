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
          {buttonLabels.slice(0, 7).map((label, index) => {
              const [line1, line2] = label.split("\n");
              const buttonId = `button-${index + 1}`;
              return (
                  <button onClick={handleClick} className='button-lab' key={buttonId}>
                      <div>{line1}</div>
                      <div>{line2}</div>
                  </button>
              );
          })}
      </div>
      <div className="button-row">
          {buttonLabels.slice(7, 14).map((label, index) => {
              const [line1, line2] = label.split("\n");
              const buttonId = `button-${index + 8}`;
              return (
                  <button className='button-lab' key={buttonId}>
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