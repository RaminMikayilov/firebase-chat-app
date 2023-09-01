import Header from "./Header";
import Searchbar from "./Searchbar";
import Messages from "./Messages";

const Sidebar = () => {
  return (
    <div className="bg-white/90 text-cblue w-[300px] rounded-l-lg">
      <Header />
      <Searchbar />
      <Messages />
    </div>
  );
};

export default Sidebar;
