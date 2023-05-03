import ProgressBar from "react-bootstrap/ProgressBar";
import "./currentProgressBar.css";

function ProgressBarView(props) {
  function renderStars() {
    // Renders each star with correct position and spacing
    return props.stars.map((star, index) => {
      let styles = {};
      if (index === 0) {
        // First star, bottom-right position
        styles = {
          position: "fixed",
          top: "29%",
          right: "-17%",
          marginRight: "20%",
        };
      } else if (index === 1) {
        // Second star, bottom-left position
        styles = {
          position: "fixed",
          top: "29%",
          right: "-12%",
          marginRight: "20%",
        
        };
      } else if (index === 2) {
        // Third star, top position
        styles = {
          position: "fixed",
          top: "23%",
          right: "-14.5%",
          marginRight: "20%",
        
        };
      }
      return (
        <div key={star + index} style={styles}>
          <img src={star} className="star" alt="star" />
        </div>
      );
    });
  }

  return (
    <div className="star-container">
      <div>
        <div className="level-text text-[#CECECE]">
          {props.level} / {props.totalLevels}
        </div>

        <ProgressBar
          className="progressBar custom-progress-bar"
          now={props.progress}
        />
      </div>

      <div className="test bg-[#1B2432] rounded-xl">
        <div className="test2">{renderStars()}</div>
      </div>
    </div>
  );
}

export default ProgressBarView;
