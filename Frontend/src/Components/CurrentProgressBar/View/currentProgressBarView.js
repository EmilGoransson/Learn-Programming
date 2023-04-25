import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarView(props) {
  function renderStars() {
    //renders each star in the props.stars array
    return props.stars.map((star, index) => {
      return (
        <div key={star + index} className="pr-3">
          <img src={star} className="w-[20px] h-[20px]" alt="star" />
          <div className="pb-2 text-xs pr-1">Lab {index + 1}</div>
        </div>
      );
    });
  }

  return (
    <div className="bg-[#a3d7cb] fixed right-2 rounded-xl h-28 w-40 text-black text-center font-sans">
      LVL {props.level}
      <div className="pb-3">
        <ProgressBar
          variant="success"
          className="w-36 mx-auto"
          now={props.progress}
        />
        <div className="flex flex-row px-3 pt-2">{renderStars()}</div>
      </div>
    </div>
  );
}

export default ProgressBarView;
