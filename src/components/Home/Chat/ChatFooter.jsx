import SendIcon from "../../../assets/icons/send.svg";

const ChatFooter = () => {
  return (
    <form className="bg-white flex items-center justify-between px-1">
      <input
        type="text"
        className="border-none outline-none rounded-full px-3 py-5 text-blue-500"
        placeholder="Type a message"
      />

      <button className="bg-blue-600 p-2 rounded-full">
        <img src={SendIcon} alt="send" />
      </button>
    </form>
  );
};

export default ChatFooter;
