import logo from './logo.svg';
import './App.css';
import Logoutbutton from './Logoutbutton';
import Sidebar from './Sidebar';
import Scorebar from './Scorebar';
import Lab1 from './Lab1';


/*const App = () => {
  const scores = 70;
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Scorebar scores={scores} />
      <Logoutbutton />
      <Sidebar />
      <Lab1 />
    </div>
  );
};

export default App;*/

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
