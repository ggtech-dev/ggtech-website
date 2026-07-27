import React, { useState } from 'react';
import './FloatingContact.css';

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="floating-contact">
      {isOpen && (
        <div className="fc-options">
          <a href="tel:+918367439727" className="fc-btn fc-call" title="Call Us">📞</a>
          <a href="https://wa.me/918367439727" target="_blank" rel="noopener noreferrer" className="fc-btn fc-whatsapp" title="WhatsApp">💬</a>
          <a href="mailto:gouravmacha@gmail.com" className="fc-btn fc-email" title="Email Us">✉️</a>
        </div>
      )}
      <button className={isOpen ? "fc-main-btn fc-open" : "fc-main-btn"} onClick={toggleOpen}>
        {isOpen ? "X" : "Chat"}
      </button>
    </div>
  );
}

export default FloatingContact;