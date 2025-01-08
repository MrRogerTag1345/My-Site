import React, { useState } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <header className='header'>
            <span className='TitleSpan'>
                <h1>Welcome, this is <span className="MyName">Chetas</span>!</h1>
            </span>

            <div className="social-icons">
                {/* To change from dark mode to light mode.
                <button id="themeToggle" className="social-icon" onClick={toggleTheme}>
                    <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                </button>
                */}

                <a href="https://www.linkedin.com/in/chetas-patel-ba9379165/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                </a>

                <a href="https://github.com/MrRogerTag1345" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                </a>

                <a href="mailto:Chetaspatel1345@gmail.com" className="social-icon">
                    <i className="fas fa-envelope"></i>
                </a>
                
            </div>
        </header>
    );
};

export default Header;
