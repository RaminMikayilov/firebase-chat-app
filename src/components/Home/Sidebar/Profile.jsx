import Avatar from "../Avatar";

const Profile = ({ name, lastMessage }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 duration-200">
      <Avatar name={name} />
      <div>
        <h2 className="font-bold">{name}</h2>
        <p className="text-gray-400 text-sm">{lastMessage}</p>
      </div>
    </div>
  );
};

export default Profile;
