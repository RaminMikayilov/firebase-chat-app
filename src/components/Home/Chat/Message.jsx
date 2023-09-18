import Avatar from "../Avatar";

const Message = ({ name, text, date, direction }) => {
  return (
    <div
      className={`flex items-end py-2 gap-2 max-w-[80%] ${
        direction === "right" && "flex-row-reverse ml-auto"
      }`}
    >
      <Avatar name={name} />
      <p
        className={`px-3 pt-2 pb-7 rounded-xl relative ${
          direction === "right"
            ? "bg-cblue rounded-br-none"
            : "bg-slate-100 text-gray-700 rounded-bl-none"
        }`}
      >
        {text}
        <span
          className={`absolute bottom-1 text-xs p-1 rounded-lg font-bold ${
            direction === "right" ? "left-1" : "right-1"
          } `}
        >
          {date}
        </span>
      </p>
    </div>
  );
};

export default Message;
