import React from 'react';
import '../css/Footer.css';

function Footer(props) {
    return (
        <div className = "footer-container" id = "contact">
            <h1>CONTACT ME</h1>
            <div className = "footer-info-box">
                <p>Thank you for making it all the way to the end! I am currently open to new oppurtunities. Feel free to contact me and I will get back to you!</p>
            </div>
            <div className = "footer-info-box">
                <button className = "contact-button green-color">Come Say Hello</button>
            </div>
        </div>
    );
}

export default Footer;