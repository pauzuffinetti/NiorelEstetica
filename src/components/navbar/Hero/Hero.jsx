import React from 'react'
import './Hero.css'
import rightArrow from '/src/assets/rightArrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Niorel Estética</h1>
            <p>Centro de estética facial y corporal</p>
            <button className='btn'>Explorar <img src={rightArrow} alt="flecha" /></button>
        </div>
    </div>
  )
}

export default Hero;
