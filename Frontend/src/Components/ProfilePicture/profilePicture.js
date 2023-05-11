import React, {useState, useEffect} from "react";
import "./profilePicture.css";
import useLevelStore from "../../Model/frontEndStore";

const ProfilePicture = () => {
    const [showPopup, setShowPopup] = useState(false);
    const setProfilePic = useLevelStore((state) => state.setProfilePic)
    const pic = useLevelStore((state) => state.profilePic)

    useEffect(() => {
          
    });

    return (
        <body>
        <img src={pic} className="image" alt="profilePic"/>  
            
        <div className="pictureContainer">
            <button className="changePicButton" type="button" onClick={() => setShowPopup(true)}>Change Avatar</button>
            <div className="popup" style={{display:showPopup?"": "none"}}>
                <img src="https://imgur.com/U7NDFB6.png" className="popupPic" alt="bearPic" onClick={() => {setShowPopup(false); setProfilePic("https://imgur.com/U7NDFB6.png")}}/>
                <img src="https://imgur.com/VuvuBaa.png" className="popupPic" alt="frogPic" onClick={() => {setShowPopup(false); setProfilePic("https://imgur.com/VuvuBaa.png")}}/>
                <img src="https://imgur.com/iXIZmIL.png" className="popupPic" alt="rabbitPic" onClick={() => {setShowPopup(false); setProfilePic("https://imgur.com/iXIZmIL.png")}}/>
                <img src="https://imgur.com/QbVIBJA.png" className="popupPic" alt="duckPic" onClick={() => {setShowPopup(false); setProfilePic("https://imgur.com/QbVIBJA.png")}}/>
                <img src="https://i.imgur.com/nNSEEza.png" className="popupPic" alt="seagullPic" onClick={() => {setShowPopup(false); setProfilePic("https://i.imgur.com/nNSEEza.png")}}/>
                <img src="https://i.imgur.com/Evf1GZF.png" className="popupPic" alt="seagullPic" onClick={() => {setShowPopup(false); setProfilePic("https://i.imgur.com/Evf1GZF.png")}}/>
                <img src="https://i.imgur.com/ONAioqy.png" className="popupPic" alt="seagullPic" onClick={() => {setShowPopup(false); setProfilePic("https://i.imgur.com/ONAioqy.png")}}/>
                <img src="https://i.imgur.com/owFQ9Xa.png" className="popupPic" alt="seagullPic" onClick={() => {setShowPopup(false); setProfilePic("https://i.imgur.com/owFQ9Xa.png")}}/>
                <button className="exitPopup" type="button" onClick={() => setShowPopup(false)}>x</button>

            </div>
        </div>
        </body>
    );
}
export default ProfilePicture;
