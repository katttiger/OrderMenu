import { useState } from "react";
import styles from "./chatbot.module.css";

type ChatMessage = {
  message: string;
  author: string;
};

export const Chatbot = () => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);

  const sendquestion = () => {
    let chatMessage: ChatMessage = {
      message: message,
      author: "user",
    };
    setChatHistory((chat) => [...chat, chatMessage]);
    console.log(message);
    sendQuestionToChatApi();
    setMessage("");
    
  };

  const sendQuestionToChatApi = async () => {
    await fetch("https://localhost:7123/api/Chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.text())
      .then((data) =>
        setChatHistory((chatHistory) => [
          ...chatHistory,
          { message: data, author: "system" },
        ])
      )
      .then(() => console.log(chatHistory))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <i
        className={`fas fa-regular fa-comments fa-2xl ${styles.chatbot}`}
        
        data-bs-toggle="offcanvas"
        data-bs-target="#chatBot"
      ></i>

      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="chatBot"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasExampleLabel">Bichiibot</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className={styles.offcanvasChatbody}>
          <p className={styles.system}>Hello! What can i do for you?</p>
          {chatHistory.map((chatmessage) =>
            chatmessage.author === "user" ? (
              <p key={chatmessage.message} className={styles.user}>
                {chatmessage.message}
              </p>
            ) : (
              <p key={chatmessage.message} className={styles.system}>
                {chatmessage.message}
              </p>
            )
          )}
        </div>
        <div id='end-of-chat'></div>
        <div className={styles.offcanvasfooter}>
          <input
            type="text"
            value={message}
            onChange={(m) => setMessage(m.target.value)}
          />
          <button
            className={`btn btn-success ${styles.sendmessage}`}
            onClick={message.length > 0 ? () => sendquestion() : () => {}}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};
