const Searchbar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-3 py-2 bg-transparent placeholder:text-cblue outline-none border-y-2 border-blue-300 focus:border-blue-600 duration-200"
      />
    </div>
  );
};

export default Searchbar;
