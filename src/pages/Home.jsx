import Sidebar from "../components/Home/Sidebar";
import Chat from "../components/Home/Chat";

const Home = () => {
  return (
    <div className="flex shadow-lg">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
