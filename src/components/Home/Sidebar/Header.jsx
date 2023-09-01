import Avatar from "../Avatar";
const Header = () => {
  return (
    <div className="flex items-center justify-between gap-2 px-3 py-4">
      <div className="flex gap-2 items-center">
        <Avatar />
        <h2 className="font-extrabold">Ramin</h2>
      </div>
      <button className="bg-blue-500 text-white px-3 py-1 rounded-md">
        logout
      </button>
    </div>
  );
};

export default Header;
