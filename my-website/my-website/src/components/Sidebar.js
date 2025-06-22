import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyPhoto from '../images/LogoSC.png';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const selection = (page) => {
    switch (page) {
      case 1:
        navigate('/');
        break;
      case 2:
        navigate('/experience');
        break;
      case 3:
        navigate('/projects');
        break;
      case 4:
        navigate('/contact');
        break;
      default:
        console.log('Invalid selection');
        break;
    }
  };

  return (
    <div className="sidebar">
      <div className="Sidebar-TopElement">
        <div className="SidebarImageComponent">
          <img className="Image" src={MyPhoto} alt="My Photo" />
        </div>
        <h2>Chetas Patel</h2>
      </div>
      <div className="ButtonElement">
        <button className="SidebarButton" onClick={() => selection(1)}>
          <h2>Home</h2>
        </button>
        <button className="SidebarButton" onClick={() => selection(2)}>
          <h2>Experience</h2>
        </button>
        <button className="SidebarButton" onClick={() => selection(3)}>
          <h2>Projects</h2>
        </button>
        <button className="SidebarButton" onClick={() => selection(4)}>
          <h2>Contact Me</h2>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
