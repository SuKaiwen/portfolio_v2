import React from 'react';
import '../css/About.css';
import me from '../images/me.jpg';

function About(props) {
    return (
        <div className = "main-container">
            <div className = "left-bar">
                <h1>ABOUT <span className = "green-color">ME</span></h1>
            </div>
            <div className = "sub-container">
                <div className = "main-card">
                    <div className= "row">
                        <img className = "image" src={me} alt = "" />
                        <h1>KEVIN SU</h1>
                        <h4>Front-end Developer | Software Engineer</h4>
                        <div className = "iconbox">
                            <i class="fab fa-github fa-2x"></i>
                            <i class="fab fa-linkedin fa-2x"></i> 
                            <i class="fas fa-envelope fa-2x"></i>
                        </div>
                        <div className = "textbox">
                            <p>Hey there! I'm Kevin Su, a 23 year old web developer from Sydney, Australia. During highschool I took interest in subjects that enable my creativity such as art and graphical design. </p>
                            <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front-end and back-end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                        </div>
                    </div>
                </div>
                <div className = "skill-card">
                    <div className= "row">
                        <h1 className = "green-color">SUMMARY</h1>
                        <div className = "summary-box">
                            <i class="fas fa-graduation-cap fa-3x"></i>
                            <p>BEHons Software Engineering</p>
                            <p>The University of Sydney 2017-2021</p>
                        </div>
                        <h2>Core Skills</h2>
                        <div className = "textbox">
                            <button className = "tag">React</button>
                            <button className = "tag">CSS</button>
                            <button className = "tag">HTML</button>
                            <button className = "tag">JS</button>
                            <button className = "tag">Java</button>
                            <button className = "tag">SASS</button>
                            <button className = "tag">Version Control</button>
                            <button className = "tag">Responsive Design</button>
                            <button className = "tag">UI UX to some extent</button>
                        </div>
                        <h2>I am described as</h2>
                        <div className = "textbox">
                            <button className = "tag">Passionate</button>
                            <button className = "tag">Fast Learner</button>
                            <button className = "tag">Ambitious</button>
                            <button className = "tag">Team Driven</button>
                        </div>
                        <h2>I speak</h2>
                        <div className = "textbox">
                            <button className = "tag">English (native language)</button>
                            <button className = "tag">Chinese (intermediate)</button>
                            <button className = "tag">Japanese (elementary)</button>
                        </div>
                        <h2>Learn more about me</h2>
                        <div className = "textbox">
                            <button className = "tag green-color">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;