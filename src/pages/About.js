import React from 'react';
import '../css/About.css';

import me from '../images/me.jpg';
import mountain from '../images/mountain.jpg';

function About(props) {
    return (
        <div className = "main-container" id = "about">
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
                    <h1>ABOUT ME</h1>
                </div>
                <div className = "sub-container">
                    <div className = "main-card">
                        <div className= "row">
                            <img src = {mountain} alt = "sydney-banner" />
                            <div className = "text">
                                <h1>Core skills</h1>
                                <p>My main area of expertise is front-end development. Here is a list of skills and stuff I can do:</p>
                            </div>
                            <ul>
                                <li><i class="fab fa-react fa-3x"></i><p>React</p></li>
                                <li><i class="fab fa-js fa-3x"></i><p>JavaScript</p></li>
                                <li><i class="fab fa-html5 fa-3x"></i><p>HTML</p></li>
                                <li><i class="fab fa-css3-alt fa-3x"></i><p>CSS</p></li>
                                <li><i class="fab fa-sass fa-3x"></i><p>SASS/SCSS</p></li>
                                <li><i class="fas fa-wind fa-3x"></i><p>Tailwind CSS</p></li>
                                <li><i class="fab fa-bootstrap fa-3x"></i><p>Bootstrap CSS</p></li>
                                <li> <i class="fab fa-java fa-3x"></i><p>Java</p></li>
                                <li><i class="fab fa-python fa-3x"></i><p>Python</p></li>
                                <li><i class="fab fa-github-square fa-3x"></i><p>Git Version Control</p></li>
                                <li><i class="fas fa-pen-fancy fa-3x"></i><p>Responsive Design</p></li>
                                <li><i class="fas fa-code fa-3x"></i><p>C++</p></li>
                                <li><i class="far fa-window-restore fa-3x"></i><p>API/RESTful</p></li>
                                <li><i class="fab fa-stack-overflow fa-3x"></i><p>"Problem Solve"</p></li>
                            </ul>
                            <h2>Learn more about me</h2>
                            <div className = "textbox">
                                <button className = "tag"><a href="KevinSu.pdf" target="_blank"><i class="fas fa-arrow-down"></i> Download Resume</a></button>
                            </div>
                        </div>
                    </div>
                    <div className = "skill-card">
                        <div className= "row">
                            <img className = "image" src={me} alt = "" />
                            <h1>Kevin Su</h1>
                            <p>Front End Developer | Software Engineer</p>
                            <div className = "summary-box">
                                <i class="fas fa-graduation-cap fa-3x"></i>
                                <p>BEHons Software Engineering</p>
                                <p>The University of Sydney</p>
                                <p>2017-2021</p>
                            </div>
                            <div className = "iconbox">
                                <a href="https://github.com/SuKaiwen" target="_blank" ><i class="fab fa-github fa-2x"></i></a>
                                <a href="https://www.linkedin.com/in/kevin-su-618163191/" target="_blank" ><i class="fab fa-linkedin fa-2x"></i> </a>
                                <a href="mailto:kevinsu@outlook.co.nz" target="_blank" ><i class="fas fa-envelope fa-2x"></i></a>
                            </div>
                            <div className = "textbox">
                                <h1>Background</h1>
                                <p>During highschool I took interest in subjects that enable my creativity such as art and graphical design and since then, building aesthetic things has grown to be a passion of mine. </p>
                                <p>After dabbling in various engineering topics in my first year of university, I have grown to love web development (both front end and back end) and is always hungry to learn new things. I like to code things from scratch and bring life to awesome ideas.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;