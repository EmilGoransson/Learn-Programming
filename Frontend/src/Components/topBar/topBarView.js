function TopBarView(props) {
  return (
    <div className="bg-[#14161B] h-16 position-fixed text-right item-right  end px-6 z-50 w-screen">
      <div className="text-white pr-5 ">
        <span className="mr-5 text-xl text-[#CECECE]">{props.name}</span>
        <img
          className="w-12 h-12 rounded-full float-right "
          alt="avatar"
          src={props.avatar}
        />
      </div>
    </div>
  );
}
export default TopBarView;
