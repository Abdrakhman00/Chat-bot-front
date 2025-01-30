import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './compenents/Navbar';
import Header from './compenents/Header';
import Features from './compenents/Features';
import FeaturesSection from './compenents/FeaturesSection';
import Pricing from './compenents/Pricing';
// import Contact from './compenents/Contact';  
import Footer from './compenents/Footer';
import { ChatModal } from './compenents/ChatModal';
import './App.css';

const App = () => {
  // Чат открывается сразу при загрузке страницы
  const [showChat, setShowChat] = useState(true);

  // Закрываем чат
  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <div>
      <Navbar />
      <Header />  {/* Убрали передачу функции onOpenChat */}
      <Features />
      <FeaturesSection />
      <Pricing />
      {/* <Contact />   */}
      <Footer />

      {/* Модальное окно чата */}
      {showChat && (
        <ChatModal
          isOpen={showChat}
          onClose={handleCloseChat}
          phone={""}  // Номер телефона больше не требуется
          userId={"0"} 
        />
      )}
    </div>
  );
};

export default App;