import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import "./ChatModal.css";

export const ChatModal = ({ isOpen, onClose, userId, phone }) => {
  // Храним сообщения в localStorage по ключу "chatMessages-{userId}"
  const [messages, setMessages] = useLocalStorage(`chatMessages-${userId}`, [
    { sender: "bot", text: "Здравствуйте! Чем можем помочь?" },
  ]);
  const [userInput, setUserInput] = useState("");

  // При открытии чата загружаем историю
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const formData = new FormData();
        formData.append("user_id", userId);

        // Новый IP-адрес и порт
        const response = await fetch("http://5.35.106.195/chat/get_chat", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Ошибка при запросе: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.answer)) {
          const chatHistory = data.answer.map((item) => ({
            sender: item.Role === "user" ? "user" : "bot",
            text: item.Content,
          }));

          if (chatHistory.length > 0) {
            setMessages(chatHistory);
          } else {
            setMessages([
              { sender: "bot", text: "Здравствуйте! Чем можем помочь?" },
            ]);
          }
        }
      } catch (error) {
        console.error("Ошибка при загрузке истории чата:", error);
      }
    };

    if (isOpen) {
      fetchChatHistory();
    }
  }, [isOpen, userId, setMessages]);

  // Отправка нового сообщения на сервер
  const sendMessageToBackend = async (message) => {
    try {
      const formData = new FormData();
      formData.append("user_id", userId);
      formData.append("user_message", message);
      if (phone) formData.append("phone", phone);

      // Новый IP-адрес и порт
      const response = await fetch("http://5.35.106.195/chat/send_message", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Ошибка при запросе: ${response.status}`);
      }

      const data = await response.json();
      return data.answer;
    } catch (error) {
      console.error("Ошибка при отправке сообщения:", error);
      return "Извините, произошла ошибка при обработке вашего сообщения.";
    }
  };

  // Обработчик кнопки "Отправить" (и Enter)
  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    // Добавляем сообщение пользователя
    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");

    // Отправляем на сервер и получаем ответ
    const botReply = await sendMessageToBackend(userInput);

    // Добавляем ответ бота
    const botMessage = { sender: "bot", text: botReply };
    setMessages((prev) => [...prev, botMessage]);
  };

  // Если окно чата не открыто, ничего не рендерим
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
