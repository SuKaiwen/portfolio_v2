import React from 'react';
import '../css/Projects.css';

import weather from '../images/weather.jpg';
import artica from '../images/artica.jpg';
import snipsnok from '../images/snipsnok.jpg';

function Projects(props) {
    return (
        <div className = "project-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="black" fill-opacity="1" d="M0,192L40,165.3C80,139,160,85,240,80C320,75,400,117,480,112C560,107,640,53,720,37.3C800,21,880,43,960,64C1040,85,1120,107,1200,112C1280,117,1360,107,1400,101.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <h1>PROJECTS</h1>
            <div className = "projects-grid">
                <div className = "projects-card">
                    <div className = "projects-image">
                        <img src = {snipsnok} alt="" />
                    </div>
                    <div className = "projects-info">
                        <p className = "green-color">FEATURED</p>
                        <h2>SnipSnok</h2>
                        <p>Developed alongside team members, SnipSnok is an application designed to help struggling content creators in Australia. Users can donate to others, follow others and post/like content they enjoy!</p>
                        <div className = "projects-box">
                            <button className="projects-tag">React</button>
                            <button className="projects-tag">HTML</button>
                            <button className="projects-tag">CSS</button>
                            <button className="projects-tag">JS</button>
                            <button className="projects-tag">Spring</button>
                            <button className="projects-tag">Axios</button>
                            <button className="projects-tag">Java</button>
                            <button className="projects-tag">MySQL</button>
                            <button className="projects-tag">Hibernate ORM</button>
                        </div>
                        <div className = "projects-box">
                            <button className="git-button">VIEW GITHUB</button>
                        </div>
                    </div>
                </div>
                <div className = "projects-card">
                    <div className = "projects-image">
                        <img src = {weather} alt="" />
                    </div>
                    <div className = "projects-info">
                        <p className = "green-color">FEATURED</p>
                        <h2>Weather Application</h2>
                        <p>Developed a weather application that fetches from OpenWeatherAPI to display the weather and forecast of various cities across the world.</p>
                        <div className = "projects-box">
                            <button className="projects-tag">NextJS</button>
                            <button className="projects-tag">OpenWeatherMaps API</button>
                            <button className="projects-tag">HTML</button>
                            <button className="projects-tag">CSS</button>
                            <button className="projects-tag">JS</button>
                        </div>
                        <div className = "projects-box">
                            <button className="git-button">VIEW GITHUB</button>
                        </div>
                    </div>
                </div>
                <div className = "projects-card">
                    <div className = "projects-image">
                        <img src = {artica} alt="" />
                    </div>
                    <div className = "projects-info">
                        <p className = "green-color">FEATURED</p>
                        <h2>Artica Furniture</h2>
                        <p>Artica is an interior modelling and furniture design website. It features multiple pages with a cart functionality. Users are able to browse items and add multiple items to cart.</p>
                        <div className = "projects-box">
                            <button className="projects-tag">React</button>
                            <button className="projects-tag">HTML</button>
                            <button className="projects-tag">CSS</button>
                            <button className="projects-tag">JS</button>
                            <button className="projects-tag">React Router</button>
                        </div>
                        <div className = "projects-box">
                            <button className="git-button">VIEW GITHUB</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;