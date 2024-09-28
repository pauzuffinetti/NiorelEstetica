import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo03 from '../../assets/Logo03.png'
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menuIcon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 350 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={Logo03} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='tratamientos' smooth={true} offset={-260} duration={500}>Tratamientos</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>Sobre mi</Link></li>
            <li><Link to='fotos' smooth={true} offset={-260} duration={500}>Fotos</Link></li>
            <li><Link to='testimonios' smooth={true} offset={-260} duration={500}>Testimonios</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contacto</Link></li>
        </ul>
        <img src={menuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;
