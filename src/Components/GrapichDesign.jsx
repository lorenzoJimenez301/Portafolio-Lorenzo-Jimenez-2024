import React from 'react';
import { ProgressBar } from './WebDevelopment';
import '../Styles/WebDevelopment.css';
import psLogo from '../Images/LogoTecno/1.png';
import fgLogo from '../Images/LogoTecno/2.png';
import cLogo from '../Images/LogoTecno/3.png';

export const GraphicDesign = () => {
  const progressBarData = [
    { logo: psLogo, color: '#00aeff', porcent: 30 },
    { logo: fgLogo, color: '#f14e1c', porcent: 70 },
    { logo: cLogo, color: '#4c49ee', porcent: 90 },
  ];

  return (
    <ul className='listSkills p-0 m-0 d-flex flex-column justify-content-center align-items-center pt-4 pb-4 pt-lg-0 pb-lg-0'>
      {progressBarData.map((data, index) => (
        <ProgressBar key={index} {...data} />
      ))}
    </ul>
  );
};
