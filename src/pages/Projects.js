import React from 'react';
import '../css/Projects.css';

import weather from '../images/weather.jpg';
import artica from '../images/artica.jpg';
import snipsnok from '../images/snipsnok.jpg';

function Projects(props) {
    return (
        <div className = "page-container project-container">
            <div className = "side-bar">
                <h1>PROJECTS</h1>
            </div>
            <div className = "content-container">
                <div className = "text-box">
                    <h1>Projects</h1>
                    <p>Hey there! I'm Kevin Su, a 23 year old web developer from Sydney, Australia. I would describe myself as passionate, ambitious, team driven and a fast learner. Hopefully you get to learn a little more about me!</p>
                </div>
                <div className = "content-3">
                    <div className = "projects-grid">
                        <div className = "projects-card">
                            <div className = "projects-info">
                                <div className = "title">
                                    <h2>SnipSnok</h2>
                                    <p className = "green-color">FEATURED</p>
                                </div>
                                <p>Developed alongside teammates, SnipSnok is a content creation application where users can donate to others, follow others and post/like content they enjoy!</p>
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
                            <div className = "projects-info">
                                <div className = "title">
                                    <h2>Weather Application</h2>
                                    <p className = "green-color">FEATURED</p>
                                </div>
                                <p>Developed a weather application that fetches from OpenWeatherAPI to display the weather and forecast of various cities across the world.</p>
                                <div className = "projects-box">
                                    <button className="projects-tag">Next JS</button>
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
                            <div className = "projects-info">
                                <div className = "title">
                                    <h2>Artica Furniture</h2>
                                    <p className = "green-color">FEATURED</p>
                                </div>
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
                        <div className = "projects-card">
                            <div className = "projects-info">
                                <div className = "title">
                                    <h2>OSRS Beastiary</h2>
                                    <p className = "green-color">FEATURED</p>
                                </div>
                                <p>OSRS Beastiary is an application that pulls monster data from osrs-api. Search and see information for over 2700 monsters in the game including a droptable with multiple sorting options.</p>
                                <div className = "projects-box">
                                    <button className="projects-tag">React</button>
                                    <button className="projects-tag">HTML</button>
                                    <button className="projects-tag">CSS</button>
                                    <button className="projects-tag">JS</button>
                                    <button className="projects-tag">API</button>
                                </div>
                                <div className = "projects-box">
                                    <button className="git-button">VIEW GITHUB</button>
                                </div>
                            </div>
                        </div>
                        <div className = "projects-card">
                            <div className = "projects-info">
                                <div className = "title">
                                    <h2>My Portfolio V2</h2>
                                    <p className = "green-color">FEATURED</p>
                                </div>
                                <p>A remake of my portfolio with more interesting CSS layouts and better design. Hosted on AWS S3. The of the CSS is done by hand with no CSS framework usage.</p>
                                <div className = "projects-box">
                                    <button className="projects-tag">React</button>
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
                            <div className = "projects-info">
                                <div className = "title">
                                    <h2>NASA Images</h2>
                                    <p className = "green-color">FEATURED</p>
                                </div>
                                <p>An application that takes images from NASA API displays it to the user. User can view the image of the day or search through a gallery of images and their respective meta data.</p>
                                <div className = "projects-box">
                                    <button className="projects-tag">Next JS</button>
                                    <button className="projects-tag">API</button>
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
                            <div className = "projects-info">
                                <h2>Vuegram</h2>
                                <p>Vuegram is an application that takes images from Unsplash API given a search term and displays it to the user. Also displays information such as date created, photographer, descriptions and more...</p>
                                <div className = "projects-box">
                                    <button className="projects-tag">Vue JS</button>
                                    <button className="projects-tag">Vuestic UI</button>
                                    <button className="projects-tag">API</button>
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
                            <div className = "projects-info">
                                <h2>Top Shop</h2>
                                <p>An application that reads JSON data from an API and displays it to the user with multiple array filtering and sorting options.</p>
                                <div className = "projects-box">
                                    <button className="projects-tag">React</button>
                                    <button className="projects-tag">JSON Bin API</button>
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
                            <div className = "projects-info">
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
            </div>
            
        </div>
    );
}

export default Projects;