import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CodeRunner from "./CodeRunner/Presenter/codeRunnerPresenter";
import CodeRunnerView from "./CodeRunner/View/codeRunnerView";
import Quiz from "react-quiz-component";
import QuizComp from "./quiz";

function App() {
  return <CodeRunner testCases={6} input={3} />;
}

export default App;
