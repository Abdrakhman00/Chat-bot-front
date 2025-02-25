import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import "./ChatModal.css";

export const ChatModal = ({ isOpen, onClose, userId, phone }) => {
  const [messages, setMessages] = useLocalStorage(`chatMessages-${userId}`, []);
  const [userInput, setUserInput] = useState("");

  // Загружаем историю чата при открытии
  useEffect(() => {
    if (!isOpen) return;

    const fetchChatHistory = async () => {
      try {
        const formData = new FormData();
        formData.append("user_id", userId);
    
        const response = await fetch("http://5.35.106.195:8081/chat/get_chat", {
          method: "POST",
          body: formData,
        });
    
        console.log("Ответ сервера (get_chat):", response);
    
        if (!response.ok) {
          throw new Error(`Ошибка при запросе: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Полученные данные:", data);
    
        if (Array.isArray(data.answer)) {
          const chatHistory = data.answer.map((item) => ({
            sender: item.Role === "user" ? "user" : "bot",
            text: item.Content,
          }));
    
          setMessages(chatHistory.length > 0 ? chatHistory : [
            { sender: "bot", text: "Здравствуйте! Чем можем помочь?" },
          ]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке истории чата:", error);
      }
    };
    

    fetchChatHistory();
  }, [isOpen, userId]);

  // Отправка сообщения на сервер
  const sendMessageToBackend = async (message) => {
    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("user_message", message);
      if (phone) formData.append("phone", phone);

      const response = await fetch("http://5.35.106.195:8081/chat/send_message", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка при запросе: ${response.status}`);
      }

      const responseText = await response.text();
      console.log("Ответ от API на отправку:", responseText); // Лог ответа
      const data = JSON.parse(responseText);

      return data.answer || "Ошибка: пустой ответ от сервера.";
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      return "Извините, произошла ошибка при обработке вашего сообщения.";
    }
  };

  // Обработчик отправки сообщения
  const handleSendMessage = async () => {
    if (!userInput.trim()) return; // Защита от пустых сообщений

    try {
      const userMessage = { sender: "user", text: userInput.trim() };
      setMessages((prev) => [...prev, userMessage]);
      setUserInput("");

      const botReply = await sendMessageToBackend(userInput.trim());
      const botMessage = { sender: "bot", text: botReply };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Ошибка при обработке сообщения:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chat-modal-overlay">
      <div className="chat-modal-content">
        <h2 className="chat-title">AiSale</h2>

        <div className="chat-window">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "bot" ? "left" : "right"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Введите сообщение..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Отправить</button>
        </div>
        <button className="close-chat-btn" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
};
