import React, { useState }from 'react';
import './App.css';

function Sidebar() {
    return (
      <div className="App">
       <button className='Pbtn'>Profile</button>
       <button className='Lbtn'>Labs</button>
       <button className='Tbtn'>Theory</button>
       <button className='Ebtn'>Examn</button>
  
  
      </div>
    );
  }
  
  export default Sidebar;



   /* const Sidebar = () => {
        const [isOpen, setIsOpen] = useState(false);

        const togglesidebar = () => {
            setIsOpen(!isOpen);
    };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
     <button onClick={togglesidebar}>Toggle Sidebar</button>
     <ul>
            <li>Profile </li>
            <li>Labs</li>
            <li>Theory</li>
            <li>Examn</li>

        </ul>
    </div>
  );
};



export default Sidebar;*/
