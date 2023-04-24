function ProgressStarView(props) {
  function renderStars() {
    //renders each star in the props.stars array
    return props.stars.map((star, index) => {
      return (
        <div key={star + index}>
          <img src={star} className="w-[85px] h-[85px]" alt="star" />
          <div className="pb-4 text-xl pl-1">Lab {index + 1}</div>
        </div>
      );
    });
  }
  return (
    <div className="bg-[#9bd7a1] w-40 h-96 flex justify-center items-center pr-3 pt-4 font-sans rounded-xl shadow-xl">
      <div className="flex flex-col">{renderStars()}</div>
    </div>
  );
}
export default ProgressStarView;
