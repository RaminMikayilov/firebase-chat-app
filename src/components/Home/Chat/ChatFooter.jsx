import SendIcon from "../../../assets/icons/send.svg";

const ChatFooter = () => {
  return (
    <form className="flex items-center justify-between px-1 pr-3 rounded-br-lg border-t-2 border-gray-200">
      <input
        type="text"
        className="w-full border-none outline-none px-3 py-5 text-blue-500"
        placeholder="Type a message"
      />

      <button className="bg-blue-600 p-2 rounded-full">
        <img src={SendIcon} alt="send" />
      </button>
    </form>
  );
};

export default ChatFooter;
