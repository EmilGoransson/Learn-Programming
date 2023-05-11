import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./LoginPage.css";
import { toast } from "react-toastify";
import useLevelStore, { IP } from "../../Model/frontEndStore";
import decode from "../../decode_token";
import Alert from "react-bootstrap/Alert";

const Login = ({ setAuth }) => {
  const setLevel = useLevelStore((state) => state.setLevel);
  const setName = useLevelStore((state) => state.setName);
  const setID = useLevelStore((state) => state.setID);
  const getLevel = useLevelStore((state) => state.getLevel);
  const [error, setError] = useState(false);
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
      const response = await fetch(IP + "/authentication/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status === 401) {
        setError(true);
        console.log("Login Alert");
        setTimeout(() => {
          setError(false);
        }, 5000);
      }

      //kolla token, sätt saker
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        localStorage.setItem("name", parseRes.userName);
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
    <Fragment>
      <div className="container">
        <Link to={`/`}>
          <img src="https://i.imgur.com/yLqZDJM.png" className="hej" />
        </Link>
        <div className="form-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            {/*<img src={logo} alt="Logo" className="hej" />*/}
          </div>
          <Alert
            variant="danger"
            show={error}
            style={{
              color: "#CECECE",
              backgroundColor: "#1B2432",
              fontSize: "8px",
              padding: "4px",
            }}
          >
            <Alert.Heading>
              <p>Login failed, wrong E-mail or password.</p>
            </Alert.Heading>
          </Alert>
          <h2>Log in</h2>
          <br></br>
          <form onSubmit={onSubmitForm}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => onChange(e)}
              className="ruta"
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => onChange(e)}
              className="ruta"
            />
            <button type="submit" className="loginbutton">
              Log in
            </button>
          </form>
          <p>
            Don’t have an account? Click <a href="/createaccount">here</a> to
            get one.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
