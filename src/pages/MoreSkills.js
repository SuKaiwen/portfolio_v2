import React from 'react';
import '../css/Global.css';
import '../css/MoreSkills.css';

function MoreSkills(props) {
    return (
        <div className = "page-container">
            <div className = "skill-container">
                <h1>Cool stuff I can do</h1>
                <div className = "skill-showcase">
                    <div className = "skill-tab">
                        <i class="fas fa-pen-fancy fa-5x icon"></i>
                        <h2>UX</h2>
                        <p>I enjoy creatings applications that not only perform well but also are pleasing to the eye. This involves fixing small details and making micro adjustments to ensure that the user has the best experience.</p>
                    </div>
                    <div className = "skill-tab">
                        <i class="fas fa-mobile-alt fa-5x icon"></i>
                        <h2>Responsive Design</h2>
                        <p>Not everyone will be viewing a website on a desktop. I place high importance in designing and developing for all devices and mediums.</p>
                    </div>
                    <div className = "skill-tab">
                        <i class="fas fa-code fa-5x icon"></i>
                        <h2>Code</h2>
                        <p>I enjoy creating applications with code that is clean, maintainable, extensible and easy to read!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreSkills;