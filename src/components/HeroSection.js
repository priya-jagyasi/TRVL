import React from 'react'
import Button from './Button';  
import '../App.css';
import './HeroSection.css';
import { Link} from 'react-router-dom';

function HeroSection() {
    return (
        <div className="hero-container">
          <video src="videos/video-2.mp4" autoPlay loop muted />
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
              <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">
                  GET STARTED
              </Button>
              <Link to="/trailer">
              <Button className="btns" buttonSize="btn--large" buttonStyle="btn--primary">
                  WATCH TRAILER <i className="far fa-play-circle"/>
              </Button>
              </Link>
          </div>
        </div>
    )
}

export default HeroSection
