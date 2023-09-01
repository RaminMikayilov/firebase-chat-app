import Header from "./Header";
import Searchbar from "./Searchbar";
import Messages from "./Messages";

const Sidebar = () => {
  return (
    <div className="bg-orange-500 w-[300px] rounded-l-lg">
      <Header />
      <Searchbar />
      <Messages />
    </div>
  );
};

export default Sidebar;
