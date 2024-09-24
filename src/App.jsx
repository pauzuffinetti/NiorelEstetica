import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/Hero/Hero";
import Tratamientos from "./components/Tratamientos/Tratamientos";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Fotos from "./components/Fotos/Fotos";
import Testimonios from "./components/Testimonios/Testimonios";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";




const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title='Tratamientos'/>
        <Tratamientos />
        <About />
        <Title subtitle='Galería' title='Galería de fotos'/>
        <Fotos />
        <Title subtitle='Testimonios' title='Testimonios'/>
        <Testimonios />
        <Title subtitle='Contacto' title='Agendá un turno'/>
        <Contacto />
        <Footer />


      </div>
    </div>
  );
};

export default App;
