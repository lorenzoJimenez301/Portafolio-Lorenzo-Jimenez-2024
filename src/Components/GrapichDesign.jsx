import React from 'react';
import { ProgressBar } from './WebDevelopment';
import { useState, useEffect } from 'react';
import '../Styles/WebDevelopment.css';
import psLogo from '../Images/LogoTecno/1.png';
import fgLogo from '../Images/LogoTecno/2.png';
import cLogo from '../Images/LogoTecno/3.png';

export const GraphicDesign = () => {
  const [ancho1, setAncho1] = useState(0);
  const [ancho2, setAncho2] = useState(0);
  const [ancho3, setAncho3] = useState(0);

  useEffect(() => {
      setAncho1(50);
      setAncho2(80);
      setAncho3(90);
  }, []);

  return (
    <ul style={{ marginTop: '7vw', padding: '0 0 0 2vw' }} className='listSkills listSkillsGraphic d-flex flex-column justify-content-center align-items-center '>
      <ProgressBar logo={psLogo} color={'#00acfe'} porcent={ancho1} />
      <ProgressBar logo={fgLogo} color={'#f04d1b'} porcent={ancho2} />
      <ProgressBar logo={cLogo} color={'#533cf3'} porcent={ancho3} />
    </ul>
  );
};
