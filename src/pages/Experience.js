import React from 'react';
import experienceInfo from '../data/ExperienceInfo';
import '../css/Experience.css';

function Experience(props) {
    return (
        <div className = "exp-container" id = "experience">
            <div className = "row">
                <h1>EXPERIENCE</h1>
            </div>
            <div className = "row">
                <div className = "container">
                    <ul>
                        {experienceInfo.map((experience) => (
                            <li>
                                <span></span>
                                <div className = "title">
                                    <div className = "info-box">
                                        <p>{experience.title}</p>
                                        <p>{experience.location}</p>
                                    </div>
                                    <div className = "info-box">
                                        <p>{experience.company}</p>
                                        <p>{experience.time}</p>
                                    </div>
                                    <div className = "info-box">
                                        <p className = "gray-color">{experience.companyDetails}</p>
                                    </div>  
                                    <ul>
                                        {experience.work.map((workLine) => (
                                            <li>{workLine}</li>
                                        ))}
                                    </ul>
                                </div>
                                <span></span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className = "container">
                    <div className = "text">
                        <h1>Career Summary</h1>
                        <p>I’m currently working at AKQA, a digital design and communications agency owned by WPP based in Sydney, Australia.</p>
                        <p>I’ve been privileged to work a variety of jobs throughout my early life - doing everything from Customer Service to Quality Assurance to Front End Development, as I believe they all contributed into helping me grow into the person I am today. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;