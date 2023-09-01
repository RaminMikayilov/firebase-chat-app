import Avatar from "../Avatar";

const Message = ({ direction }) => {
  return (
    <div
      className={`flex items-end py-2 gap-2 max-w-[80%] ${
        direction === "right" && "flex-row-reverse ml-auto"
      }`}
    >
      <Avatar />
      <p
        className={`px-3 pt-2 pb-7 rounded-xl relative ${
          direction === "right"
            ? "bg-cblue rounded-br-none"
            : "bg-slate-100 text-gray-700 rounded-bl-none"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
        repudiandae ipsa, reprehenderit eveniet accusamus at dolorum, incidunt
        atque officia molestias saepe optio dolore numquam earum?
        <span
          className={`absolute bottom-1 text-xs p-1 rounded-lg ${
            direction === "right" ? "left-1" : "right-1"
          } `}
        >
          just now
        </span>
      </p>
    </div>
  );
};

export default Message;
