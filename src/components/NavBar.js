import React, {Component} from 'react';
import '../css/Nav.css';

function NavBar(){
    function revealNav() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return(
        <div className="topnav" id="myTopnav">
            <a href="#landing">Kevin Su</a>
            <div>
                <a href=''></a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="javascript:void(0);" className="icon" onClick={revealNav}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    );
}

export default NavBar;