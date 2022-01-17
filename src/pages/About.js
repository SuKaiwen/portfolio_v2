import React from 'react';
import '../css/About.css';
import me from '../images/me.jpg';

function About(props) {
    return (
        <div className = "main-container">
            <div className = "main-container-2">
                <div className = "header">
                    <h1>About Me</h1>
                    <div className = "text">
                        <p>Hey there! I'm Kevin Su, <span className = "green-color">a 23 year old web developer from Sydney, Australia</span>. I would describe myself as passionate, ambitious, team driven and a fast learner. Hopefully you get to learn a little more about me!</p>
                    </div>
                </div>
            </div>
            <div className = "main-container-2">
                <div className = "left-bar">
                    <h1>ABOUT <span className = "green-color">ME</span></h1>
                </div>
                <div className = "sub-container">
                    <div className = "main-card">
                        <div className= "row">
                            <h1 className = "green-color">SUMMARY</h1>
                            <h2>Core skills</h2>
                            <div className = "skill-grid">
                                <i class="fab fa-react fa-5x"></i>
                                <i class="fab fa-js fa-5x"></i>
                                <i class="fab fa-html5 fa-5x"></i>
                                <i class="fab fa-css3-alt fa-5x"></i>
                                <i class="fab fa-sass fa-5x"></i>
                                <i class="fas fa-wind fa-5x"></i>
                                <i class="fab fa-bootstrap fa-5x"></i>
                                <i class="fab fa-java fa-5x"></i>
                                <i class="fab fa-python fa-5x"></i>
                            </div>
                            <h2>Learn more about me</h2>
                            <div className = "textbox">
                                <button className = "tag green-color">Download Resume</button>
                            </div>
                        </div>
                    </div>
                    <div className = "skill-card">
                        <div className= "row">
                            <img className = "image" src={me} alt = "" />
                            <h1>KEVIN SU</h1>
                            <h4>Front-End Developer | Software Engineer</h4>
                            <div className = "summary-box">
                                <i class="fas fa-graduation-cap fa-3x"></i>
                                <p>BEHons Software Engineering</p>
                                <p>The University of Sydney</p>
                                <p>2017-2021</p>
                            </div>
                            <div className = "iconbox">
                                <i class="fab fa-github fa-2x"></i>
                                <i class="fab fa-linkedin fa-2x"></i> 
                                <i class="fas fa-envelope fa-2x"></i>
                            </div>
                            <div className = "textbox">
                                <h1>BACKGROUND</h1>
                                <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine. </p>
                                <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development <span className = "green-color">(both front-end and back-end)</span> and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;