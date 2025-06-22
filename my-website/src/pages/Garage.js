import React from "react";
import "./Garage.css";

import car1 from '../images/carimage1.jpg';

const Garage = () => {
    return (
        <div className="garage-container">
            <h1>My Car Garage</h1>

            {/* Gallery Section */}
            <section className="gallery">
                <h2>📸 Photo Gallery</h2>
                <div className="gallery-grid">
                    <img src={car1} width="300"/>
                </div>
            </section>

            {/* Modifications Section */}
            <section className="modifications">
                <h2>🔧 Modifications</h2>
                <ul>
                    <li>Aftermarket exhaust system: MBRP CAT-back exhaust</li>
                    <li>LED interior upgrade</li>
                    <li>PERREIN: Rear 23mm Anti-Roll Bar (Stiff)</li>
                    <li>GrimSpeed: Front Plate Relocate</li>
                    <li>IAG: Air Oil Seperator</li>
                </ul>
            </section>

            {/* Future Plans Section */}
            <section className="future-plans">
                <h2>🛠️ Planned Upgrades</h2>
                <ul>
                    <li>Front Lip</li>
                </ul>
            </section>

            {/* Next Project Car Section */}
            <section className="next-project">
                <h2>🚗 Next Project Car</h2>
                <p>I am planning to create a track specific car, light weight and massive aero. I am currently researching and weighing my option on vehicals.</p>
            </section>
        </div>
    );
};

export default Garage;
