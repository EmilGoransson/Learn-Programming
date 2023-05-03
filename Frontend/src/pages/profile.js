import "./profile.css";
import React, { useState } from 'react';
import useLevelStore from '../Model/frontEndStore';
import decode from "../decode_token"

const Profile = (props) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const litstar = "https://i.imgur.com/PO5mEkq.png";
  const handleSubmit = async (event) => {
    alert("I am an alert box!");
  }
  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const updateAccount = async (e) => {
    console.log("trying to update credentials for user: " + decode(localStorage.token).user.firstName + decode(localStorage.token).user.lastName)
    var id = decode(localStorage.token).user.id;
    const res = await fetch("http://130.229.172.67:3003/authentication/edit", {
      method: "POST",
      header: "plain/text",
      headers: {id: id},
      body: JSON.stringify()
    })
    console.log("Successfully updated user credentials");
  }

  const handleDelete = async (event) => {
    if(window.confirm("Are you sure you want to delete your account?")){
      console.log("Trying to remove account "+ Number(decode(localStorage.token).user.id))
      const user_id = decode(localStorage.token).user.id
      const res = await fetch("http://130.229.172.67:3003/authentication/remove", {
        method: "GET",
        headers: {
          id: user_id,
        },
      })

    }
  }

  return (
    <body>
      <div className="profile-container">
        <div className="level-container">
            <p className="levelText">LEVEL</p>

            <p className="levelNumber">{currentLevel}</p>
            <img src={litstar} className="profile-level-star"/>
        </div>
        <p className="profile-firstlastname">
          {name}
        </p>
        <p className="profile-mail">
          {email}
        </p>
        {/*<button className="edit-button">Edit Profile</button>*/}
      </div>

      {/* Edit profile */}

      {/*<div className="edit-profile-container">*/}
        <div className="edit-profile-container">
          <p className="profile-heading">Edit Profile</p>
          <form onSubmit={handleSubmit} className="form">
            <label className="profile-label">
              <span className="profile-label-text">Change first name</span>  
              <input
                type="text"
                value={firstName}
                onChange={(e) => onChange(e)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">Change last name</span>  
              <input
                type="text"
                value={lastName}
                onChange={(e) => onChange(e)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">Change E-mail</span>  
              <input
                type="text"
                value={email}
                onChange={(e) => onChange(e)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">New password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => onChange(e)}
                className="inputSquare"
              />
            </label>
            <button onClick={updateAccount}
              type="submit" 
              className="saveButton" 
            > 
              Save
            </button> 
          </form>
        </div>
      {/*</div>*/}
      <button onClick={handleDelete} className="delete-account-button">Delete Account</button>
    
    </body>
    
  );
  //return (<h1>My profile</h1>);
};

export default Profile;
