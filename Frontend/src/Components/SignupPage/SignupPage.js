import { parse } from "@fortawesome/fontawesome-svg-core";
import React, { Fragment, useState } from "react";
import { toast } from "react-toastify"
import "./SignupPage.css";
const SignupPage = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { email, firstName, lastName, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, firstName, lastName, password };
        const response = await fetch(
        "http://localhost:3003/authentication/Signup",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const parseRespone = await response.json();
      
      if(parseRespone.token){
        localStorage.setItem("token", parseRespone.token);
        setAuth(true);
        toast.success("Register Sucessfully")
      }
      else{
        toast.error(parseRespone);
      }
    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <Fragment>
      <div className="container">
        <div className="hej">
          {/*<img src={logo} alt="Logo" className="hej"></img>*/}
        </div>
        <div className="form-container">
          <h2 className="heading">Register</h2>
          <br></br>
          <form onSubmit={onSubmitForm}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => onChange(e)}
              value={email}
              className="ruta"
            ></input>
            <input
              type="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={(e) => onChange(e)}
              value={firstName}
              className="ruta"
            ></input>
            <input
              type="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={(e) => onChange(e)}
              value={lastName}
              className="ruta"
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => onChange(e)}
              value={password}
              className="ruta"
            ></input>
            <button type="submit" className="loginbutton">
              Create Account
            </button>

            <p className="form-text">
              Already have an account? Click{" "}
              <a href="/login" className="form-link">
                here
              </a>{" "}
              to log in.
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SignupPage;
