// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/projects">Проекты</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/about-me">Обо мне</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
