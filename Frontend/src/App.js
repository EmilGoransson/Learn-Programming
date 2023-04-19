import './App.css';
import Logoutbutton from './Logoutbutton';
import Sidebar from './Sidebar';
import Scorebar from './Scorebar';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'



function App() {
  const scores = 70;
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <Scorebar scores={scores} />
      <Logoutbutton />
      <Sidebar />
    </div>
  );
}

export default App;
