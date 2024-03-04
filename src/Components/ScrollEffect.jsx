import React, { useState, useEffect } from 'react';
import { BsMouse } from 'react-icons/bs';
import '../App.css';

export default function ScrollEffect() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowMessage(scrollPosition <= 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-message ${showMessage ? 'show' : ''}`}>
      <span className="mouse-icon">
        <BsMouse />
      </span>
      <span className="scroll-text">{showMessage ? 'Scroll down' : 'Scroll up'}</span>
    </div>
  );
}

