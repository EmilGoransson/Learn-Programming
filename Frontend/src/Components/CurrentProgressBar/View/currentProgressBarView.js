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
          position: "absolute",
          bottom: 0,
          right: 0,
          marginRight: "20%",
          marginBottom: "10%",
        };
      } else if (index === 1) {
        // Second star, bottom-left position
        styles = {
          position: "absolute",
          bottom: 0,
          left: 0,
          marginLeft: "20%",
          marginBottom: "10%",
        };
      } else if (index === 2) {
        // Third star, top position
        styles = {
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "85%",
        };
      }
      return (
        <div key={star + index} style={styles}>
          <img src={star} className="w-[40px] h-[40px]" alt="star" />
        </div>
      );
    });
  }

  return (
    <div className="fixed right-4">
      <div className="pb-4 pt-16">
        <div className="mr-20 text-[#CECECE]">
          {props.level} / {props.totalLevels}
        </div>

        <ProgressBar
          className="w-44 mx-auto bg-red custom-progress-bar"
          now={props.progress}
        />
      </div>

      <div className="bg-[#1B2432] rounded-xl h-32 w-40 ml-2 text-black text-center font-sans">
        <div className="flex flex-col">{renderStars()}</div>
      </div>
    </div>
  );
}

export default ProgressBarView;
