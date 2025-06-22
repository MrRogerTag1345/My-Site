import React from 'react';
import { Link } from 'react-router-dom';
import './GridLinks.css'; // Import your CSS file for styling

const GridLinks = ({ links }) => {
  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        {links.map((link, index) => (
          <div key={index} className="grid-item">
            <Link to={link.url} className="grid-button">{link.text}</Link>
            <p>{link.description}</p>
            <div className="additional-buttons">
              {link.additionalLinks.map((additionalLink, i) => (
                <a
                  key={i}
                  href={additionalLink.url}
                  className="additional-button"
                  target={additionalLink.external ? '_blank' : '_self'}
                  rel={additionalLink.external ? 'noopener noreferrer' : ''}
                >
                  {additionalLink.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLinks;
