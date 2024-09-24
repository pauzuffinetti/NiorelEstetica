import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>Página creada por mi, con mucho ❤️</p>
      <div className="socials">
        <img src={instagram} alt="instagram logo" className="instagram" />
        <img src={whatsapp} alt="whatsapp icon" className="instagram"/>
      </div>
    </div>
  );
};

export default Footer;
