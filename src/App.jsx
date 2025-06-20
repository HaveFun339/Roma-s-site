import React, { useState, useEffect, useRef } from 'react'
import Rol from './Rol.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Bio from './Bio.jsx'
import romaicon from './assets/romaicon.png'
import { Link } from 'react-router-dom'
function Home() {
  
  return (
    
    <div className="app-main-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
        
            Roman`s site
          </div>
          <div className="navbar-links">
            <a href="#" className="active">Головна</a>
            <a href="bio">Біографія</a>
            <a href="rol">Rich едіти</a>
    
          </div>
          <div className="navbar-social">
            <a href="https://www.youtube.com/@RomanYarmak"><i className="fab fa-youtube"></i></a>
            <a href="https://www.tiktok.com/@rolex1k_legendary"><i className="fab fa-tiktok"></i></a>
            <a href="https://t.me/+stDCZ9XGNAA2MmRi"><i className="fab fa-telegram"></i></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">
            Хто цей... <br /> Роман?
          </h1>
          <p className="hero-desc">
            Роман - більш відомий під псевдонімом Laxy, чий образ відображається на екрані мобільного телефону. Laxy, якого знають завдяки його крутим едітам у TikTok, він завжди одягнений у сучасному та впевненому стилі.
            <br /><br />
           Гроші для нього - це не просто цифри на рахунку, а символ його успіху та впевненості. Він вміє заробляти та витрачати їх з розумом, завжди залишаючись на крок попереду.
          </p>
         
        </div>
        <div className="hero-right">
          
          <div className="phone-mockup" style={{ width: 300, height: 600,  }}>
            <img
              className="phone-image"
              src={ romaicon }
              style={{ width: 223, height: 500, position: 'absolute', top: 50, left: 43 }}
              alt="Phone"
            />
          </div>
         
        </div>
      </div>

      
         
       
      
    </div>
  )
}
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/rol" element={<Rol />} />
      </Routes>
    </div>
  )
}
export default App