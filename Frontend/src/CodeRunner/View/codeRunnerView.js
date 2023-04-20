import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Editor from "@monaco-editor/react";

function CodeRunnerView(props) {
  console.log(props);
  //gets the code from the editor (realtime) and returns it to the presenter
  function onChangeACB(e) {
    props.setCodeWritten(e);
  }
  // When pressing the button the code is compiled
  function onClickACB(e) {
    props.onClickACB();
  }

  return (
    <div className="code-runner-container p-3 rounded border bg-white">
      <Editor
        width="100%"
        theme="vs-light"
        height="45vh"
        defaultLanguage="java"
        defaultValue={props.preWrittenText}
        onChange={onChangeACB}
      />
      <Button
        variant="secondary"
        onClick={onClickACB}
        className="mb-2 bg-blue-600 hover:bg-blue-700 text-gray-100 rounded py-2 px-3"
      >
        Compile code
      </Button>
      <div className="code-runner-results">
        {props.error && (
          <div className="code-runner-error">
            <Form.Label>Error:</Form.Label>
            <Form.Control as="textarea" rows={5} value={props.error} readOnly />
          </div>
        )}
        Expected: {props.testCasesPassed[0]}
        {props.responseCode && (
          <div className="code-runner-response">
            <Form.Label> Got the response: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={props.responseCode}
              readOnly
            />
          </div>
        )}
        <div>Result: {props.testCasesPassed[1]}</div>
      </div>
    </div>
  );
}

export default CodeRunnerView;
