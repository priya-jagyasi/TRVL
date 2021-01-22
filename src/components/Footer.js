import React from 'react';
import Button from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best  vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form >
                        <input className="footer-input" type="email" name="email" placeholder="Your Email"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        {/* </div> */}
        {/* <div className='footer-link-wrapper'> */}
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/facebook.com'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
       <section className="social-media">
           <div className="social-media-wrap">
               <div className="footer-logo">
                   <Link to="/" className="social-logo">
                       TRVL <i className="fab fa-typo3" />
                   </Link>
               </div>
               <small className="website-rights">TRVL 2020</small>
               <div className="social-icons">
                   <a href="https://www.facebook.com" className="social-icon-link facebook" target="_blank" rel="noreferrer" aria-label="Facebook">
                       <i className="fab fa-facebook-f"></i>
                   </a>
                   <a href="https://www.instagram.com" className="social-icon-link instagram" target="_blank" rel="noreferrer" aria-label="Instagram">
                       <i className="fab fa-instagram"></i>
                   </a>
                   <a href="https://www.youtube.com" className="social-icon-link youtube" target="_blank" rel="noreferrer" aria-label="YouTube">
                       <i className="fab fa-youtube"></i>
                   </a>
                   <a href="https://www.twitter.com" className="social-icon-link twitter" target="_blank" rel="noreferrer" aria-label="Twitter">
                       <i className="fab fa-twitter"></i>
                   </a>
                   <a href="https://www.linkedin.com" className="social-icon-link linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                       <i className="fab fa-linkedin"></i>
                   </a>
        
               </div>
               
           </div>
       </section>

        </div>
    )
}

export default Footer
