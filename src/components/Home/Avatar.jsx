const Avatar = ({ name }) => {
  return (
    <div className="w-[40px] h-[40px] bg-blue-700 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
      {name?.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
