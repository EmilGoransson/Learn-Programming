import "./profile.css";

const Profile = (props) => {
  const {firstN, lastN, mail} = props;
  const star = "https://i.imgur.com/2HZJWia.png";
  return (
    <body>
      <div className="profile-container">
        <p className="profile-firstlastname">
          {firstN} {lastN}
        </p>
        <p className="profile-mail">
          {mail}
        </p>
        <button className="edit-button">Edit Profile</button>
      </div>
      <div className="level-container">
        <p className="levelText">LEVEL</p>
        <img src={star} className="profile-level-star" alt="star" />
        <button className="delete-account-button">Delete Account</button>
      </div>
    </body>
    
  );
  //return (<h1>My profile</h1>);
};

export default Profile;
