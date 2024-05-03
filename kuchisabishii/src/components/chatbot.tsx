import { useEffect, useState } from "react";
import styles from "./chatbot.module.css"

export const Chatbot = () => {

  const [chatHistory, setChatHistory] = useState<string[]>([]);
  let question: string = "";

  const sendquestion = (question: string) => {
    setChatHistory(() => [...chatHistory, question])
    question = "";
    sendQuestionToChatApi();
  }

  const sendQuestionToChatApi = () => {

    useEffect(() => {
      fetch('http://localhost:7123/api/chat', {
        method: 'POST',
        body: JSON.stringify(chatHistory)
      })
        .then((res) => res.json())
        .then((data) => setChatHistory(() => [...chatHistory, data]))
        .catch((err) => console.log(err))
    }, [])

  }
  return (
    <>
      <div className={styles.chatbot} data-bs-toggle="offcanvas" data-bs-target="#chatBot">
        <i className="fas fa-comment-dots"></i>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex={-1} id="chatBot" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasExampleLabel">Bichiibot</h5>
          <button type="button" className="btn-close" data-bs-dismiss="canvas" aria-label="Close"></button>
        </div>
        <div className={styles.offcanvasChatbody}>
          <p className={styles.chatmessage}>Hello! What can i do for you kind person Hello! What can i do for you kind person</p>
          <p className={styles.chatmessage}>Hello! What can i do you for kind person</p>
          <p className={styles.chatmessage}>Hello! What can i do you for kind person Hello! What can i do for you kind person Hello! What can i do for you kind person</p>
          <p className={styles.chatmessage}>Hello! What can i do you for kind person</p>
          {chatHistory.map((chatmessage) =>
            <p className={styles.chatmessage}>{chatmessage}</p>
          )}
        </div >
        <div className="offcanvas-footer">
          <input type="text" value={question} />
          <button className="btn btn-success" onClick={() => sendquestion(question)}>Send</button>
        </div>
      </div >

    </>
  )
}