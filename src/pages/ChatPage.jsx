import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: true }]);
      setInput("");
      // Simulate chatbot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is a chatbot response!", user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Chat with Our Bot</h2>
      <div
        className="border rounded p-3"
        style={{ height: "400px", overflowY: "scroll" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`d-flex ${
              message.user ? "justify-content-end" : "justify-content-start"
            } mb-2`}
          >
            <div
              className={`p-2 rounded ${
                message.user ? "bg-primary text-white" : "bg-light text-dark"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success ms-2" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
