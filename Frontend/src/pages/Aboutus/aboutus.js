import React from "react";
import {Link} from "react-router-dom";
import "./aboutus.css";
import {ReactComponent as Mail} from "./mail.svg";
import TopBar from "../../Components/topBar/topBarPresenter";
import RightSideBar from "../../Components/rightSideBar/rightSideBarPresenter";
import PinnedList from "../../Components/PinnedList/PinnedList";
import Progress from "../../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Aboutus() {
    
    const handleLogoutClick = () => {
        localStorage.removeItem("token");
    }; 
   
    return (
        <div> <TopBar></TopBar>
        <RightSideBar></RightSideBar>
        <PinnedList></PinnedList>
        <Progress></Progress>
        <Sidebar></Sidebar>
      
        <div className="Aboutus"> 
      
         <main>
        <h1>About us</h1>
        <p> We are 8 students who are studying their second year in information 
          Technology at KTH. We want the future students of this program to love 
          programming as much as we do. Therefore we have developed this course in
          hope that they will get a great headstart into the world of programming. </p>
          <h1>II1305</h1>
          <p>This project was developed during the project course with the above coursecode at KTH
            University. During the course of a month four sprints were scheduled 
            where the scrum method was used.
          </p>
          <h1>Contact</h1>
          <div class="contact-container">
         <div class="mail-container">
          <Mail className="mail" />
          <p class="mail-text">proglin@gmail.com</p>
          </div>
         </div>

         <div className="buttons">
                    <Link to={`/login`}>
                        <button className="logout" onClick={handleLogoutClick}>
                            Log out
                        </button>
                    </Link>
        
          
          </div>

        
    
      </main>

        </div>
        </div>
    );
}

export default Aboutus;