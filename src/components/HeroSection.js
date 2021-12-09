import React from 'react';
import Button from "./Button";
import '../App.css';
import './HeroSection.css';

function HeroSection(){
    return (
      <div className='hero-container'>
          <video autoPlay loop muted>
              <source src="/public/Videos/video-1.mp4" type='video/mp4'/>
                  <p>Sorry video is not supported</p>
          </video>
          <hi>THE WAR BEGAN!</hi>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
              <Button className='btns'
                      buttonSize='btn--large'
                      buttonSytle='btn--outline'>
                  GET STARTED
              </Button>
              <Button className='btns'
                      buttonSize='btn--large'
                      buttonSytle='btn--outline'>
                  WATCH TRAILER <i className='far far-play-circle'/>
              </Button>
          </div>
      </div>
    );
}

export default HeroSection;