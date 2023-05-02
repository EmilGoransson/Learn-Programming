import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Editor from "@monaco-editor/react";
import "./codeRunnerView.css";
//import { table } from "table";
import { Table } from "react-bootstrap";

function CodeRunnerView(props) {
  console.log(props);
  //gets the code from the editor (realtime) and returns it to the presenter
  function onChangeACB(e) {
    props.setCodeWritten(e);
  }
  // When pressing the button the code is compiled
  function onClickACB() {
    props.onClickACB();
  }

  return (
    <div className="bg-[#1B2432] rounded-lg overflow-hidden">
      <div className="p-4">
        <Editor
          width="100%"
          theme="vs-dark"
          height="45vh"
          defaultLanguage="java"
          defaultValue={props.preWrittenText}
          onChange={onChangeACB}
        />
        <Button
          variant="secondary"
          onClick={onClickACB}
          className="mt-4 compile-button rounded py-2 px-3 text-black"
        >
          Compile Code
        </Button>
      </div>
      <div className="p-4 rounded-b-lg">
        <Table striped variant="dark">
          <thead>
            <tr>
              <th>Case</th>
              <th>Expected</th>
              <th>Response</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{props.testCasesPassed[0]}</td>
              <td>
                <div>{props.responseCode && <p>{props.responseCode}</p>}</div>
              </td>
              <td>
                <span className={props.style}>{props.testCasesPassed[1]} </span>
              </td>
            </tr>
            {props.testCasesPassed[2] && (
              <tr>
                <td>2</td>
                <td>{props.testCasesPassed[2]}</td>
                <td>
                  <div>
                    {props.responseCode2 && <p>{props.responseCode2}</p>}
                  </div>
                </td>
                <td>
                  <span className={props.style2}>
                    {props.testCasesPassed[3]}{" "}
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        {props.error && (
          <div className="code-runner-error mb-4">
            <Form.Label className="font-bold">Error:</Form.Label>
            <Form.Control
              style={{ backgroundColor: "#212529", color: "#CDCDCD" }}
              as="textarea"
              rows={5}
              value={props.error}
              readOnly
            />
          </div>
        )}
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
        <div className="text-2xl">
          <span className={props.bothStyles}>
            {props.hasRunItOnce ? <div>{props.bothStyleMessage}</div> : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CodeRunnerView;
