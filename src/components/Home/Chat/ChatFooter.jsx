import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import SendIcon from "../../../assets/icons/send.svg";
import { db } from "../../../firebase";
import { ActiveUserContext } from "../../../context/ActiveUserContext";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
const ChatFooter = () => {
  const { activeConvo } = useContext(ActiveUserContext);
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      const convoDocRef = doc(db, "chats", activeConvo);
      await addDoc(collection(convoDocRef, "messages"), {
        text,
        author: currentUser?.displayName,
        date: serverTimestamp(),
      });

      setText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between px-1 pr-3 rounded-br-lg border-t-2 border-gray-200"
    >
      <input
        type="text"
        className="w-full border-none outline-none px-3 py-5 text-blue-500"
        placeholder="Type a message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="bg-blue-600 p-2 rounded-full">
        <img src={SendIcon} alt="send" />
      </button>
    </form>
  );
};

export default ChatFooter;
