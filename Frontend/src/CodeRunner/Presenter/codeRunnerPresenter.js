import React, { useRef, useState } from "react";
import axios from "axios";
import { API_KEY } from "../apiKey";
import CodeRunnerView from "../View/codeRunnerView";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Editor from "@monaco-editor/react";

function CodeRunner(props) {
  const [code, setCode] = useState();
  const [data, setData] = useState("");
  const [compileCode, setCompileCode] = useState();
  const encodedParams = new URLSearchParams();
  encodedParams.append("LanguageChoice", "4");
  encodedParams.append("Program", code);
  let isLoading = false;
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
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const getCompilerOutput = async () => {
    try {
      const res = await axios.request(options).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  function changeCodeACB(e) {
    setCode(e);
  }
  function onClick() {
    console.log(code);
    setCompileCode(code);
  }
  function onChange(newValue) {
    console.log("change", newValue);
  }
  function setSearchQueryACB(e) {}
  useEffect(() => {
    isLoading = true;
    if (compileCode === undefined) {
      isLoading = false;
      setData({ Result: "", Errors: "" });
      return;
    }
    getCompilerOutput();
    isLoading = false;
  }, [compileCode]);
  if (data === "" || isLoading) {
    return (
      <div>
        <Spinner></Spinner>{" "}
      </div>
    );
  }
  return (
    <div>
      <Editor
        height="45vh"
        defaultLanguage="java"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <CodeRunnerView
        responseCode={data.Result}
        setCodeWritten={changeCodeACB}
        codeData={code}
        onClickACB={onClick}
        error={data.Errors}
        loading={isLoading}
      />
    </div>
  );
}

export default CodeRunner;
