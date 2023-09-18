import { useContext, useEffect, useState } from "react";
import Message from "./Message";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";
import { ActiveUserContext } from "../../../context/ActiveUserContext";

const ChatBody = () => {
  const [messages, setMessages] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { activeConvo } = useContext(ActiveUserContext);

  useEffect(() => {
    // Define the reference to the "messages" collection
    console.log("activeConvo", activeConvo);
    const messagesRef = collection(doc(db, "chats", activeConvo), "messages");

    // Create a query to order messages by date in ascending order
    const messagesQuery = query(messagesRef, orderBy("date", "asc"));

    // Create a snapshot listener to get real-time updates
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(newMessages);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  console.log("messages", messages);

  return (
    <div className="h-[500px] p-3 overflow-auto">
      {messages?.map((message) => (
        <Message
          key={message?.date}
          name={message?.author}
          text={message?.text}
          // date={message?.date}
          direction={message?.author === currentUser?.displayName && "right"}
        />
      ))}
    </div>
  );
};

export default ChatBody;
