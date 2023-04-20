import React from 'react';

function ButtonGrid() {
  const buttons1 = [];
  const buttons2 = [];
  
  for (let i = 0; i < 7; i++) {
    buttons1.push(<button key={i} className="gridButton" />);
  }
  
  for (let i = 7; i < 14; i++) {
    buttons2.push(<button key={i} className="gridButton" />);
  }

  return (
    <div className="buttonGrid">
      <h2 className="gridTitle">Lab 1</h2>
      <div className="gridContainer">{buttons1}</div>
      <div className="gridContainer">{buttons2}</div>
    </div>
  );
}

export default ButtonGrid;