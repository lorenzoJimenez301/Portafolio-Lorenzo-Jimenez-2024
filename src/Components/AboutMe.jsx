import React, { useState, useRef } from 'react';
import '../Styles/AboutMe.css';
import { WebDevelopment } from './WebDevelopment';
import { GraphicDesign } from '../Components/GrapichDesign';
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export const AboutMe = () => {
    const [isGraphicDesign, setIsGraphicDesign] = useState(false);
    const [isFrontEnd, setIsFrontEnd] = useState(true);
    const transitionRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 992 });



    const handleChange = (isGraphic) => {
        setIsGraphicDesign(isGraphic);
        setIsFrontEnd(true); // Reset Front-End selection when switching between Graphic Design and Web Development
    }

    const changeSection = (isFront) => {
        setIsFrontEnd(isFront);
    }
    
    const { backgroundImage } = useContext(ThemeContext);
    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }} className='superSkillsContainer d-flex flex-column flex-lg-row align-items-center'>
            <article className='skills1 d-flex justify-content-center align-items-center'>
                <div className='skills1Container d-flex flex-column '>
                    <h2 className='skillsTitle p-0 m-0'>Experience</h2>
                    <h3 className='skills1SubTitle p-0 m-0'>& Skills</h3>
                    <p className='m-0 skills1P'>
                        I am a web developer and programmer with solid experience in graphic design. Passionate about <strong>creating intuitive and engaging digital solutions that fuse functionality with aesthetic design.</strong>
                    </p>
                    <p className='m-0 skills1P'>
                        He also owns a small digital marketing service startup called <strong>Antonio's Solutions</strong>. 
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`btnAnto text-decoration-none ${isMobile ? 'd-none' : 'd-flex'}`}
                        href='https://www.facebook.com/profile.php?id=100093310074051'
                        target='_blank'
                    >
                        Antonio's Solutions
                        <FaChevronRight className='arrowRight p-0' />
                    </motion.a>
                </div>
            </article>
            <article className='skills2 d-flex justify-content-center align-items-center'>
                <div className='skillsContainer'>
                    <div className='skillsContainerTitleContainer d-flex justify-content-evenly align-items-center'>
                        <button className={`btnControlSkills ${isGraphicDesign ? 'selected' : ''}`} onClick={() => handleChange(true)}>Graphic Design</button>
                        <button className={`btnControlSkills ${!isGraphicDesign ? 'selected' : ''}`} onClick={() => handleChange(false)}>Web Development</button>
                    </div>
                    {!isGraphicDesign &&
                        <div className='skillsDetailsTitle d-flex justify-content-center justify-content-lg-start align-items-center'>
                            <button onClick={() => changeSection(true)} className={`btnFrontBack p-0 m-0 ${isFrontEnd ? 'isSelected' : ''}`}>Front-End</button>
                            <button onClick={() => changeSection(false)} className={`btnFrontBack p-0 m-0 ${!isFrontEnd ? 'isSelected' : ''}`}>Back-End</button>
                        </div>
                    }
                    <div className='skillsDetailsContainer'>
                        <CSSTransition>
                            {isGraphicDesign ? <GraphicDesign /> : <WebDevelopment section={isFrontEnd} />}
                        </CSSTransition>
                    </div>
                </div>
            </article>
        </section>
    );
}

