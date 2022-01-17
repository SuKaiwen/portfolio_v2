import React from 'react';
import '../css/Experience.css';

function Experience(props) {
    return (
        <div className = "exp-container">
            <div className = "row">
                <h1>EXPERIENCE</h1>
            </div>
            <div className = "row">
                <div className = "container">
                    <ul>
                        <li>
                            <span></span>
                            <div className = "title">
                                <h2>ASSOCIATE FRONT-END DEVELOPER</h2>
                                <h4>AKQA</h4>
                                <p>Oct 2021 - Present - Full Time - Sydney, AU</p>
                                <p>Developed and maintained code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery. Performed testing to ensure cross-browser friendliness and mobile responsiveness. Clients includes Bridgestone, Business Australia, Always On Gift Cards, and more...</p>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <span></span>
                            <div className = "title">
                                <h2>FRONT-END INTERN</h2>
                                <h4>GPOS</h4>
                                <p>Dec 2019 - Feb 2020 - 3 Months - Auckland, NZ</p>
                                <p>Developed templates using React and Ant Design. Refactored the website's code from vanilla HTML into a React Application. Wrote extensive integration and unit tests for the templates. Engaged with Agile Methodologies. Improved presentation skills via presenting the product to the team.</p>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <span></span>
                            <div className = "title">
                                <h2>QA INTERN</h2>
                                <h4>GPOS</h4>
                                <p>Dec 2018 - Feb 2019 - 3 Months - Auckland, NZ</p>
                                <p>Performed black box and unit testing on a software application using Postman and manually testing the application itself.</p>
                            </div>
                            <span></span>
                        </li>
                        <li>
                            <span></span>
                            <div className = "title">
                                <h2>CUSTOMER SERVICE</h2>
                                <h4>Eden Foods</h4>
                                <p>2015 - 2019 (Part-Time) - Auckland, NZ</p>
                                <p>Utilized organisational skills to oversee and guide employees. Aided in stock management and control of the daily workflow within the store
    to maintain efficiency and order. Provided excellent customer service via professional and friendly communication.
    </p>
                            </div>
                            <span></span>
                        </li>
                    </ul>
                </div>
                <div className = "container">
                    <div className = "text">
                        <h1>Career Summary</h1>
                        <p>I’m currently working at AKQA, a digital design and communications agency owned by WPP based in Sydney, Australia.</p>
                        <p>I’ve been priviledged to work a variety of jobs throughout my early life - doing everything from Customer Service to Quality Assurance to Front-End Development, as I believe they all contributed into helping me grow into the person I am today. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;