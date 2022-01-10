import React from 'react';
import '../css/Nav.css';

function NavBar(props) {
    return (
        <ul>
            <li>
                <li>KEVIN SU</li>
            </li>
            <li>
                <li><a href="default.asp">ABOUT</a></li>
                <li><a href="news.asp">PROJECTS</a></li>
                <li><a href="contact.asp">EXPERIENCE</a></li>
                <li><a href="about.asp">CONTACT</a></li>
            </li>
        </ul>
    );
}

export default NavBar;