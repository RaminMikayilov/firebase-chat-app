import { useContext } from "react";
import Avatar from "../Avatar";
import { ActiveUserContext } from "../../../context/ActiveUserContext";

const ChatHeader = () => {
  const { activeUser } = useContext(ActiveUserContext);
  return activeUser ? (
    <div className="flex items-center rounded-tr-lg gap-2 px-3 py-4 text-cblue border-b-2 border-blue-300">
      <Avatar name={activeUser?.name} />
      <h2 className="font-extrabold">{activeUser?.name}</h2>
    </div>
  ) : (
    <div className="font-bold rounded-tr-lg px-3 py-4 text-cblue border-b-2 border-blue-300">
      Real Time Chat App
    </div>
  );
};

export default ChatHeader;
