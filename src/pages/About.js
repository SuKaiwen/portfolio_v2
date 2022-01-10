import React from 'react';
import '../css/About.css';
import stars from '../images/stars.jpg';
import me from '../images/me.jpg';

function About(props) {
    return (
        <div className = "main-container">
            <div className = "sub-container">
                <div className = "main-card">
                    <div className= "row">
                        <h1 className="green-color">About me</h1>
                        <img className = "circle-image" src={me} alt = "" />
                        <h1>Kevin Su</h1>
                        <h4>Front-end Developer | Software Engineer</h4>
                    </div>
                    <div className= "row">
                        <p>Hey there! I'm Kevin Su, web designer from Sydney, Australia. I have rich experience in web site design and building and customization. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;