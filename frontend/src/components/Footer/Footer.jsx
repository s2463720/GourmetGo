import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Gourmet Go Logo" className="footer-logo" />
          <p>At Gourmet Go, we believe in the power of fresh, premium ingredients. 
            Our goal is to make healthy eating accessible and enjoyable for everyone. 
            Join us in our journey to promote a better, more sustainable lifestyle.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>05346763241</li>
            <li>gourmetgo@info.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© 2024 GourmetGo</p>
    </div>
  );
}

export default Footer;
