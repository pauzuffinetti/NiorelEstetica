import React, { useRef } from 'react';
import './Testimonios.css';
import next from '../../assets/next.png';
import back from '../../assets/back.png';

const Testimonios = () => {
  const slider = useRef();
  const tx = useRef(0); // Almacenar el valor de tx en una referencia

  const slideForward = () => {
    if (tx.current > -50) { // Limitar el desplazamiento máximo hacia adelante
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) { // Limitar el desplazamiento máximo hacia atrás
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className="testimonios">
      <img src={next} alt="" className="next-btn" onClick={slideForward} />
      <img src={back} alt="" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Vicky</h3>
                </div>
              </div>
              <p>"Hola Pau!! Quería contarte que me quedó la piel divina después del tratamiento, me levanto con un brillo hermoso y noto el brote mucho mas calmado que hace unos días. Gracias, estoy muy contenta con los resultados 💕"</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Pili F.</h3>
                </div>
              </div>
              <p>"Fui y seguiré yendo siempre por los tratamientos premium, esos masajes son la gloria. Me relajo tanto que me voy al plano astral"</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Cami P.</h3>
                </div>
              </div>
              <p>"Pau, te quería contar que veo unos re cambios en las marquitas de acné, siento que se notan mucho menos que antes, no son tan profundas como solían serlo. Además no sentí ninguna molestia después del peeling, sos una genia"</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Cande S.</h3>
                </div>
              </div>
              <p>"Siempre fiel a vos, mi cosmetóloga de hace ya tres años. No te cambio por nadie!! Solo a vos te confío mi carita para que me cuides siempre" </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonios;
