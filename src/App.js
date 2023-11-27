import './App.css';
import { Index } from './Components/Index';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import 'reset.css';
import samuraiNegro from './Images/Samurai_Black.png';
import samuraiBlanco from './Images/Samurai_White.png';
import { useState } from 'react';
import { AboutMe } from './Components/AboutMe';
import { InterIndex } from './Components/InterIndex';
import { Certifications } from './Components/Certifications';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

function App() {
  document.addEventListener('DOMContentLoaded', () => {
    var img1 = new Image();
    img1.src = samuraiBlanco;
  })
  document.addEventListener('DOMContentLoaded', () => {
    var img2 = new Image();
    img2.src = samuraiNegro;
  })
  const [imagenURL1, setImagenURL1] = useState(samuraiNegro);
  const [imagenURL2, setImagenURL2] = useState(samuraiBlanco);
  const [mostrarPrimeraImagen, setMostrarPrimeraImagen] = useState(true);
  const handleImagenCambiada = (nuevaImagen) => {
    if (mostrarPrimeraImagen) {
      setImagenURL1(nuevaImagen);
    } else {
      setImagenURL2(nuevaImagen);
    }
    setMostrarPrimeraImagen(!mostrarPrimeraImagen);
  };
  return (
    <>
      <div className='App'>
      <Navbar onImagenCambiada={handleImagenCambiada} />
        <Routes>
          <Route path='/' element={
            <Index
              imagenURL1={imagenURL1}
              imagenURL2={imagenURL2}
              mostrarPrimeraImagen={mostrarPrimeraImagen} />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Certifications' element={<Certifications />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
        <InterIndex />
      <Footer />
      </div>
    </>
  );
}

export default App;
