import React, { Fragment, useState } from "react";
import "./LoginPage.css";


const Login = ({ setAuth }) => {
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
        setAuth(true);
      } else {
        setAuth(false);
      }

} catch (err) {
  console.error(err.message);
}
  };
  return (
    <Fragment>
      <div class="container">
        <div class="form-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            {/*<img src={logo} alt="Logo" className="hej" />*/}
          </div>
          <h2 style={{ alignSelf: "flex-start" }}>Log in</h2>
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
            Don’t have an account? Click <a href="/createaccount">here</a> to get
            one.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;