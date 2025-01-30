import React, { useState } from "react";
import "./ChatModal.css";

export const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  
  // Замените на ваш номер телефона в формате "79001234567" (без + и пробелов)
  const whatsappNumber = "77087638739"; 

  // Шаблонные вопросы
  const templates = [
    "Какие у вас тарифы?",
    "Как работает ваш сервис?",
    "Есть ли у вас поддержка 24/7?",
    "Можно ли интегрировать ваш бот в Telegram?",
    "Как получить демо-доступ?",
  ];

  // Функция отправки сообщения
  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages([...messages, { id: messages.length + 1, text, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      let botResponse = "Спасибо за ваш вопрос! Мы скоро ответим.";

      if (text === "Какие у вас тарифы?") botResponse = "Наши тарифы зависят от количества пользователей.";
      else if (text === "Как работает ваш сервис?") botResponse = "Наш сервис использует AI для автоматизации общения.";
      else if (text === "Есть ли у вас поддержка 24/7?") botResponse = "Да, наша поддержка работает круглосуточно.";
      else if (text === "Можно ли интегрировать ваш бот в Telegram?") botResponse = "Да, интеграция поддерживается.";
      else if (text === "Как получить демо-доступ?") botResponse = "Оставьте заявку, и мы предоставим демо-доступ.";

      setMessages((prev) => [...prev, { id: prev.length + 1, text: botResponse, sender: "bot" }]);
    }, 1000);
  };

  // Отправка шаблонного вопроса
  const handleTemplateClick = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {/* Контейнер для кнопок чата и WhatsApp */}
      <div className="chat-buttons-container">
        {/* Кнопка чат-ассистента */}
        <button className="chat-assistant-btn" onClick={() => setIsOpen(true)}>
          💬
        </button>

        {/* Кнопка WhatsApp */}
        <a 
          href={`https://wa.me/${whatsappNumber}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <img src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png" alt="WhatsApp" />
        </a>
      </div>

      {/* Чат-модал */}
      {isOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <h4>Чат с ботом</h4>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div className="chat-body">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Шаблонные вопросы */}
          <div className="chat-templates">
            <h5>Часто задаваемые вопросы:</h5>
            <div className="template-list">
              {templates.map((template, index) => (
                <button key={index} className="template-btn" onClick={() => handleTemplateClick(template)}>
                  {template}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите сообщение..."
            />
            <button onClick={() => sendMessage(input)}>Отправить</button>
          </div>
        </div>
      )}
    </>
  );
};
