import React from "react";
import "./Contacto.css";
import chat from "../../assets/chat.png";
import pin from "../../assets/pin.png";
import whatsapp from "../../assets/whatsapp.png";
import Mapa from "./Mapa";

const Contacto = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h3>
          Escribime para coordinar un turno <img src={chat} alt="chat icon" />
        </h3>
        <p>Turnos de Lunes a Viernes por la tarde | Solo mujeres.</p>
        <p className="location">
          <img src={pin} alt="pin icon" />
          Florida, Vicente Lopez.
        </p>
        <button className="btn-contact">
          <img src={whatsapp} alt="whatsapp icon" /> Enviar mensaje
        </button>
      </div>

      <div className="contact-right">
        
        <Mapa />
      </div>
    </div>
  );
};

export default Contacto;
