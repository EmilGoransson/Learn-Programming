import React, {useState, useEffect} from "react";
import "./profilePicture.css";
import decode from "../../decode_token";
import useLevelStore from "../../Model/frontEndStore";

const ProfilePicture = () => {
    const [image, setImage] = useState(null);
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
                <button className="exitPopup" type="button" onClick={() => setShowPopup(false)}>x</button>
            </div>
        </div>
        </body>
    );
}
export default ProfilePicture;
