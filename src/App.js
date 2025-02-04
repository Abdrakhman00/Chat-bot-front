import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./compenents/Navbar";
import Header from "./compenents/Header";
import Features from "./compenents/Features";
import FeaturesSection from "./compenents/FeaturesSection";
import Pricing from "./compenents/Pricing";
import Footer from "./compenents/Footer";
import { ChatModal } from "./compenents/ChatModal";
import "./App.css";

const ChatPage = ({ onClose }) => {
  return (
    <ChatModal isOpen={true} onClose={onClose} userId={"0"} phone={""} />
  );
};

const App = () => {
  const [showChatModal, setShowChatModal] = useState(false);

  // Обработчик для открытия чата
  const handleStartChat = () => {
    setShowChatModal(true); // Показываем ChatModal сразу при нажатии кнопки
  };

  // Обработчик для закрытия чата
  const handleCloseChat = () => {
    setShowChatModal(false);
  };
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header onStartChat={handleStartChat} />
              <Features />
              <FeaturesSection />
              <Pricing />
              <Footer />
            </>
          }
        />
        <Route path="/chat" element={<ChatPage onClose={handleCloseChat} />} />
      </Routes>

      {/* Окно чата открывается при нажатии на кнопку */}
      {showChatModal && (
        <ChatModal
          isOpen={true}
          onClose={handleCloseChat} // Передаем функцию закрытия сюда
          userId={"0"}
          phone={""}
        />
      )}
    </Router>
  );
};

export default App;