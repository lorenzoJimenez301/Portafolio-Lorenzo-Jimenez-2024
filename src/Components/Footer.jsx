import React from 'react';
import '../Styles/Footer.css';
import Logo from '../Images/LogoHD.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='d-flex justify-content-center align-items-center pt-4'>
      <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <div>
          <img loading='lazy' className='LogoWhite' src={Logo} alt='' />
        </div>
        <div className='d-flex flex-row align-items-center justify-content-center w-50 containerLinkFooter p-2 p-lg-5 pt-2 pt-lg-3'>
          <hr className='hrFooter m-0 p-0 me-2' />
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/lorenx_jimenez301/'>
            <FaInstagram />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/profile.php?id=100091605591871'>
            <FaFacebook />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/lorenzojimenezabarca301/'>
            <FaLinkedin />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://api.whatsapp.com/send?phone=87861758'>
            <FaWhatsapp />
          </a>
          <a className='footerLink' target='_blank' rel='noopener noreferrer' href='https://github.com/lorenzoJimenez301'>
            <FaGithub />
          </a>
          <hr className='hrFooter m-0 p-0 ms-2' />
        </div>
        <div className='p-4 pt-2'>
          <p className='p-0 m-0 pFooter'>© {year} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
