import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Editor from "@monaco-editor/react";

function CodeRunnerView(props) {
  //gets the code from the editor (realtime) and returns it to the presenter
  function onChangeACB(e) {
    props.setCodeWritten(e);
  }
  // When pressing the button the code is compiled
  function onClickACB() {
    props.onClickACB();
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
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
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-gray-100 rounded py-2 px-3"
        >
          Compile Code
        </Button>
      </div>
      <div className="p-4 bg-gray-100 rounded-b-lg">
        {props.error && (
          <div className="code-runner-error mb-4">
            <Form.Label className="font-bold">Error:</Form.Label>
            <Form.Control as="textarea" rows={5} value={props.error} readOnly />
          </div>
        )}
        <h3>Test-case: </h3>
        <div className="mb-4">Expected: {props.testCasesPassed[0]}</div>
        {props.responseCode && (
          <div className="code-runner-response mb-4">
            <Form.Label className="font-bold">Got the response:</Form.Label>
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
