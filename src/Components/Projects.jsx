import React from 'react';
import { useState } from 'react';
import '../Styles/Projects.css';
import multityr from '../Images/Projects/Multityr.png';
import Pagina_multityr from '../Projects_Download/MultiserviciosTyR-mulrityr.zip';
import imgCalcu from '../Images/Projects/Calcu.png';
import calcu from '../Projects_Download/calculadora-react.rar';
import imgContador from '../Images/Projects/Contador.png';
import contador from '../Projects_Download/contador-clics.rar';
import imgToDo from '../Images/Projects/TODO.png';
import toDo from '../Projects_Download/gestor-de-tareas.rar';
import imgPhp from '../Images/Projects/php.png';
import phpCrud from '../Projects_Download/PHP_CRUD.rar';
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
                        <h2 className='p-0 m-0' style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '2vw'}` }} >{title}</h2>
                        <RxCross1 style={{ color: '#000', fontSize: `${isMobile ? '6.5vw' : '2vw'}` }} type="button" className="btnclose" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className='d-flex flex-column align-items-center modal-body-projects'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img loading='lazy' className='imgModalProjects' src={img} alt="imgModal" />
                        </div>
                        <div style={{ width: `${isMobile ? '100' : '50'}` }} className='textModalContainer text-center d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ marginTop: '0vw' }} className='d-flex flex-column align-items-center textModal'>
                                <h3 style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '1.5vw'}` }} className='p-0 m-0'>Description:</h3>
                                <p style={{ fontFamily: 'var(--mont)', fontSize: `${isMobile ? '3vw' : '1vw'}`, margin: '2vw 0 0 0 ' }} className='p-0'>{desc}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ gap: '3vw', padding: `${isMobile ? '6vw' : '0vw'}` }} className=' d-flex flex-row justify-content-center align-items-center'>
                        <h3 style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '1.5vw'}` }} className='p-0 m-0 '>Tecnologies:</h3>
                        <div style={{ height: '2VW', gap: `${isMobile ? '1vw' : '1vw'}` }} className='d-flex align-items-center justify-content-between modalFooter'>
                            <img loading='lazy' className='imgTecnoModal' src={tecno1} alt="tecno" />
                            <img loading='lazy' className='imgTecnoModal' src={tecno2} alt="tecno" />
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
            <ProjectItem id={'calcu'} img={imgCalcu} url={calcu} />
            <ProjectItem id={'cont'} img={imgContador} url={contador} />
            <ProjectItem id={'todo'} img={imgToDo} url={toDo} />
            <ProjectItem id={'php'} img={imgPhp} url={phpCrud} />
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
                    <ModalProject id={'calcu'} img={imgCalcu} desc={'A calculator made with React is an interactive web application that uses the React JavaScript library to create an intuitive and functional user interface for performing basic mathematical operations.'} title={'React Calculator'} tecno1={Html} tecno2={Css} tecno3={react} tecno4={Node} />
                    <ModalProject id={'cont'} img={imgContador} desc={'A counter made with React is a UI component that uses the React JavaScript library to create a web application that displays a number and allows you to increase or decrease it with increment and decrement buttons.'} title={'React Counter'} tecno1={Html} tecno2={Css} tecno3={react} tecno4={Node} />
                    <ModalProject id={'todo'} img={imgToDo} desc={'A task manager made with React is a web application that uses the React JavaScript library to help users dynamically organize, create, delete, and edit tasks.'} title={'React "Thing to do"'} tecno1={Html} tecno2={Css} tecno3={react} tecno4={Node} />
                    <ModalProject id={'php'} img={imgPhp} desc={'A CRUD (Create, Read, Update, Delete) in PHP is a set of basic operations to manage data in a database.'} title={'PHP CRUD'} tecno1={Html} tecno2={Css} tecno3={Bootstrap} tecno4={Php} />
                </div>
            </div>
        </section>
    );
}