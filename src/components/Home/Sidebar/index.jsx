import Header from "./Header";
import Searchbar from "./Searchbar";
import Users from "./Users";

const Sidebar = () => {
  return (
    <div className="bg-white/90 text-cblue w-[300px] rounded-l-lg">
      <Header />
      <Searchbar />
      <Users />
    </div>
  );
};

export default Sidebar;
