import React, { useRef, useState } from "react";
import axios from "axios";
import { API_KEY } from "../apiKey";
import CodeRunnerView from "../View/codeRunnerView";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

//TODO: make it so that the code shows that its loading (inside the component) & INTEGRATE TEST CASE(S) SOMEHOW!! pass via props?

function CodeRunner(props) {
  //Change this in order to change the prewritten text in the editor, TODO: so it comes from props
  const [PreMadeText, setPreMadeText] = useState(`
class Progman
{  
    public static void main(String[] args) {
        System.out.println("Does it work?")
    }
}`);

  const [code, setCode] = useState("");
  const [data, setData] = useState("");
  const [compileCode, setCompileCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [passedTestOne, setPassedTestOne] = useState("");
  const [hasRunitOnce, setHasRunitOnce] = useState(false);
  const encodedParams = new URLSearchParams();
  encodedParams.append("LanguageChoice", "4");
  encodedParams.append("Program", code);
  //SPECIFY THE "INPUT" HERE BY PASSING IT AS A PROP ex: <CodeRunner input="5" />
  if (props.input) {
    encodedParams.append("Input", props.input);
  }
  const options = {
    method: "POST",
    url: "https://code-compiler.p.rapidapi.com/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const getCompilerOutput = async () => {
    try {
      setIsLoading(true);
      const res = await axios.request(options).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log("response.data.Result " + response.data.Result);
        console.log("props.testCases " + props.testCases);

        //Here the test cases are compared to the response from the API
        if (response.data.Result == props.testCases) {
          setPassedTestOne("true");
        } else {
          setPassedTestOne("false");
        }
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
    }
  };

  function changeCodeACB(e) {
    setCode(e);
  }
  function onClick() {
    console.log("click" + code);
    setPreMadeText(code);
    setCompileCode(code);
  }
  useEffect(() => {
    if (compileCode === undefined) {
      setIsLoading(false);
      setData({ Result: "", Errors: "" });
      return;
    }
    getCompilerOutput();
    setHasRunitOnce(true);
  }, [compileCode]);
  return (
    <div>
      {isLoading && (
        <div
          className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 9999, backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      )}
      <CodeRunnerView
        responseCode={data.Result}
        setCodeWritten={changeCodeACB}
        onClickACB={onClick}
        error={data.Errors}
        loading={isLoading}
        preWrittenText={PreMadeText}
        input={props.input ? props.input : null}
        testCasesPassed={[props.testCases, passedTestOne]}
        hasRunItOnce={hasRunitOnce}
      />
    </div>
  );
}

export default CodeRunner;
