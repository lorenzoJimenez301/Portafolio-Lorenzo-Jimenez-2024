import React from 'react';
import { useState } from 'react';
import '../Styles/Projects.css';
import multityr from '../Images/Projects/Multityr.png';
import Pagina_multityr from '../Projects_Download/Logos Tecno.rar';
import { IoMdDownload } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';
import Node from '../Images/LogoTecno/NODE LOGO.png';
import Html from '../Images/LogoTecno/HTML LOGO.png';
import Css from '../Images/LogoTecno/CSS LOGO.png';
import Php from '../Images/LogoTecno/PHP LOGO.png';
import react from '../Images/LogoTecno/REACT LOGO.png';
import Bootstrap from '../Images/LogoTecno/BOOTSTRAP LOGO.png'

const ProjectItem = ({ img, url, id }) => {

    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };
    return (
        <div className='projectItemContainer'>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='projectInfoContainer d-flex flex-column-reverse'>
                <div className={`projectInfo ${hovered ? 'isHover' : ''}`}>
                    <a className='aProject' download href={url}><IoMdDownload className='projectOpc down position-absolute' /></a>
                    <AiOutlineInfoCircle data-bs-toggle='modal' data-bs-target={`#${id}`} className='projectOpc' />
                </div>
                <img loading='lazy' className='projectImg' src={img} alt="project" />
            </div>
        </div>
    )
}

const ModalProject = ({ id, title, desc, img, tecno1, tecno2, tecno3, tecno4 }) => {

    const isMobile = useMediaQuery({ maxWidth: 992 })
    return (
        <div id={id} className='modal fade' data-bs-backdrop='static' data-bs-keyboard='false' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered p-0 m-0 d-flex justify-content-center align-items-center'>
                <div style={{ fontFamily: 'var(--mont)' }} className='modal-content'>
                    <div className='modal-header'>
                        <h2 className='p-0 m-0' style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '1.5vw'}` }} >{title}</h2>
                        <RxCross1 style={{ color: '#000', fontSize: `${isMobile ? '6.5vw' : '1.7vw'}` }} type="button" className="btnclose" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className='d-flex flex-column align-items-center modal-body'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img loading='lazy' className='imgModalProjects' src={img} alt="imgModal" />
                        </div>
                        <div style={{ width: `${isMobile ? '100' : '50'}` }} className='textModalContainer text-center d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ marginTop: '2vw', padding: '0 .9vw 0 .9vw' }} className='d-flex flex-column align-items-center'>
                                <h3 style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '2vw'}` }} className='p-0 m-0'>Description:</h3>
                                <p style={{ fontFamily: 'var(--mont)', fontSize: `${isMobile ? '3.5vw' : '1vw'}`, marginTop: '1vw' }} className='p-0'>{desc}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ gap: '7vw', padding: `${isMobile ? '6vw' : '1.5vw'}` }} className=' d-flex flex-row justify-content-center align-items-center'>
                        <h3 style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '2vw'}` }} className='p-0 m-0 '>Tecnologies:</h3>
                        <div style={{ gap: '1vw', padding: `${isMobile ? '4vw 0 2vw 0' : ''}` }} className='d-flex align-items-center justify-content-between'>
                            <img loading='lazy' className='imgTecnoModal' src={tecno1} alt="tecno" />
                            <img loading='lazy'className='imgTecnoModal' src={tecno2} alt="tecno" />
                            <img loading='lazy' className='imgTecnoModal' src={tecno3} alt="tecno" />
                            <img loading='lazy' className='imgTecnoModal' src={tecno4} alt="tecno" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ProjectsWebDevelopment = () => {
    return (
        <>
            <ProjectItem id={'multi'} img={multityr} url={Pagina_multityr} />
            <ProjectItem id={'multi'} img={multityr} url={Pagina_multityr} />
            <ProjectItem id={'multi'} img={multityr} url={Pagina_multityr} />
            <ProjectItem id={'multi'} img={multityr} url={Pagina_multityr} />
            <ProjectItem id={'multi'} img={multityr} url={Pagina_multityr} />
            <ProjectItem id={'multi'} img={multityr} url={Pagina_multityr} />
        </>
    );
}

const ProjectsGrapich = () => {
    return (
        <></>
    );
}

export const Projects = () => {

    const [isGraphicDesign, setIsGraphicDesign] = useState(false);
    const handleChange = (isGraphic) => {
        setIsGraphicDesign(isGraphic);
    }

    return (
        <section className='projectsSection'>
            <div className='projectsTitleContainer'>
                <h2 className='projectTitle'>Projects</h2>
                <h3 className='projectSubTitle'>Personal & Professional</h3>
            </div>
            <div className='projectsContainer'>
                <div className='projectsCate d-flex flex-row align-items-center'>
                    <button className={`btnProjects ${!isGraphicDesign ? 'selected' : ''}`} onClick={() => handleChange(false)}>Web Development</button>
                    <button className={`btnProjects ${isGraphicDesign ? 'selected' : ''}`} onClick={() => handleChange(true)}>Grapich Design</button>
                </div>
                <div className='projectsContainerGrid'>
                    {isGraphicDesign ? <ProjectsGrapich /> : <ProjectsWebDevelopment />}
                    <ModalProject id={'multi'} img={multityr} desc={'Main page of the cleaning division, in the company MultiserviciosTYR.'} title={'Web Page MultiserviciosTYR'} tecno1={Html} tecno2={Css} tecno3={react} tecno4={Bootstrap} />
                </div>
            </div>
        </section>
    );
}