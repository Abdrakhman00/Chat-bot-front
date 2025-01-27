import React from 'react';

const Features = () => {
  return (
    <div className="container py-5" id="features">
      <h2 className="text-center mb-4">Особенности</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <div className="mb-3">
            <i className="bi bi-lightning-fill fs-1 text-primary"></i>
          </div>
          <h5>Мгновенные ответы</h5>
          <p>Обеспечьте круглосуточную поддержку с мгновенными ответами на запросы клиентов.</p>
        </div>
        <div className="col-md-4 text-center">
          <div className="mb-3">
            <i className="bi bi-gear-fill fs-1 text-primary"></i>
          </div>
          <h5>Настраиваемые сценарии</h5>
          <p>Настройте чат-бота под нужды вашего бизнеса и улучшите удовлетворенность пользователей.</p>
        </div>
        <div className="col-md-4 text-center">
          <div className="mb-3">
            <i className="bi bi-graph-up-arrow fs-1 text-primary"></i>
          </div>
          <h5>Анализ данных</h5>
          <p>Анализируйте взаимодействия с клиентами для получения ценной информации и улучшения сервисов.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
