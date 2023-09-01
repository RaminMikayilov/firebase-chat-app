import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = () => {
  return (
    <div className="w-[600px] bg-gray-200 rounded-r-lg">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default Chat;
