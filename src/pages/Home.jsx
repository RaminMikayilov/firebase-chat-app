import Sidebar from "../components/Home/Sidebar/Sidebar";
import Chat from "../components/Home/Chat/Chat";

const Home = () => {
  return (
    <div className="flex shadow-lg">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
