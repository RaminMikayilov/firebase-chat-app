const Searchbar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-2 bg-transparent placeholder:text-white outline-none border-y-2 border-blue-400 focus:border-white/80 duration-200"
      />
    </div>
  );
};

export default Searchbar;
