import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Революционизируйте ваш бизнес с ИИ чат-ботом</h1>
        <p className="lead">Оптимизируйте поддержку клиентов и увеличьте вовлеченность с нашим чат-ботом на базе ИИ.</p>
        <Link to="/chat">
          <button className="btn btn-light btn-lg mt-3">Начать</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
