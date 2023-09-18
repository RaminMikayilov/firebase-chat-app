import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { ActiveUserContext } from "../../../context/ActiveUserContext";
import { useContext } from "react";

const Chat = () => {
  const { activeConvo } = useContext(ActiveUserContext);

  return (
    <div className="w-[600px] rounded-r-lg bg-white">
      {activeConvo ? (
        <>
          <ChatHeader />
          <ChatBody />
          <ChatFooter />
        </>
      ) : (
        <div className="flex items-center justify-center h-[500px]">
          <p className="text-2xl text-gray-400">Search a user to start</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
