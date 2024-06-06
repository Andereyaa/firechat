export default function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL ||
            "https://api.dicebear.com/8.x/adventurer/svg?seed=Samantha"
          }
        />
        <p>{text}</p>
      </div>
    </>
  );
}
