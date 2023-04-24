import ProgressBar from "react-bootstrap/ProgressBar";

function ProgressBarView(props) {
  return (
    <div className="bg-[#9bd7a1] rounded-xl shadow-2xl h-28 w-40 text-black text-center font-sans text-xl">
      LVL {props.level}
      <div className="pb-3">
        <ProgressBar
          variant="success"
          className="w-36 mx-auto"
          now={props.progress}
        />
      </div>
    </div>
  );
}

export default ProgressBarView;
