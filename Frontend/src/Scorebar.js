import React, { useState } from 'react';
import './App.css';


function Scorebar(props) {
    const [scores, setScores] = useState(props.scores);
    const [name, setName] = useState("Current level: ")
  return (
    <div className="level">
     <div className="progress-bar" style={{width: '${props.score}%'}}></div>
     <div className='score'>{props.score}</div>
    <input type='text' value={name} onChange={e => setName(e.target.value)
    }/>


    </div>
  );
}
export default Scorebar;
