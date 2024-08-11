import { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars } from 'react-icons/fa'; // Import the Font Awesome bars icon

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <nav className={`container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>Accountants</h1>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#team" onClick={handleLinkClick}>Team</a></li>
        <li><a href="#testimonials" onClick={handleLinkClick}>Testimonials</a></li>
        <li><a href="#contact" className='btn' onClick={handleLinkClick}>Contact Us</a></li>
      </ul>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
