import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = () => {
  return (
    <div className="w-[600px] rounded-r-lg bg-white">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default Chat;
