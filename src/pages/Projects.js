import React, {useState, useEffect} from 'react';
import '../css/Projects.css';

import weather from '../images/weather.jpg';
import artica from '../images/artica.jpg';
import snipsnok from '../images/snipsnok.jpg';

import projectInfo from '../data/ProjectInfo';
import mainProjects from '../data/MainProjectsInfo';

function Projects(props) {

    const [projects, setProjects] = useState(projectInfo);
    const [filteredProjects, setFilteredProjects] = useState(projectInfo);
    const [mainPro, setMainPro] = useState(mainProjects);

    const [filter, setFilter] = useState("All");

    function handleChange(e){
        setFilter(e.target.value);
    }

    function setImage(project, smallImg){
        mainPro.filter(x => x === project)[0].image = smallImg;
        setMainPro([...mainPro]);
    }

    useEffect(() => {
        switch(filter){
            case 'All':
                setFilteredProjects(projects);
                break;
            case 'Featured':
                setFilteredProjects(projects.filter(x => x.featured === true));
                break;
            case 'React':
                setFilteredProjects(projects.filter(x => x.tags.includes('React')));
                break;
            case 'Next':
                setFilteredProjects(projects.filter(x => x.tags.includes('Next JS')));
                break;
            case 'API':
                setFilteredProjects(projects.filter(x => x.tags.filter(tag => tag.includes('API')).length !== 0));
                break;
        }
    }, [filter]);

    return (
        <div className = "page-container project-container" id = "projects">
            <div className = "side-bar">
                <h1>PROJECTS</h1>
            </div>
            <div className = "content-container">
                <div className = "text-box">
                    <h1>Projects</h1>
                    <p>Building web projects is a keen interest of mine. I love working with front end libraries like React. I have a strong focus on <span className = "green-color">aestethics and responsive design</span> while also giving attention to <span className = "green-color">code reusability and efficiency.</span></p>
                </div>
                <hr />
                <div className = "content-3">
                    <div className = "projects-grid">
                        {mainPro.map(project => (
                            <>
                                <div className = "project-banner">
                                    <div className = "project-name">
                                        <h2>{project.name}</h2>
                                        <a href = {project.github}><i class="fab fa-github fa-2x"></i></a>
                                    </div>
                                    <div className = "project-tags">
                                        {project.tags.map((tag) => (<p>{tag}</p>))}
                                    </div>
                                    <div className = "project-desc">
                                        <p>{project.description}</p>
                                    </div>
                                </div>
                                <div className = "projects-main-card">
                                    <div className = "image-panel">
                                        <img src = {project.image} alt = "" />
                                    </div>
                                </div>
                                <div className = "project-banner-bot">
                                    {project.subImage.map(smallImg => (
                                        <div className = "small-image">
                                            <img onClick={() => setImage(project, smallImg)} src = {smallImg} alt = "" />
                                        </div>
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className = "text-box">
                    <h1>Other Projects</h1>
                </div>
                <hr/>
                <div className = "content-3">
                    <select onChange={handleChange} value={filter}>
                        <option value = "All">All Projects</option>
                        <option value = "Featured">Featured</option>
                        <option value = "React">React</option>
                        <option value = "Next">Next JS</option>
                        <option value = "API">API</option>
                    </select>
                    <div className = "projects-grid">
                        {filteredProjects.map((project) => (
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