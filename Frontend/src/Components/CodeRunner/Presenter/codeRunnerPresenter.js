/* READ ME!

TLDR : <CodeRunner input1={2] input2={3} testCases={6} testCase2={3} shouldIncrement={true] />
SETUP: NOW IS ROUTED VIA BACKEND, CHANGE API KEY IN THE BACKEND IN ORDER FOR CODERUNNER TO WORK!!



Component works in the following way.
1. any input from System.in (scanner) in passed to the component via props.input
2. a singular testcase is passed via props.testCases.
4. The prewritten code that is shown in the editor at load is passed via props.preMadeText
3. Might have bugs! Test it so that the testcase actually works!
4. In app.js use the component via <CodeRunner testCases={6} input={3} /> OR if you dont want input:
<CodeRunner testCases={6} />
 */
//TODO: Add error management: timeout, 400, bad requests from API

import React, { useState } from "react";
import axios from "axios";
import CodeRunnerView from "../View/codeRunnerView";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import useLevelStore, { IP } from "../../../Model/frontEndStore";
import decode from "../../../decode_token";

function CodeRunner(props) {
  const incrementCurrentLevel = useLevelStore((state) => state.incrementLevel);
  const currentLevel = useLevelStore((state) => state.currentLevel);
  //changing this changes what is prewritten in the coderunner console by default.
  const string = `
class Progman
{  
    public static void main(String[] args) {
        System.out.println("Hello World");
        
    }
}`;
  const [PreMadeText, setPreMadeText] = useState(
    props.preMadeText ? props.preMadeText : string
  );
  const [code, setCode] = useState("");
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [compileCode, setCompileCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [passedTestOne, setPassedTestOne] = useState("");
  const [passedTest2, setPassedTest2] = useState("");
  const [hasRunitOnce, setHasRunitOnce] = useState(false);
  const [style, setStyle] = useState("");
  const [style2, setStyle2] = useState("text-red-500 font-bold");
  const [bothStyle, setBothStyle] = useState("");
  const [bothMessage, setBothMessage] = useState("");
  //SPECIFY THE "INPUT" HERE BY PASSING IT AS A PROP ex: <CodeRunner input="5" />
  const getCompilerOutput = async () => {
    let count = 0;
    setIsLoading(true);
    //fetches the data from the API via a POST request

    const res = await fetch(IP + "/authentication/codeRunner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        id: decode(localStorage.token).user.id,
        token: localStorage.token,
      },
      body: JSON.stringify({
        data: code,
        input: props.input1 ? props.input1 : "",
      }),
    })
      .then(async (response) => {
        console.log("data from server");
        const data = await response.json();
        console.log(response.status);
        setData(data);

        //Here the test cases are compared to the response from the API
        if (
          data.Result == props.testCases ||
          data.Result == props.testCases + "\n"
        ) {
          setPassedTestOne("Passed");
          setStyle("text-ourGreen font-bold");
          count++;
        } else {
          console.log("failed");
          setPassedTestOne("Failed");
          setStyle("text-redColor font-bold");
        }
        if (!props.testCase2) {
          setIsLoading(false);
        }
      })
      .catch(async (error) => {
        alert(error + " " + "please refresh the page and try again");
      })
      .then(async () => {
        if (props.testCase2) {
          const res2 = await fetch(IP + "/authentication/codeRunner", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              id: decode(localStorage.token).user.id,
              token: localStorage.token,
            },
            body: JSON.stringify({
              data: code,
              input: props.input2 ? props.input2 : "",
            }),
          })
            .then(async (response) => {
              const data2 = await response.json();
              setData2(data2);
              //Here the test cases are compared to the response from the API
              if (
                data2.Result == props.testCase2 ||
                data2.Result == props.testCase2 + "\n"
              ) {
                setPassedTest2("Passed");
                setStyle2("text-ourGreen font-bold");
                count++;
              } else {
                setPassedTest2("Failed");
                setStyle2("text-redColor font-bold");
              }
              setIsLoading(false);
            })
            .catch(async (error) => {
              alert(error + " " + "please refresh the page and try again");
            });
        }
      });
    //decides the styles for the coderunner result text
    if (count == 1 && !props.testCase2) {
      setBothStyle("text-ourGreen font-bold");
      setBothMessage("Test passed!");
      if (props.shouldIncrement && props.thisLevel === currentLevel) {
        incrementCurrentLevel();
      }
    } else if (count == 2) {
      setBothStyle("text-ourGreen font-bold");
      setBothMessage("Both tests passed!");
      if (props.shouldIncrement && props.thisLevel === currentLevel) {
        incrementCurrentLevel();
      }
    } else {
      setBothStyle("text-redColor font-bold");
      setBothMessage("One or more tests failed!");
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
    <div className="position-relative">
      {isLoading && (
        <div
          className="rounded-xl position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ zIndex: 10, backgroundColor: "#282b2e91" }}
        >
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      <CodeRunnerView
        responseCode={data.Result}
        responseCode2={
          props.testCase2
            ? data2.Result // Pass responseCode2 only if props.testCase2 exists
            : null // Pass null if props.testCase2 doesn't exist
        }
        setCodeWritten={changeCodeACB}
        onClickACB={onClick}
        error={data.Errors}
        loading={isLoading}
        preWrittenText={PreMadeText}
        input={props.input1 ? props.input1 : null}
        testCasesPassed={
          props.testCase2
            ? [props.testCases, passedTestOne, props.testCase2, passedTest2]
            : [props.testCases, passedTestOne]
        }
        hasRunItOnce={hasRunitOnce}
        style={style}
        style2={
          props.testCase2
            ? style2 // Pass style2 only if props.testCase2 exists
            : null // Pass null if props.testCase2 doesn't exist
        }
        bothStyles={bothStyle}
        bothStyleMessage={bothMessage}
      />
    </div>
  );
}

export default CodeRunner;
