import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./chatPage.css";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Загрузка истории чата из localStorage при загрузке компонента
  useEffect(() => {
    const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setMessages(chatHistory);
  }, []);

  // Сохранение истории чата в localStorage при каждом обновлении
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(messages));
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, user: true };
      setMessages([...messages, userMessage]);
      setInput("");

      // Имитация ответа чат-бота
      setTimeout(() => {
        const botMessage = {
          text: "This is a chatbot response!",
          user: false,
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleClearHistory = () => {
    setMessages([]);
    localStorage.removeItem("chatHistory");
  };

  return (
    <div className="container chat-container">
      <h2 className="chat-header">Chat with Our Bot</h2>
      <button className="btn btn-danger mb-3" onClick={handleClearHistory}>
        Clear Chat History
      </button>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`d-flex ${
              message.user ? "justify-content-end" : "justify-content-start"
            } mb-2`}
          >
            <div
              className={`chat-message ${
                message.user ? "user" : "bot"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="form-control chat-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="chat-send-btn ms-2" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
