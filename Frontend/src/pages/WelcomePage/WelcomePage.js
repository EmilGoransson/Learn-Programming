import React from "react";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="WelcomePage h-screen">
      <img src="https://i.imgur.com/yLqZDJM.png" className="logo" />
      <main>
        <h1>Welcome!</h1>
        <h2 className="text-[#d63384]">Are you ready to code?</h2>
        <p>
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
