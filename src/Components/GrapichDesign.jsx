import React from 'react';
import { ProgressBar } from './WebDevelopment';
import { useState, useEffect } from 'react';
import '../Styles/WebDevelopment.css';
import ACCLog from '../Images/LogoTecno/ACC_Logo.svg';
import Blogo from '../Images/LogoTecno/Blender_Logo.png';
import fgLogo from '../Images/LogoTecno/Figma.svg';
import Power from '../Images/LogoTecno/Power BI.png';

export const GraphicDesign = () => {
  const [ancho1, setAncho1] = useState(0);
  const [ancho2, setAncho2] = useState(0);
  const [ancho3, setAncho3] = useState(0);
  const [ancho4, setAncho4] = useState(0);

  useEffect(() => {
      setAncho1(80);
      setAncho2(80);
      setAncho3(50);
      setAncho4(50);
  }, []);

  return (
    <ul style={{ marginTop: '7vw', padding: '0 0 0 2vw' }} className='listSkills listSkillsGraphic d-flex flex-column justify-content-center align-items-center'>
      <ProgressBar clase={'iconTecno'} logo={ACCLog} color={'#f71dbf'} porcent={ancho1} />
      <ProgressBar clase={'iconTecno'} logo={Blogo} color={'#fc9800'} porcent={ancho3} />
      <ProgressBar clase={'iconTecno'} logo={fgLogo} color={'#f04d1b'} porcent={ancho2} />
      <ProgressBar clase={'iconTecno'} logo={Power} color={'#f6d95c'} porcent={ancho4} />
    </ul>
  );
};
