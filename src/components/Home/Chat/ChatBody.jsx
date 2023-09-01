import Message from "./Message";

const ChatBody = () => {
  return (
    <div className="h-[500px] p-3 overflow-auto">
      <Message />
      <Message direction="right" />
      <Message />
      <Message />
      <Message />
      <Message direction="right" />
      <Message />
    </div>
  );
};

export default ChatBody;
