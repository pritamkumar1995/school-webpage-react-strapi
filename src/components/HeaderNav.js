import React from 'react';

const HeaderNav = ({ logoUrl }) => {
  return (
    <div className="top-nav">
      <div className="logo-nav">
        <div className="logo">
          <a href="#">
            <img src={`http://localhost:1337${logoUrl}`} alt="Logo" className="logo-img" />
          </a>
        </div>
        <div className="nav">
          <ul>
            <li><a href="#">The School</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Life @ DBTR</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>

      <div className="button-container">
        <div className="csr-btn">
          <a href="#">CSR</a>
        </div>
        <div className="donate-btn">
          <a href="#">Donate<i className="fas fa-heart" /></a>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
