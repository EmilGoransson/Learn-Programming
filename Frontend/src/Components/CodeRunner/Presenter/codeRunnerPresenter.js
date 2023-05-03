/* READ ME!

TLDR: <CodeRunner input1={2] input2={3} testCases={6} testCase2={3} shouldIncrement={true] />
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
4. The prewritten code that is shown in the editor at load is passed via props.preMadeText
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
import useLevelStore from "../../../Model/frontEndStore";
import { v4 as uuidv4 } from "uuid";

function CodeRunner(props) {
  const setName = useLevelStore((state) => state.setName);
  function setNameTest() {
    setName("test");
  }
  const checkMark = "https://i.imgur.com/EC4wJV8.png";
  const crossMark = "https://i.imgur.com/vZIJZoz.png";
  console.log(props);
  const incrementCurrentLevel = useLevelStore((state) => state.incrementLevel);
  const currentLevel = useLevelStore((state) => state.currentLevel);
  const string = `
class Progman
{  
    public static void main(String[] args) {
        System.out.println("Hello World");
        
    }
}`;
  //Change this in order to change the prewritten text in the editor, TODO: so it comes from props maybe?
  const [PreMadeText, setPreMadeText] = useState(
    props.preMadeText ? props.preMadeText : string
  );
  const [code, setCode] = useState("");
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [compileCode, setCompileCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [passedTestOne, setPassedTestOne] = useState("");
  const [passedTest2, setPassedTest2] = useState("");
  const [hasRunitOnce, setHasRunitOnce] = useState(false);
  const [style, setStyle] = useState("");
  const [style2, setStyle2] = useState("text-red-500 font-bold");
  const [bothStyle, setBothStyle] = useState("");
  const [bothMessage, setBothMessage] = useState("");

  const encodedParams = new URLSearchParams();
  encodedParams.append("LanguageChoice", "4");
  encodedParams.append("Program", code);
  if (props.input1) {
    encodedParams.append("Input", props.input1);
  }

  const encodedParams2 = new URLSearchParams();
  encodedParams2.append("LanguageChoice", "4");
  encodedParams2.append("Program", code);
  if (props.input2) {
    encodedParams2.append("Input", props.input2);
  }
  //SPECIFY THE "INPUT" HERE BY PASSING IT AS A PROP ex: <CodeRunner input="5" />

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
  const options2 = {
    method: "POST",
    url: "https://code-compiler.p.rapidapi.com/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "code-compiler.p.rapidapi.com",
    },
    data: encodedParams2,
  };
  if (!props.testCase2) {
  }

  const getCompilerOutput = async () => {
    let count = 0;
    setIsLoading(true);
    //fetches the data from the API via a POST request
    const res = await axios
      .request(options)
      .then((response) => {
        setData(response.data);
        //Here the test cases are compared to the response from the API
        if (response.data.Result == props.testCases) {
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
        console.log(error);
      })
      .then(async () => {
        if (props.testCase2) {
          const res2 = await axios.request(options2).then((response) => {
            setData2(response.data);
            //Here the test cases are compared to the response from the API
            if (response.data.Result == props.testCase2) {
              setPassedTest2("Passed");
              setStyle2("text-ourGreen font-bold");
              count++;
            } else {
              setPassedTest2("Failed");
              setStyle2("text-redColor font-bold");
            }
            setIsLoading(false);
          });
        }
      });
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
       <button className="btn btn-primary" onClick={setNameTest}>
        SETNAME
      </button>
    </div>
  );
}

export default CodeRunner;
