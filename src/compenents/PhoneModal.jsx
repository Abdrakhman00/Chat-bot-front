import React, { useState } from "react";
import "./PhoneModal.css"; // стили для модалки

export const PhoneModal = ({ isOpen, onClose, onSubmit }) => {
  // Локальный стейт для телефона
  const [phone, setPhone] = useState("");

  if (!isOpen) {
    return null; // Если isOpen = false, не рендерим модалку
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Передаём телефон наверх
    onSubmit(phone);
    // Закрываем модалку
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Введите ваш номер телефона</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="+7 XXX XXX XX XX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="phone-input"
          />
          <button type="submit" className="btn btn-custom">
            Перейти в чат
          </button>
        </form>
        <button onClick={onClose} className="close-btn">
          Закрыть
        </button>
      </div>
    </div>
  );
};
