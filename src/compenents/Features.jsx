import React, { useState } from 'react';

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const featuresData = [
    {
      icon: "bi bi-lightning-fill",
      title: "Мгновенные ответы",
      shortDescription: "Круглосуточная поддержка с мгновенными ответами на запросы клиентов.",
      detailedDescription: "Наш ИИ помогает сократить время ожидания клиентов и повышает их лояльность, обеспечивая ответы в режиме реального времени.",
    },
    {
      icon: "bi bi-gear-fill",
      title: "Настраиваемые сценарии",
      shortDescription: "Подстройка под уникальные задачи вашего бизнеса.",
      detailedDescription: "Вы можете настроить чат-бота для решения сложных задач, таких как обработка заказов или техническая поддержка.",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "Анализ данных",
      shortDescription: "Изучайте поведение клиентов для улучшения сервиса.",
      detailedDescription: "Получайте полезные данные о взаимодействиях и используйте их для принятия обоснованных решений.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container py-5" id="features">
      <h2 className="text-center mb-5 text-uppercase fw-bold" style={{ color: "#34495e" }}>
        Особенности
      </h2>
      <div className="row">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 d-flex justify-content-center"
            onClick={() => toggleExpand(index)}
            style={{ cursor: "pointer", transition: "transform 0.3s", transform: expandedIndex === index ? "scale(1.05)" : "scale(1)" }}
          >
            <div
              className="card text-center shadow-lg border-0"
              style={{
                width: "100%",
                maxWidth: "320px",
                background: "linear-gradient(145deg, #f0f0f3, #ffffff)",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: expandedIndex === index
                  ? "10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff"
                  : "5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff",
                transition: "box-shadow 0.3s",
              }}
            >
              <div className="mb-3">
                <i
                  className={`${feature.icon} fs-1`}
                  style={{
                    color: "#007bff",
                    textShadow: "0px 2px 5px rgba(0, 123, 255, 0.5)",
                  }}
                ></i>
              </div>
              <h5 className="fw-bold" style={{ color: "#2c3e50" }}>{feature.title}</h5>
              <p className="text-muted">{feature.shortDescription}</p>
              {expandedIndex === index && (
                <div
                  className="mt-3"
                  style={{
                    color: "#34495e",
                    fontSize: "0.9rem",
                    borderTop: "1px solid #e1e5ea",
                    paddingTop: "15px",
                    animation: "fadeIn 0.5s ease-in-out",
                  }}
                >
                  {feature.detailedDescription}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .card:hover {
            box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1), -10px -10px 30px rgba(255, 255, 255, 0.7);
          }
        `}
      </style>
    </div>
  );
};

export default Features;
