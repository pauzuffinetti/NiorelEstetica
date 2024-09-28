import React from 'react';
import './Fotos.css';
import tefione from '../../assets/tefione.jpeg';
import tefitwo from '../../assets/tefitwo.jpeg';
import agoz from '../../assets/agoz.jpeg';
import cami1 from '../../assets/cami1.jpeg';
import cami2 from '../../assets/cami2.jpeg';
import estrias from '../../assets/estrias.jpeg';

const Fotos = () => {
  return (
    <div className="fotos">

        <img src={tefione} alt="" />
        <img src={tefitwo} alt="" />
        <img src={agoz} alt="" />

        <img src={cami1} alt="" />
        <img src={estrias} alt="" />
        <img src={cami2} alt="" />
      </div>
  );
};

export default Fotos;
