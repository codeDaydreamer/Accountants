
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h2>Accountants</h2>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className='icons' /> Our Location</p>
          <p><FontAwesomeIcon icon={faEnvelope} className='icons'/> email@example.com</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Opening Hours</h3>
          <p><FontAwesomeIcon icon={faClock} className='icons'/> Mon - Fri: 9am - 5pm</p>
          <p><FontAwesomeIcon icon={faClock} className='icons'/> Sat: 10am - 3pm</p>
          <p><FontAwesomeIcon icon={faClock} className='icons'/> Sun: Closed</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className='icons' />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className='icons' />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className='icons' />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='icons' />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed and Developed by<span><a href="https://codedaydreamer.github.io/backup-codespace/" target="_blank" rel="noopener noreferrer"> KevKaranja</a></span></p>
      </div>
    </footer>
  );
};

export default Footer;
