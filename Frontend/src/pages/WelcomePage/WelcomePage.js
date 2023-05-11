import React from "react";
import "./WelcomePage.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <img src="https://i.imgur.com/yLqZDJM.png" className="logo" />
      <Link to={`/login`}>
        <img
          src="https://i.imgur.com/GfPVRJH.png"
          className="comp"
          alt="comp"
        />
      </Link>
      <main>
        <h1>Welcome!</h1>
        <h2 className="text-[#d63384]">
          Are you ready to{" "}
          <Typewriter
            words={[" code?", " learn?", " program?", " improve?", "have fun?"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>
        <p className="text-p">
          {" "}
          This online course has been carefully designed to prepare students for
          programming assignments in ID1018 and programming in general. The
          course includes theoretical instruction on various programming
          subjects as well as a hands-on online compiler, allowing students to
          compile code directly in their browser.{" "}
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
