import React from 'react';
import { ProgressBar } from './WebDevelopment';
import { useState, useEffect } from 'react';
import '../Styles/WebDevelopment.css';
import psLogo from '../Images/LogoTecno/Photoshop_Logo.svg';
import fgLogo from '../Images/LogoTecno/Figma.svg';
import aILogo from '../Images/LogoTecno/Ilustrator_Logo.svg';
import xdLogo from '../Images/LogoTecno/AdobeXD_Logo.svg';

export const GraphicDesign = () => {
  const [ancho1, setAncho1] = useState(0);
  const [ancho2, setAncho2] = useState(0);
  const [ancho3, setAncho3] = useState(0);
  const [ancho4, setAncho4] = useState(0);

  useEffect(() => {
      setAncho1(70);
      setAncho2(80);
      setAncho3(70);
      setAncho4(80);
  }, []);

  return (
    <ul style={{ marginTop: '7vw', padding: '0 0 0 2vw' }} className='listSkills listSkillsGraphic d-flex flex-column justify-content-center align-items-center'>
      <ProgressBar clase={'iconTecno'} logo={'/public/images/LogoTecno/Photoshop_Logo.svg'} color={'#00acfe'} porcent={ancho1} />
      <ProgressBar clase={'iconTecno'} logo={'/public/images/LogoTecno/Ilustrator_Logo.svg'} color={'#fc9800'} porcent={ancho3} />
      <ProgressBar clase={'iconTecno'} logo={'/public/images/LogoTecno/Figma.svg'} color={'#f04d1b'} porcent={ancho2} />
      <ProgressBar clase={'iconTecno'} logo={'/public/images/LogoTecno/AdobeXD_Logo.svg'} color={'#fc5ff3'} porcent={ancho4} />
    </ul>
  );
};
