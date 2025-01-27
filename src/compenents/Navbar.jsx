import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">Чат-бот ИИ</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Переключить навигацию"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features">Особенности</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Цены</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
