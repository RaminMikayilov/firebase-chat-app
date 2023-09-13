import Profile from "./Profile";

const Messages = () => {
  return (
    <div className="px-2 py-4 space-y-4 h-[500px] overflow-auto">
      {[...Array(5)].map((_, i) => (
        <Profile key={i} name="Ramin" lastMessage="last message" />
      ))}
    </div>
  );
};

export default Messages;
