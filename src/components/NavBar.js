import React from 'react';
import '../Nav.css';

function NavBar(props) {
    return (
        <ul>
            <li><a href="default.asp">ABOUT</a></li>
            <li><a href="news.asp">PROJECTS</a></li>
            <li><a href="contact.asp">EXPERIENCE</a></li>
            <li><a href="about.asp">CONTACT</a></li>
        </ul>
    );
}

export default NavBar;