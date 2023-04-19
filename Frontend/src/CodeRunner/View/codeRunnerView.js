import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CodeRunnerView(props) {
  function onChangeACB(e) {
    props.setCodeWritten(e.target.value);
  }

  function onClickACB(e) {
    props.onClickACB();
  }

  return (
    <div className="p-3 rounded border bg-white">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-gray-100">Code Editor</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            onChange={onChangeACB}
            className="bg-gray-900 text-gray-100 rounded py-2 px-3"
          />
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        onClick={onClickACB}
        className="mb-2 bg-blue-600 hover:bg-blue-700 text-gray-100 rounded py-2 px-3"
      >
        {props.loading ? <Spinner animation="border" size="sm" /> : "Run Code"}
      </Button>
      {props.loading ? <Spinner animation="border" size="sm" /> : "Run Code"}

      <div className="rounded p-3 border bg-gray-100">
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
