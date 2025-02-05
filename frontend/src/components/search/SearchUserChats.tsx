"use client";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useSession } from "next-auth/react";

const socket = io("http://localhost:3001");

export default function SearchUserChats({ receiverId }: { receiverId: number }) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<{ message: string }[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("directMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("directMessage");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("directMessage", {
        senderId: session?.user,
        receiverId,
        message,
      });
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Chat with User {receiverId}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.message}</div>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
