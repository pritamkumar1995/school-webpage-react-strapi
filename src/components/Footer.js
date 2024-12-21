import React from 'react';

const Footer = ({ logoUrl }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={`http://localhost:1337${logoUrl}`} alt="DBTR Logo" className="logo" />
          <div className="footer-text">
            <h4>DBTR National Higher Secondary School</h4>
            <p style={{ color: "#232C95" }}>Virtuousness is Life</p>
            <p>Established in 1901, DBTR is situated in the temple town of Mayiladuthurai.</p>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Alumni association</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            DBTR NHSS,<br />
            Mahadhana Street, Kamarajar Salai,<br />
            Mayiladuthurai, Tamilnadu - 609001
          </p>
          <p>+91.436.422.3272</p>
          <p><a className='mail-link' href="mailto:contact@nationalhighschool.in">contact@nationalhighschool.in</a></p>
        </div>
        <div className="footer-donate">
          <h4>Big or small, you can make an impact.</h4>
          <button className="donate-button">Donate<i className="fas fa-heart" /></button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© DBTR 2023, All Rights Reserved | Sitemap</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <p className="footer-design">Designed by <span style={{ color: "#666", fontSize: "18px" }}>PEPPER S<span className='des'>Q</span>UARE</span></p>
    </footer>
  );
};

export default Footer;
