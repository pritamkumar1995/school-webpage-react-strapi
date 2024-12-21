import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, imageData, onClose, onNavigate, currentIndex }) => {
  if (!isOpen || !imageData) return null;

  const handleNavClick = (direction) => {
    onNavigate(direction);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}><FaTimes /></button>
        <div className="carousel">
          <button className="carousel-nav left" onClick={() => handleNavClick('prev')}>&lt;</button>
          <div className="carousel-image-container">
            <img 
              src={`http://localhost:1337${imageData[currentIndex]?.url}`} 
              alt="Carousel" 
              className="carousel-image" 
            />
          </div>
          <button className="carousel-nav right" onClick={() => handleNavClick('next')}>&gt;</button>
          <div className="carousel-info">
            <h3 className="carousel-info-title">{imageData[currentIndex]?.alternativeText}</h3>
            <p className="carousel-info-date">{imageData[currentIndex]?.caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
