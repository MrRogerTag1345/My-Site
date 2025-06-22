// src/pages/HomePage.js
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <section className="particles-section">
                <ParticlesBackground />
                <div className="intro-content">
                    <h1 style={{ color: 'white', textAlign: 'center', paddingTop: '-1rem', fontSize: "4rem" }}>Hello, I'm Chetas Patel</h1>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: "2rem" }}>Welcome to my personal space on the web.</p>
                </div>
            </section>
            <section className="AboutMe-section">
                <div className="about-me-content">
                    <h2>About Me</h2>
                    <p>Here is some information about me...</p>
                    <p>
                        I am a 4th-year student at Wilfrid Laurier University, currently pursuing a career in Software Engineering. With a strong foundation in computer science and engineering principles, I am passionate about developing innovative software solutions that make a difference.
                    </p>
                    <p>
                        In addition to my academic pursuits, I am actively involved in volunteering at MycroHarvest Inc., where I contribute my skills and time to support their mission. This experience has allowed me to gain valuable insights into real-world applications of software engineering and has strengthened my commitment to using technology for positive impact.
                    </p>
                    <p>
                        As I continue my journey in the field of software engineering, I am eager to explore new opportunities, collaborate with like-minded professionals, and further develop my expertise. I am dedicated to continuous learning and strive to stay at the forefront of technological advancements.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;