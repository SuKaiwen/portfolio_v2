import React from 'react';
import '../css/LandingPage.css';
import statue from '../images/statue.jpg';

function LandingPage(props) {
    return (
        <div>
            <div className="container">
                <div className="right-sidebar">
                    <h4>Contact me on - - - <i class="fab fa-github"></i> <i class="fab fa-linkedin"></i> <i class="fas fa-envelope"></i></h4>
                </div>
                <div className="top-container">
                    <div className = "col">
                        <img src = {statue} alt="" />
                    </div>
                    <div className = "col">
                        <h1>Hey I'm <span className="green-color">Kevin Su</span>, a front-end web developer from <span className="green-color">Sydney, Australia</span></h1>
                    </div>
                </div>
                <div className="bot-container">
                    <h1>I code cool <span className="green-color">websites</span></h1>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;