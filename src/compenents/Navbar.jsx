import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container d-flex align-items-center">
        {/* Логотип и название */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <svg
            width="40"
            height="40"
            viewBox="0 0 622 622"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
          >
            <path
              d="M15.627,407.7C22.533,428.834 31.753,449.068 42.996,468.256L311.104,199.992L423.088,311.85C422.734,356.962 395.14,397.478 353.41,414.578C311.682,431.694 263.962,422.052 232.078,390.15L188.133,434.12C241.444,487.462 322.732,500.48 389.936,466.28C457.14,432.08 494.9,358.602 483.224,284.078L311.104,111.856L15.627,407.7Z"
              transform="rotate(0 311 311)"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
            <path
              d="M579.324,468.224C590.566,449.036 599.722,428.704 606.628,407.57L516.102,317.088C515.348,341.984 510.288,366.572 500.764,389.57L579.324,468.224Z"
              transform="rotate(0 311 311)"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
            <path
              d="M91.375,530.936C212.82,652.388 409.468,652.338 530.912,530.886L486.902,486.964C389.76,584.164 232.464,584.164 135.321,486.964L91.375,530.936Z"
              transform="rotate(0 311 311)"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
            <path
              d="M615.8,372.76C632.552,290.104 615.028,204.202 567.228,134.726C559.454,155.683 540.984,170.79 518.946,174.406C546.622,216.594 560.836,266.222 559.68,316.686L615.8,372.76Z"
              transform="rotate(0 311 311)"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
            <path
              d="M540.084,112.917C540.084,95.721 526.142,81.771 508.956,81.771C491.77,81.771 477.828,95.721 477.828,112.917C477.828,130.114 491.77,144.064 508.956,144.064C526.142,144.064 540.084,130.114 540.084,112.917Z"
              transform="rotate(0 311 311)"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
            <path
              d="M487.256,54.771C382.82,-17.069 245.234,-18.338 139.497,51.556C33.761,121.451 -18.97,248.528 6.215,372.76L62.319,316.67C60.199,224.212 109.509,138.181 190.35,93.326C271.19,48.47 370.34,52.086 447.614,102.84C451.228,80.806 466.328,62.549 487.256,54.771Z"
              transform="rotate(0 311 311)"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
          </svg>
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
