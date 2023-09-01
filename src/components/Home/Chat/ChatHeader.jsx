import Avatar from "../Avatar";

const ChatHeader = () => {
  return (
    <div className="flex items-center rounded-tr-lg gap-2 px-3 py-4 bg-orange-400 border-b-2 border-blue-400">
      <Avatar />
      <h2 className="font-extrabold">Ramin</h2>
    </div>
  );
};

export default ChatHeader;
