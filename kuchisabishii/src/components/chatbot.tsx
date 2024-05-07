import { useEffect, useRef, useState } from "react";
import styles from "./chatbot.module.css";

type ChatMessage = {
  message: string;
  author: string;
};

export const Chatbot = () => {
  const [message, setMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const inputMessage = document.getElementById("inputMessage");
  const chatBodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  },
  [chatHistory]);

  const sendquestion = () => {
    let chatMessage: ChatMessage = {
      message: message,
      author: "user",
    };
    setErrorMessage("");
    setChatHistory((chat) => [...chat, chatMessage]);
    sendQuestionToChatApi()
    setMessage("");
    inputMessage?.focus()
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
      .catch(() => setErrorMessage("Failed to connect to AI-Chatbot."))
  };

  return (
    <>
      <i
        className={`fas fa-regular fa-comments ${styles.chatbot}`}
        data-bs-toggle="offcanvas"
        data-bs-target="#chatBot"
      ></i>

      <div
        className={`offcanvas offcanvas-end ${styles.offcanvasChat}`}
        tabIndex={-1}
        id="chatBot"
        aria-labelledby="offcanvasExampleLabel">

        <div className={`offcanvas-header ${styles.offcanvasChatheader}`}>
          <h5 id="offcanvasExampleLabel">Bichiibot</h5>
          <button
            type="button"
            //className={`btn-close ${styles.xButtonImage}`}
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className={styles.offcanvasChatbody} ref={chatBodyRef}>
          <p className={styles.system}>Hello! What can i do for you?</p>
          {chatHistory.map((chatmessage, index) =>
            chatmessage.author === "user" ? (
              <p key={index} className={styles.user}>
                {chatmessage.message}
              </p>
            ) : (
              <p key={index} className={styles.system}>
                {chatmessage.message}
              </p>
            )
          )}
          <p>{errorMessage}</p>
        </div>
        <div className={styles.offcanvasfooter}>
          <input
            id="inputMessage"
            className={styles.inputMessageclass}
            type="text"
            value={message}
            onChange={(m) => setMessage(m.target.value)}
          />
          <button
            className={`btn ${styles.sendmessage}`}
            onClick={message.length > 0 ? () => sendquestion() : () => { }}
          >
            Send
          </button>
        </div>
      </div >
    </>
  );
};
