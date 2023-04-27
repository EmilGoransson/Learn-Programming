function TopBarView(props) {
  return (
    <div className="bg-[#14161B] h-16 position-fixed text-right item-right  end px-6 z-50 w-screen flex justify-end items-center">
      <div className="text-white pr-2 flex items-center">
        <div className="mr-5 text-xl text-[#CECECE]">{props.name}</div>
        <img
          className="w-12 h-12 rounded-full"
          alt="avatar"
          src={props.avatar}
        />
      </div>
    </div>
  );
}
export default TopBarView;
