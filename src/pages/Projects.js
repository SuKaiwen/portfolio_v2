import React from 'react';
import '../css/Projects.css';

import weather from '../images/weather.jpg';
import artica from '../images/artica.jpg';
import snipsnok from '../images/snipsnok.jpg';

import projectInfo from '../components/ProjectInfo';

function Projects(props) {
    return (
        <div className = "page-container project-container" id = "projects">
            <div className = "side-bar">
                <h1>PROJECTS</h1>
            </div>
            <div className = "content-container">
                <div className = "text-box">
                    <h1>Projects</h1>
                    <p>Building web projects is a keen interest of mine. I love working with front-end libraries like React. I have a strong focus on <span className = "green-color">aestethics and responsive design</span> while also giving attention to <span className = "green-color">code reusability and efficiency.</span></p>
                </div>
                <div className = "content-3">
                    <div className = "projects-grid">
                        {projectInfo.map((project) => (
                            <div className = "projects-card">
                                <div className = "projects-info">
                                    <div className = "title">
                                        <h2>{project.name}</h2>
                                        {project.featured &&
                                            <p className = "green-color">FEATURED</p>
                                        }
                                    </div>
                                    <p>{project.description}</p>
                                    <div className = "projects-box">
                                        {project.tags.map((tag) => (<button className="projects-tag">{tag}</button>))}
                                    </div>
                                    <div className = "projects-box">
                                        <a href = {project.github} target="_blank" ><button className="git-button">VIEW GITHUB</button></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projects;