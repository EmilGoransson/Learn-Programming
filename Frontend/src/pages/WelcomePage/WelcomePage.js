import React from "react";
import "./WelcomePage.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <img src="https://i.imgur.com/yLqZDJM.png" className="logo" />
      <img
          src="https://i.imgur.com/GfPVRJH.png"
          className="comp"
          alt="comp"
        />
      <main>
        <h1>Welcome!</h1>
        <h2 className="text-[#d63384]">Are you ready to <Typewriter
            words={[" code?", " learn?", " improve?"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1200}
          /></h2>
        <p className="text-p">
          {" "}
          This web course is carefully designed to prepare the students for the
          programming assignments in ID1018. The web course includes both theory
          on different programming subjects and also practice tests where the
          students get to practice coding.
        </p>
        <div className="buttons">
          <Link to={`/login`}>
            <button className="login bg-ourGreen">Log In</button>
          </Link>
          <Link to={`/createaccount`}>
            <button className="signup">Sign Up</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default WelcomePage;
