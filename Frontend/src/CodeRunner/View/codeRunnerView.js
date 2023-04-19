import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Editor from "@monaco-editor/react";

function CodeRunnerView(props) {
  //gets the code from the editor (realtime) and returns it to the presenter
  function onChangeACB(e) {
    props.setCodeWritten(e);
  }
  // When pressing the button the code is compiled
  function onClickACB(e) {
    props.onClickACB();
  }

  return (
    <div className="p-3 rounded border bg-white">
      <Editor
        theme="vs-dark"
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
        {props.loading ? <Spinner animation="border" size="sm" /> : "Run Code"}
      </Button>

      <div className="Code-Result">
        {" "}
        {props.error && (
          <div className="text-red-600"> Error: {props.error}</div>
        )}{" "}
        Status code:{" "}
        {props.responseCode && (
          <div className="text-gray-600"> Response: {props.responseCode}</div>
        )}
      </div>
    </div>
  );
}

export default CodeRunnerView;
