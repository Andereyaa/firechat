import { useState } from "react";

export default function ChatRoom() {
  const messages = [];
  const sendMessage = async (e) => {};
  const [message, setMessage] = useState("");

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        {/* <span ref={dummy}></span> */}
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message..."
        />
        <button type="submit"></button>
      </form>
    </>
  );
}
