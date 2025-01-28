import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Logo from '../logo.svg'; // Импортируем логотип

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container d-flex align-items-center">
        {/* Логотип и название */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={Logo} alt="Logo" className="me-2" width="40" height="40" />
          Aisale
        </a>

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
