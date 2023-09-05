import Avatar from "../Avatar";

const Messages = () => {
  return (
    <div className="px-2 py-4 space-y-4 h-[500px] overflow-auto">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center space-x-2 cursor-pointer hover:opacity-80 duration-200"
        >
          <Avatar name="ramin" />
          <div>
            <h2 className="font-bold">Ramin</h2>
            <p className="text-gray-400 text-sm">last message</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
