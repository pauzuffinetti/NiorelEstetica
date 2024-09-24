import {React, useRef} from "react";
import "./Testimonios.css";
import next from "../../assets/next.png";
import back from "../../assets/back.png";

const Testimonios = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
    if(tx > 50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
    if(tx > 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="testimonios">
      <img src={next} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back} alt="" className="back-btn" onClick={slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Vicky</h3>
                </div>
              </div>
              <p>Hola Pau!! Quería contarte que me quedó la piel divina después del tratamiento, me levanto con un brillo hermoso y noto el brote mucho mas calmado que hace unos días. Gracias, estoy muy contenta con los resultados 💕</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Test</h3>
                </div>
              </div>
              <p>Lorem blablabla</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Test</h3>
                </div>
              </div>
              <p>Lorem blablabla</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Test</h3>
                </div>
              </div>
              <p>Lorem blablabla</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonios;
