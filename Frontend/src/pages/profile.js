import "./profile.css";
import React, { useState } from "react";
import useLevelStore from "../Model/frontEndStore";
import ProfilePicture from "../Components/ProfilePicture/profilePicture";
import TopBar from "../Components/topBar/topBarPresenter";
import RightSideBar from "../Components/rightSideBar/rightSideBarPresenter";
import PinnedList from "../Components/PinnedList/PinnedList";
import Progress from "../Components/CurrentProgressBar/Presenter/currentProgressBarPresenter";
import Sidebar from "../Components/Sidebar/Sidebar";
import decode from "../decode_token";

const Profile = (props) => {
  const litstar = "https://i.imgur.com/PO5mEkq.png";
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { firstName, lastName, email, password } = inputs;
  const body = { firstName, lastName, email, password };
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  // Sends a request to server to update record with user_id
  const updateAccount = async (e) => {
    e.preventDefault();
    console.log(
      "Trying to update credentials for user: " +
        decode(localStorage.token).user.firstName +
        decode(localStorage.token).user.lastName
    );
    var id = decode(localStorage.token).user.id;
    const res = await fetch("http://130.229.172.67:3003/authentication/edit", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        token: localStorage.token,
        id: id,
      },
      header: { token: localStorage.token, id: id },
      body: JSON.stringify(body),
    });
    console.log("Successfully updated user credentials");
    // After updated credentials set new token and reload page to update model
    const parseRes = await res.json();
    if (
      parseRes.token &&
      parseRes.token != undefined &&
      parseRes.token != null
    ) {
      localStorage.setItem("token", parseRes.token);
      window.location.reload();
    } else {
      console.log("Error: Server did not generate token properly");
    }
  };
  // Handles delete on click. Requests server to delete record of user_id
  const handleDelete = async (e) => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      console.log(
        "Trying to remove account " + Number(decode(localStorage.token).user.id)
      );
      const user_id = decode(localStorage.token).user.id;
      const res = await fetch(
        "http://130.229.172.67:3003/authentication/remove",
        {
          method: "GET",
          headers: {
            id: user_id,
            token: localStorage.token,
          },
        }
      );
    }
  };

  return (
    <div>
      <div>
        <RightSideBar></RightSideBar>
        <Sidebar></Sidebar>
        <Progress />
        {/*<ProgressStar />*/}
        <PinnedList />
      </div>
      <TopBar></TopBar>

      <body>
        <div className="profile-container">
          <ProfilePicture></ProfilePicture>

          <p className="profile-firstlastname">
            {decode(localStorage.token).user.firstName +
              " " +
              decode(localStorage.token).user.lastName}
          </p>
          <p className="profile-mail">
            {decode(localStorage.token).user.email}
          </p>
          {/*<button className="edit-button">Edit Profile</button>*/}
        </div>

        {/* Edit profile */}

        {/*<div className="edit-profile-container">*/}
        <div className="edit-profile-container">
          <p className="profile-heading">Edit Profile</p>
          <form onSubmit={updateAccount} className="form">
            <label className="profile-label">
              <span className="profile-label-text">Change first name</span>
              <input
                type="text"
                value={firstName}
                onChange={(event) => onChange(event)}
                name="firstName"
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">Change last name</span>
              <input
                type="text"
                value={lastName}
                name="lastName"
                onChange={(event) => onChange(event)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">Change E-mail</span>
              <input
                type="text"
                value={email}
                name="email"
                onChange={(event) => onChange(event)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">New password</span>
              <input
                type="password"
                value={password}
                name="password"
                onChange={(event) => onChange(event)}
                className="inputSquare"
              />
            </label>
            <button type="submit" className="saveButton">
              Save
            </button>
          </form>
        </div>
        {/*</div>*/}
        <button onClick={handleDelete} className="delete-account-button">
          Delete Account
        </button>
      </body>
    </div>
  );
  //return (<h1>My profile</h1>);
};

export default Profile;
