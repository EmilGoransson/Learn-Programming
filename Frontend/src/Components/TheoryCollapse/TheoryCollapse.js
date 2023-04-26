import React, { useState } from 'react';
import './TheorySidebar.css';

function TheorySidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheorySidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="TheorySidebar-container">
      <div className="TheorySidebar">
        <button onClick={toggleTheorySidebar}>Open Collapse TheorySidebar</button>
      </div>
      {isOpen && (
        <div className="collapse-TheorySidebar">
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
        </div>
      )}
    </div>
  );
}

export default TheorySidebar;