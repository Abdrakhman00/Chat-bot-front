import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-light py-5" id="pricing">
      <div className="container">
        <h2 className="text-center mb-4">Цены</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Базовый</h5>
                <h6 className="card-subtitle mb-2 text-muted">19$/месяц</h6>
                <p className="card-text">Идеально для малого бизнеса, начинающего работать с чат-ботами.</p>
                <a href="#" className="btn btn-primary">Начать</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Профессиональный</h5>
                <h6 className="card-subtitle mb-2 text-muted">49$/месяц</h6>
                <p className="card-text">Расширенные функции для растущего бизнеса.</p>
                <a href="#" className="btn btn-primary">Начать</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Корпоративный</h5>
                <h6 className="card-subtitle mb-2 text-muted">Свяжитесь с нами</h6>
                <p className="card-text">Индивидуальные решения для крупных предприятий.</p>
                <a href="#" className="btn btn-primary">Связаться с отделом продаж</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
