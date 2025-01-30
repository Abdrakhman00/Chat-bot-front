import React from "react";

const Header = ({ onOpenChat }) => {  // Принимаем onOpenChat
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="bg-primary text-white text-center py-5"
      style={{ background: "var(--linear-bg)" }}
    >
      <div className="container">
        <h1
          className="display-4 fw-bold"
          style={{
            animation: "float 3s ease-in-out infinite",
            animationDelay: "1s",
          }}
        >
          Революционизируйте ваш бизнес с помощью ИИ ЧатБота
        </h1>
        <p className="lead mt-3">
          Улучшайте обслуживание клиентов и увеличивайте вовлеченность с нашим
          ИИ-чатботом.
        </p>
        <div className="mt-4">
          <button  // Заменяем <a> на кнопку
            onClick={onOpenChat}  // Теперь вызывает окно с вводом номера
            className="btn btn-light btn-lg mx-2"
            style={{ color: "var(--color-violet)" }}
          >
            Начать
          </button>
          <button
            onClick={scrollToFeatures}
            className="btn btn-outline-light btn-lg mx-2"
            style={{ borderColor: "var(--color-light)" }}
          >
            Узнать больше
          </button>
        </div>
      </div>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
