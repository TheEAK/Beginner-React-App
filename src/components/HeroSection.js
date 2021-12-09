import React from 'react';

function HeroSection(){
    return (
      <div className='hero-container'>
          <video src="/public/videos/Madara.mp4" autoPlay loop muted />
          <hi>THE WAR BEGAN!</hi>
          <p>What are you waiting for?</p>
      </div>
    );
}

export default HeroSection;