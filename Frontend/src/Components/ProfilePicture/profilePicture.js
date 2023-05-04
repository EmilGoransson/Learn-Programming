import React, {useState} from "react";
import "./profilePicture.css";

const ProfilePicture = () => {
    const [image, setImage] = useState(null);
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const [showPopup, setShowPopup] = useState(false);

    /*const handleClick = () => {
        uploadedImage.current = image;
        setImage(image);
    };*/
    
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
          }
    };
    return (
        <div className="pictureContainer">
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                ref={imageUploader} 
                className="inputButton"
            />
            <div className="imageContainer" onClick={() => imageUploader.current.click()}>
            </div>
            {/*<div className="imageContainer" onClick={() => setShowPopup(true)}>
                {showPopup && (
                <div className="popup">
                    <div className="option" onClick={() => setShowPopup(false)&& setImage("https://i.imgur.com/hYZ0fRZ.png")}>
                    Option 1
                    </div>
                    <div className="option" onClick={() => setShowPopup(false)}>
                    Option 2
                    </div>
                    <div className="option" onClick={() => setShowPopup(false)}>
                    Option 3
                    </div>
                </div>
                )}
            </div>*/}
            <img ref={uploadedImage} className="image" alt="profilePic"/>
            
        </div>
    );
}
export default ProfilePicture;


//<img src="https://i.imgur.com/hYZ0fRZ.png" alt="rabbit" onClick={() => handleImageClick("https://i.imgur.com/hYZ0fRZ.png")} />
//<img src="https://i.imgur.com/bgtYDHd.png" alt="frog" onClick={() => handleImageClick("https://i.imgur.com/bgtYDHd.png")} />
//<img src="https://i.imgur.com/UkmdMDY.png" alt="duck" onClick={() => handleImageClick("https://i.imgur.com/UkmdMDY.png")} />
