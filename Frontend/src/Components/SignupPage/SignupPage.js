import React, { Fragment, useState } from "react";
import { toast } from "react-toastify"
import "./SignupPage.css";
import decode from "../../decode_token";
import useLevelStore from "../../Model/frontEndStore";
const SignupPage = ({setAuth}) => {
  const setLevel = useLevelStore((state) => state.setLevel);
  const setName = useLevelStore((state) => state.setName);
  const setID = useLevelStore((state) => state.setID);
  const setProfilePicture = useLevelStore((state) => state.setProfilePic);
  const setPinned = useLevelStore((state) => state.setPinned);
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
        "http://130.229.172.67:3003/authentication/Signup",
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
        try {
          const res = await fetch("http://130.229.172.67:3003/authentication/getInfo", {
            method: "GET",
            headers: {
              id: decode(parseRespone.token).user.id,
              token: parseRespone.token,
            },
          });
          const resJson = await res.json();
          setLevel(Number(resJson.currentLevel));
          setName(String((resJson.firstName + " " + resJson.lastName)));
          setID((Number(resJson.id)));
          setProfilePicture(resJson.profilePicture);
          setPinned(resJson.pinnedItems);


          console.log(resJson);
        } catch (error) {
          console.error(error);
        }
        toast.success("Register Sucessfully")

      }
      else{
        toast.error(parseRespone);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const refreshOnClick = () => {
    window.location.reload();
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
          </form>
          <p>
            Already have an account? Click{" "} <a href="/login" className="form-link"> here </a>{" "} to log in.
          </p>
        </div>
      </div>
    </Fragment>
  ); 
};

export default SignupPage;
