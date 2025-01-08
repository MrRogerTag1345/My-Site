// src/pages/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HomePage from './HomePage';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import "./Main.css";

const Website = () => {
  return (
    <div className="website">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="Webpage">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Website;
