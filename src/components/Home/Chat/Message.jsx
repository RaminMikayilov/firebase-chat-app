import Avatar from "../Avatar";

const Message = ({ direction }) => {
  return (
    <div
      className="flex items-end py-2 gap-2 max-w-[80%]"
      style={direction === "right" ? { marginLeft: "auto" } : {}}
    >
      {direction !== "right" && <Avatar />}
      <p
        className={`px-3 pt-2 pb-7 rounded-lg relative ${
          direction === "right" ? "bg-orange-400" : "bg-gray-600"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
        repudiandae ipsa, reprehenderit eveniet accusamus at dolorum, incidunt
        atque officia molestias saepe optio dolore numquam earum?
        <span
          className={`absolute bottom-1 text-xs bg-blue-400/50 p-1 rounded-lg ${
            direction === "right" ? "left-1" : "right-1"
          } `}
        >
          just now
        </span>
      </p>
      {direction === "right" && <Avatar />}
    </div>
  );
};

export default Message;
