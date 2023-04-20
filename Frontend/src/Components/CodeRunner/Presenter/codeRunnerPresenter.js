/* READ ME!
SETUP:
the API_KEY is defined inside the file apiKey.js and is imported directly from the CodeRunner folder.
Get the API-key here: https://rapidapi.com/abdheshnayak/api/code-compiler
1. Sign up / register
2. Go to https://rapidapi.com/abdheshnayak/api/code-compiler
3. Press: Pricing
4. Select "Basic"
5. Now go to https://rapidapi.com/abdheshnayak/api/code-compiler and copy the X-RapidAPI-Key which can be found under "Code Snippet" to the right
6. Paste the key in the apiKey.js file in the CodeRunner folder


Component works in the following way.
1. any input from System.in (scanner) in passed to the component via props.input
2. a singular testcase is passed via props.testCases.
3. Might have bugs! Test it so that the testcase actually works!
4. In app.js use the component via <CodeRunner testCases={6} input={3} /> OR if you dont want input:
<CodeRunner testCases={6} />
 */
//TODO: Add error management: timeout, 400, bad requests from API

import React, { useState } from "react";
import axios from "axios";
import { API_KEY } from "../apiKey";
import CodeRunnerView from "../View/codeRunnerView";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
function CodeRunner(props) {
  //Change this in order to change the prewritten text in the editor, TODO: so it comes from props maybe?
  const [PreMadeText, setPreMadeText] = useState(props.preText);
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
      //fetches the data from the API via a POST request
      const res = await axios.request(options).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log("response.data.Result " + response.data.Result);
        console.log("props.testCases " + props.testCases);

        //Here the test cases are compared to the response from the API
        if (response.data.Result == props.testCases) {
          setPassedTestOne("Passed");
        } else {
          setPassedTestOne("Failed");
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
          <Spinner animation="border" variant="secondary" />
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