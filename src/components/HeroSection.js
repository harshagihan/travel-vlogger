import React from 'react'
import '../App.css'
import {Button} from "./Button";
import './HeroSection.css';
// import video2 from '../assest/video/video-2.mp4'

function  HeroSection () {

    return(
        <div className='hero-container'>
            {/*<video src={video2} autoPlay loop muted />*/}
            <h1>One Mile At A Time.</h1>
            <p>What are you waiting for?</p>
        </div>
    );
}

export default HeroSection;