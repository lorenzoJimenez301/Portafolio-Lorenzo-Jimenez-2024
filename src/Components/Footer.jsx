import React from 'react';
import '../Styles/Footer.css';
import Logo from '../Images/Logo_White.svg';
import { FaLinkedin, FaWhatsapp, FaGithub, FaBehanceSquare } from 'react-icons/fa';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='d-flex justify-content-center align-items-center'>
      <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <div>
          <img loading='lazy' className='LogoWhite' src={Logo} alt='' />
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center w-50 containerLinkFooter'>
          <hr className='hrFooter hr1' />
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/lorenzojimenezabarca301/'>
            <FaLinkedin />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://wa.me/50687861758'>
            <FaWhatsapp />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://github.com/lorenzoJimenez301'>
            <FaGithub />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://www.behance.net/lorenzojimenez4'>
            <FaBehanceSquare />
          </a>
          <hr className='hrFooter hr2' />
        </div>
        <div className=''>
          <p className='pFooter'>© {year} Lorenzo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
