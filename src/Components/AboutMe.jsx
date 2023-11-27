import React, { useState, useRef } from 'react';
import '../Styles/AboutMe.css';
import { WebDevelopment } from './WebDevelopment';
import { GraphicDesign } from '../Components/GrapichDesign';
import { CSSTransition } from 'react-transition-group';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export const AboutMe = () => {
    const [isGraphicDesign, setIsGraphicDesign] = useState(false);
    const [isFrontEnd, setIsFrontEnd] = useState(true);
    const transitionRef = useRef(null);

    const handleChange = (isGraphic) => {
        setIsGraphicDesign(isGraphic);
        setIsFrontEnd(true); // Reset Front-End selection when switching between Graphic Design and Web Development
    }

    const changeSection = (isFront) => {
        setIsFrontEnd(isFront);
    }
    const { backgroundImage } = useContext(ThemeContext);
    return (
        <section style={{backgroundImage: `url(${backgroundImage})`}} className='superSkillsContainer d-flex flex-column flex-lg-row align-items-center'>
            <article className='skills1 d-flex justify-content-center align-items-center'>
                <div className='skills1Container d-flex flex-column '>
                    <h2 className='skillsTitle p-0 m-0'>Experience</h2>
                    <h3 className='skills1SubTitle p-0 m-0'>& Skills</h3>
                    <p className='m-0 skills1P'>
                        I am a web developer and programmer with solid experience in graphic design. Passionate about <strong>creating intuitive and engaging digital solutions that fuse functionality with aesthetic design.</strong>
                    </p>
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
                    <div ref={transitionRef} className='skillsDetailsContainer'>
                        <CSSTransition nodeRef={transitionRef} in={isGraphicDesign} timeout={200} classNames="my-node">
                            {isGraphicDesign ? <GraphicDesign /> : <WebDevelopment section={isFrontEnd} />}
                        </CSSTransition>
                    </div>
                </div>
            </article>
        </section>
    );
}

