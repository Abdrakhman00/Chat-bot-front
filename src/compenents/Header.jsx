import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const Header = ({ onStartChat }) => {
  const scrollToFeatures = () => {
    setTimeout(() => {
      const featuresSection = document.getElementById("features");
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="bg-primary text-white text-center py-5" style={{ background: "var(--linear-bg)" }}>
      <div className="container">
        <h1 className="display-4 fw-bold" style={{ animation: "float 3s ease-in-out infinite", animationDelay: "1s" }}>
          Революционизируйте ваш бизнес с помощью ИИ ЧатБота
        </h1>
        <p className="lead mt-3">
          Улучшайте обслуживание клиентов и увеличивайте вовлеченность с нашим ИИ-чатботом.
        </p>
        <div className="mt-4">
          <button
            onClick={onStartChat} // Передаем обработчик, который вызывается в App.js
            className="btn btn-light btn-lg mx-2"
            style={{ color: "var(--color-violet, #6a0dad)" }}
          >
            Начать
          </button>
          <button
            onClick={scrollToFeatures}
            className="btn btn-outline-light btn-lg mx-2"
            style={{ borderColor: "var(--color-light, #ffffff)" }}
          >
            Узнать больше
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
