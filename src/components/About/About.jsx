import React from "react";
import "./About.css";
import perfildos from "../../assets/perfildos.png";


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={perfildos} alt="foto de perfil" className='about-img'/>
      </div>

      <div className="about-right">
        <h3>Sobre mi</h3>
        <p>Mi nombre es Pau, soy Técnica Cosmetóloga recibida de la UBA. Realizo tanto tratamientos faciales como corporales, tratando la piel no como algo estético sino como parte del cuidado de la salud. La piel es un órgano y hay que cuidarlo como tal.</p>
        <p>Además de realizar un tratamiento, te voy a asesorar y a enseñarte cómo cuidar tu piel, armando una rutina 100% personalizada en base a tu tipo de piel, necesidades y factores externos.</p>

      </div>
    </div>
  );
};

export default About;
