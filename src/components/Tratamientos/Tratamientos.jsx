import React from 'react';
import './Tratamientos.css';
import Limpieza from '../../assets/Limpieza.png'
import dermaplaning from '../../assets/dermaplaning.png';
import peeling from '../../assets/peeling.png';
import microneedling from '../../assets/microneedling.png';
import premium from '../../assets/premium.png';
import treatment from '../../assets/treatment.png';
import facial from '../../assets/facial.png';
import cream from '../../assets/cream.png';
import acid from '../../assets/acid.png';
import skincare from '../../assets/skincare.png';

const Tratamientos = () => {
  return (
    <div className="tratamientos">
      <div className="tratamiento">
        <img src={Limpieza} alt="" />
        <div className="caption">
          <img src={treatment} alt="" />
          <p>Limpieza clásica</p>
        </div>
      </div>

      <div className="tratamiento">
        <img src={dermaplaning} alt="" />
        <div className="caption">
          <img src={cream} alt="" />
          <p>Dermaplaning</p>
        </div>
      </div>

      <div className="tratamiento">
        <img src={microneedling} alt="" />
        <div className="caption">
          <img src={acid} alt="" />
          <p>Microneedling</p>
        </div>
      </div>

      <div className="tratamiento">
        <img src={peeling} alt="" />
        <div className="caption">
          <img src={facial} alt="" />
          <p>Peeling químico</p>
        </div>
      </div>

      <div className="tratamiento">
        <img src={premium} alt="" />
        <div className="caption">
          <img src={skincare} alt="" />
          <p>Tratamientos PREMIUM</p>
        </div>
      </div>

      
    </div>
  );
};

export default Tratamientos;
