import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const featuresData = [
    {
      icon: "bi bi-layout-text-window-reverse",
      title: "Свободный от программирования интерфейс",
      description:
        "Создавайте чат-бота в визуальном интерфейсе Answers с помощью удобного конструктора. Настраивайте различные сценарии взаимодействия с пользователями простым перетаскиванием нужных блоков — навыки программирования не требуются.",
    },
    {
      icon: "bi bi-person-bounding-box",
      title: "Незаметное переключение на оператора",
      description:
        "Переключайте пользователя с чат-бота на оператора с помощью интеграции Answers с нашим решением для облачных контакт-центров Conversations. При этом сохраняется история беседы с пользователями во всех имеющихся каналах связи.",
    },
    {
      icon: "bi bi-cpu",
      title: "Искусственный интеллект",
      description:
        "Создайте ощущение диалога с живым оператором благодаря нашим умным чат-ботам, которые используют механизм обработки естественного языка (NLP) и способны распознавать намерения клиента.",
    },
    {
      icon: "bi bi-share",
      title: "Поддержка омниканальности",
      description:
        "Общайтесь с клиентами в удобных для них каналах связи, таких как WhatsApp, Facebook Messenger, Viber, Live Chat, SMS и Apple Business Chat.",
    },
  ];

  return (
    <section id="Возможности" className="o-section o-section--features js-scroll-to-section">
      <div className="o-container">
        <div className="o-section__heading o-section__heading--centered">
          <h2 className="u-a3">Возможности</h2>
        </div>

        <ul className="c-card-list c-card-list--2-column c-card-list--features">
          {featuresData.map((feature, index) => (
            <li key={index} className="c-card-list__item">
              <div className="c-card c-card--features">
                <header className="c-card__header">
                  <div className="c-card__icon">
                    <i className={`${feature.icon} fs-1`} style={{ color: "#007bff" }}></i>
                  </div>
                  <h3 className="u-a1 c-card__title" style={{ color: "#34495e" }}>{feature.title}</h3>
                </header>
                <article className="c-card__content">
                  <p className="u-b0" style={{ color: "#2c3e50" }}>{feature.description}</p>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;