import React from 'react'
import '../App.css'
import {Button} from "./Button";
import './HeroSection.css';
import video2 from '../assest/video/video-2.mp4'

function  HeroSection () {

    return(
        <div className='hero-container'>
            <video src={video2} autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className='btns'
                    buttonSize='btn--large'
                    buttonStyle='btn--outline'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonSize='btn--primary'
                    buttonStyle='btn--large'
                    >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;