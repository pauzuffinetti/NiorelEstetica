import React from 'react';
import './Tratamientos.css';
import limpieza from '../../assets/limpieza.PNG'
import dermaplaning from '../../assets/dermaplaning.PNG';
import peeling from '../../assets/peeling.PNG';
import microneedling from '../../assets/microneedling.PNG';
import premium from '../../assets/premium.PNG';
import treatment from '../../assets/treatment.png';

import facial from '../../assets/facial.png';
import cream from '../../assets/cream.png';
import acid from '../../assets/acid.png';
import skincare from '../../assets/skincare.png';

const Tratamientos = () => {
  return (
    <div className="tratamientos">
      <div className="tratamiento">
        <img src={limpieza} alt="" />
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
