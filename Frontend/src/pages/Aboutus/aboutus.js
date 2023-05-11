import React from "react";
import "./aboutus.css";
import { ReactComponent as Mail } from "./mail.svg";
import TopBar from "../../Components/topBar/topBarPresenter";
import RightSideBar from "../../Components/Sidebar/leftSideBar";
import PinnedList from "../../Components/PinnedList/PinnedList";
import Progress from "../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Aboutus() {
  /*const handleLogoutClick = () => {
    localStorage.removeItem("token"); 
  }; */
  return (
    <div>
      <div>
        <TopBar />
        <RightSideBar />
        <PinnedList />
        <Progress />
        <Sidebar />
      </div>
      <div className="Aboutus">
        <main>
          <h1>About us</h1>
          <p>
            We are a group of 8 students who are currently in their second year
            of studying Information Technology at KTH. Our aim is to inspire the
            future students of this program to develop a passion for
            programming, just like we have. To achieve this goal, we have
            developed a course that we hope will give them a great head start in
            the world of programming.{" "}
          </p>
          <h1>II1305</h1>
          <p>
            This project was developed as part of the project course II1305, at
            KTH, the Royal Institute of Technology . The project course spanned
            over a month, during which four sprints were scheduled, and the
            scrum method was used.
          </p>
          <h1>Contact</h1>
          <p>
          <div class="contact-container">
            <div class="mail-container">
              <Mail className="mail" />
              <p className="mail-text">proglin@gmail.com</p>
            </div>
          </div>
          </p>
        </main>
      </div>
    </div>
  );
}

export default Aboutus;
