import React from 'react';
import './Footer.css';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';

const Footer = () => {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/niorel.estetica", "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/541125298014?", "_blank", "noopener,noreferrer");
  };

  const handlePortfolioClick = () => {
    window.open("https://portfoliopz.vercel.app/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="footer">
      <p>Página creada por mi, con mucho ❤️ | <span onClick={handlePortfolioClick} style={{ cursor: "pointer" }}>Portfolio</span></p>
      <div className="socials">
        <img
          src={instagram}
          alt="instagram logo"
          className="instagram"
          onClick={handleInstagramClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src={whatsapp}
          alt="whatsapp icon"
          className="whatsapp"
          onClick={handleWhatsAppClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Footer;
