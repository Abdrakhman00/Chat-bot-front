import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './compenents/Navbar';
import Header from './compenents/Header';
import Features from './compenents/Features';
import Pricing from './compenents/Pricing';
import Contact from './compenents/Contact';
import Footer from './compenents/Footer';
import ChatPage from './pages/ChatPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Features />
              <Pricing />
              <Contact />
              <Footer />
            </>
          } 
        />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
