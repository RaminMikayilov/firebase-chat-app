import Avatar from "../Avatar";

const ChatHeader = () => {
  return (
    <div className="flex items-center rounded-tr-lg gap-2 px-3 py-4 text-cblue border-b-2 border-blue-300">
      <Avatar />
      <h2 className="font-extrabold">Ramin</h2>
    </div>
  );
};

export default ChatHeader;
