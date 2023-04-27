import "./profile.css";
import React, { useState } from 'react';

const Profile = (props) => {
  const {firstN, lastN, mail} = props;
  const star = "https://i.imgur.com/2HZJWia.png";

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (event) => {
    alert("I am an alert box!");
  }

  const handleDelete = async (event) => {
    window.confirm("Are you sure you want to delete your account?");
  }

  return (
    <body>
      <div className="profile-container">
        <div className="level-container">
            <p className="levelText">LEVEL</p>
            <img src={star} className="profile-level-star" alt="star" />
        </div>
        <p className="profile-firstlastname">
          {firstN} {lastN}
        </p>
        <p className="profile-mail">
          {mail}
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
                onChange={(event) => setFirstName(event.target.value)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">Change last name</span>  
              <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">Change E-mail</span>  
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="inputSquare"
              />
            </label>
            <label className="profile-label">
              <span className="profile-label-text">New password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="inputSquare"
              />
            </label>
            <button
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
