import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./LoginPage.css";
import { toast } from "react-toastify";
import useLevelStore from "../../Model/frontEndStore";

const Login = ({ setAuth }) => {
  const getLevel = useLevelStore(state => state.getLevel);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://130.229.172.67:3003/authentication/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("id", parseRes.id)
        localStorage.setItem("name", parseRes.userName)
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }

      getLevel(Number(parseRes.currentLevel));
      //getLevel(5);
} catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div class="container">
      <div class="form-container bg-lightBlueGray rounded-2xl">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img src="https://i.imgur.com/csg65HH.png" className="hej" />
        </div>
        <h2 style={{ alignSelf: "flex-start" }}>Log in</h2>
        <br></br>
        <form onSubmit={onSubmitForm}>
          <label>
            <span>E-mail:</span>
            <input
              type="text"
              value={email}
              onChange={(e) => onChange(e)}
              className="ruta"
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="ruta"
            />
          </label>
          <button type="submit" className="loginbutton">
            Log in
          </button>
          <p>
            Don’t have an account? Click <a href="/createaccount">here</a> to
            get one.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;