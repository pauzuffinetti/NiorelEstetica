import React from 'react';
import './About.css';
import perfildos from '../../assets/perfildos.png';


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={perfildos} alt="foto de perfil" className='about-img'/>
      </div>

      <div className="about-right">
        <h3>Sobre mi</h3>
        <p>Mi nombre es Pau, soy Técnica Cosmetóloga recibida de la UBA. Me especializo en tratamientos faciales y corporales, enfocándome en la piel no solo desde un aspecto estético, sino como un componente esencial del cuidado de la salud. La piel es el órgano más grande de nuestro cuerpo, y merece la misma atención y cuidado.</p>
        <p>Además de realizar un tratamiento adecuado para vos, te voy a asesorar y a enseñar cómo cuidar tu piel, armando una rutina 100% personalizada en base a tu tipo de piel, necesidades y otros factores que puedan influir en tu bienestar.</p>
        <p>¿Es la primera vez que te haces algún tratamiento?¿No sabes por dónde empezar? No te preocupes,¡estoy para ayudarte!</p>

      </div>
    </div>
  );
};

export default About;
