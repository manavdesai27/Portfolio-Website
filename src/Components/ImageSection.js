import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Manav Desai</span></h4>
                <p className="about-text">
                    A full stack web developer. Wanna know more about me? Read ahead....
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Manav Desai</p>
                        <p>: 19</p>
                        <p>: Indian</p>
                        <p>: Gujarati, Hindi, English</p>
                        <p>: 8, Navi Mumbai, Mumbai</p>
                        <p>: India, United States of America</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
