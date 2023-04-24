
import '../Components/LevelRendering/ButtonContainer.css'
import { BrowserRouter, Routes, Route, Link, NavLink}  from "react-router-dom";
import Aboutus from './aboutus';
import Examn from './exam';
import Labs from './labs';
import Theory from './theory';
import Profile from './profile';
import Progress from '../Components/Sidebar/Progress';

import ButtonContainer from '../Components/LevelRendering/ButtonContainer.js';

function MainContent(){
    return(
        <div>
            <Routes>
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="exam" element={<Examn />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/profile" element={<Profile />} />
            </Routes>
            <ButtonContainer
        title="Lab 1"
        buttonLabels={['1 \n Class', '2 \nMethod', '3 \nSystem.out', '4 \nString', '5 \nVariables', '6 \nOperation', '7 \nIf-loop', '8 \nElse', '9 \nFor-loop', '10 \nFor-loop 2', '11 \nArray', '12 \nMatrix', '13 \nScanner', '14 \nFinal Boss']}
      />
      <ButtonContainer
        title="Lab 2"
        buttonLabels={['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9', 'Button 10', 'Button 11', 'Button 12', 'Button 13', 'Button 14']}
      />
      <ButtonContainer
        title="Lab 3"
        buttonLabels={['1 Class', '2 Method', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9', 'Button 10', 'Button 11', 'Button 12', 'Button 13', 'Button 14']}
      />
      <Progress/>

        </div>
    );
}
export default MainContent;