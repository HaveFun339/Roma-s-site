import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import roedit from './assets/roedit.mp4'    
import './Bio.css'
import { Routes, Route } from 'react-router-dom'
import Bio from './Bio'
import './Rol.css' 
import { Link } from 'react-router-dom'
function Home() {
    const videoRef = useRef(null)
      const [isPlaying, setIsPlaying] = useState(false)
      const [volume, setVolume] = useState(0.1)
      const [showButton, setShowButton] = useState(true)
      const [hovered, setHovered] = useState(false)
      const hideTimeout = useRef(null)
    
      useEffect(() => {
        if (videoRef.current) {
          videoRef.current.volume = volume
        }
      }, [volume])
    
      // Показуємо кнопку при паузі, ховаємо через 0.5с після старту
      useEffect(() => {
        if (isPlaying && !hovered) {
          setShowButton(true)
          if (hideTimeout.current) clearTimeout(hideTimeout.current)
          hideTimeout.current = setTimeout(() => setShowButton(false), 500)
        } else {
          setShowButton(true)
          if (hideTimeout.current) clearTimeout(hideTimeout.current)
        }
        return () => {
          if (hideTimeout.current) clearTimeout(hideTimeout.current)
        }
      }, [isPlaying, hovered])
    
      const handlePlayPause = () => {
        if (!videoRef.current) return
        if (videoRef.current.paused) {
          videoRef.current.play()
          setIsPlaying(true)
        } else {
          videoRef.current.pause()
          setIsPlaying(false)
        }
      }
    
      const handleVolumeChange = (e) => {
        const value = Number(e.target.value)
        setVolume(value)
        if (videoRef.current) {
          videoRef.current.volume = value
        }
      }
    
      // Анімація появи/зникнення кнопки
      const buttonVisible = showButton || hovered
        return( 
        
        <div className="app-main-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            Roman`s site
          </div>
          <div className="navbar-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Головна</NavLink>
            <NavLink to="/bio" className={({ isActive }) => isActive ? "active" : ""}>Біографія</NavLink>
            <NavLink to="/rol" className={({ isActive }) => isActive ? "active" : ""}>Rich едіти</NavLink>
            
          </div>
                <div className="navbar-social">
                    <a href="https://www.youtube.com/@RomanYarmak"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.tiktok.com/@rolex1k_legendary"><i className="fab fa-tiktok"></i></a>
                    <a href="https://t.me/+stDCZ9XGNAA2MmRi"><i className="fab fa-telegram"></i></a>
                </div>
                </div>
            </nav>
      <div className="hero-section">
            <div className="hero-left">
              <h1 className="hero-title">
               Два псевдоніми <br /> Одна людина
              </h1>
              <p className="hero-desc">
                В едітах про дорогі речі, або дороге життя, Роман використовує псевдонім не Laxy, а Rolex11k. Цей образ відображає його стиль життя та захоплення розкішшю. Rolex - це символ успіху, якості та елегантності, що ідеально підходить для Романа.
                <br /><br />
                Цими едітами Роман показує, як можна поєднувати стиль, розкіш та сучасні технології. Його відео - це не просто розвага, а справжнє мистецтво, яке надихає багатьох.
              </p>
            </div>
            <div className="hero-right">
              <div
                className="phone-mockup"
                style={{ width: 300, height: 600 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <video
                  className="phone-image"
                  ref={videoRef}
                  src={roedit}
                  loop
                  playsInline
                  muted={volume === 0}
                  style={{ width: 223, height: 500, position: 'absolute', top: 50, left: 43 }}
                  onClick={handlePlayPause}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {/* YouTube-style play/pause button with animation */}
                <button
                  onClick={handlePlayPause}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 70,
                    height: 70,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    cursor: 'pointer',
                    outline: 'none',
                    opacity: buttonVisible ? 1 : 0,
                    pointerEvents: buttonVisible ? 'auto' : 'none',
                    transition: 'opacity 0.3s cubic-bezier(.4,0,.2,1)'
                  }}
                >
                  {isPlaying ? (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                      <rect x="7" y="6" width="6" height="20" rx="2"/>
                      <rect x="19" y="6" width="6" height="20" rx="2"/>
                    </svg>
                  ) : (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff">
                      <polygon points="8,6 26,16 8,26"/>
                    </svg>
                  )}
                </button>
                {/* Volume slider */}
                <div style={{
                  position: 'absolute',
                  bottom: 20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 10,
                  width: '80%'
                }}>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }


function Rol() {
  return (
    <div className="rol">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/rol" element={<Rol />} />
      </Routes>
    </div>
  )
}


export default Rol