import React, { useState } from "react";
import "./PhoneModal.css";

export const PhoneModal = ({ isOpen, onClose, onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  // Функция для форматирования номера телефона
  const formatPhoneNumber = (value) => {
    // Удаляем все нецифровые символы
    const digits = value.replace(/\D/g, "").slice(0, 11); // максимум 11 цифр

    if (!digits) return ""; // Если ничего не ввели, возвращаем пустую строку

    let formatted = "+" + digits[0]; // Первая цифра с "+"
    if (digits.length > 1) {
      formatted += " (" + digits.slice(1, 4); // Код в скобках
    }
    if (digits.length >= 4) {
      formatted += ")";
    }
    if (digits.length > 4) {
      formatted += " " + digits.slice(4, 7); // Первая группа после кода
    }
    if (digits.length >= 7) {
      formatted += "-" + digits.slice(7, 9); // Вторая группа
    }
    if (digits.length >= 9) {
      formatted += "-" + digits.slice(9, 11); // Третья группа
    }
    return formatted;
  };

  // Обработчик изменения номера телефона
  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  // Обработчик изменения имени
  const handleNameChange = (e) => {
    setName(e.target.value.replace(/\s+/g, " ").trimStart());
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Очищаем номер от всех символов, кроме "+", и цифр
    const cleanedPhone = phone.replace(/[^\d+]/g, "");

    // Проверяем, что номер начинается с "+"
    if (!cleanedPhone.startsWith("+")) {
      console.error("Номер телефона должен начинаться с '+'");
      return;
    }

    // Убираем лишние пробелы в имени
    const trimmedName = name.trim();

    // Отправляем данные через переданную функцию
    onSubmit({ phone: cleanedPhone, name: trimmedName });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Введите ваши данные</h2>
        <form onSubmit={handleSubmit}>
          {/* Поле для телефона */}
          <input
            type="tel"
            placeholder="+7 (XXX) XXX-XX-XX"
            value={phone}
            onChange={handlePhoneChange}
            required
            className="phone-input"
          />
          {/* Поле для имени */}
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={handleNameChange}
            required
            className="name-input"
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