import React, { useState } from 'react';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`logo ${isOpen ? 'open' : ''}`} onClick={handleLogoClick}>
      <div className="line1"></div>
      <div className="line2"></div>
    </div>
  );
};

export default AnimatedLogo;
