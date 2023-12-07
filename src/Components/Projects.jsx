import React, {useEffect} from 'react';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import '../Styles/Projects.css';
import { RxCross1 } from "react-icons/rx";
import { BsGithub, BsGlobe2, BsInfoCircle } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import apiLogo from '../Images/LogoTecno/apiLogo.png'
import fakeStore from '../Images/Projects/fakeStore.png';
import Node from '../Images/LogoTecno/NODE LOGO.png';
import Html from '../Images/LogoTecno/HTML LOGO.png';
import Css from '../Images/LogoTecno/CSS LOGO.png';
import Php from '../Images/LogoTecno/PHP LOGO.png';
import react from '../Images/LogoTecno/REACT LOGO.png';
import Bootstrap from '../Images/LogoTecno/BOOTSTRAP LOGO.png';
import multityr from '../Images/Projects/Multityr.png';
import imgCalcu from '../Images/Projects/Calcu.png';
import imgContador from '../Images/Projects/Contador.png';
import imgToDo from '../Images/Projects/TODO.png';
import imgPhp from '../Images/Projects/php.png';
import { ColorRing } from 'react-loader-spinner';

const ProjectItem = ({ img, id, urlGit, urlPage }) => {
    const [hovered, setHovered] = useState(false);
    const [isloading, setIsLoading] = useState(true);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = img;
        imageLoader.onload = () => {
            setIsLoading(false);
        };
    }, [img]);

    return (
        <div className='projectItemContainer'>
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='projectInfoContainer d-flex flex-column-reverse'>
                <div className={`p-2 projectInfo ${hovered ? 'isHover' : ''}`}>
                    <a className='linkProject d-flex justify-content-center align-items-center' rel='noreferrer' target='_blank' href={urlGit}><BsGithub  className='projectOpc' /></a>
                    <a className='linkProject d-flex justify-content-center align-items-center' rel='noreferrer' target='_blank' href={urlPage}><BsGlobe2  className='projectOpc' /></a>
                    <BsInfoCircle data-bs-toggle='modal' data-bs-target={`#${id}`} className='linkProject projectOpc' />
                </div>
                {isloading ? (
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper w-100"
                        colors={['#000']}
                    />
                ) : (
                    <img className='projectImg' src={img} alt="project" />
                )}
            </div>
        </div>
    );
};

export default ProjectItem;

const ModalProject = ({ id, title, img, tecno1, tecno2, tecno3, tecno4 }) => {
    const isMobile = useMediaQuery({ maxWidth: 992 })
    return (
        <div className="modal modalProject fade p-0 m-0" id={id} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
            <div style={{ minWidth: '40vw' }} className="modal-dialog modal-dialog-centered">
                <div style={{ minWidth: '40vw' }} className="modal-content rounded-0">
                    <div style={{ padding: '1.5vw' }} className="modal-header">
                        <h2 className='p-0 m-0' style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '4vw' : '2.3vw'}` }} >{title}</h2>
                        <RxCross1 style={{ color: '#000', fontSize: `${isMobile ? '6.5vw' : '2vw'}` }} type="button" className="btnclose" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body p-0">
                        <img loading='lazy' className='imgModalProjects' src={img} alt="imgModal" />
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <div className='w-50 m-0'>
                            <h3 style={{ fontFamily: 'var(--mont)', fontSize: `${isMobile ? '3.5vw' : '1.5vw'}` }} className='m-0 fw-bold text-center'>Tecnologies:</h3>
                        </div>
                        <div style={{ padding: '.5vw', gap: '1vw' }} className='w-50 m-0 d-flex justify-content-center'>
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
            <ProjectItem urlPage={'https://multiserviciostyr.netlify.app/'} urlGit={'https://github.com/lorenzoJimenez301/MultiserviciosTyR.git'} id={'multi'} img={multityr} />
            <ProjectItem urlPage={'https://calculator-react-lorenzo.netlify.app'} urlGit={'https://github.com/lorenzoJimenez301/Calculadora-React.git'} id={'calcu'} img={imgCalcu} />
            <ProjectItem urlPage={'https://contador-clicks-lorenzo.netlify.app/'} urlGit={'https://github.com/lorenzoJimenez301/Contador-Clicks.git'} id={'cont'} img={imgContador} />
            <ProjectItem urlPage={'https://gestor-tareas-lorenzo.netlify.app/'} urlGit={'https://github.com/lorenzoJimenez301/Gestor-Tareas.git'} id={'todo'} img={imgToDo} />
            <ProjectItem urlPage={'https://fake-store-api-lorenzo-jimenez.netlify.app/'} urlGit={'https://github.com/lorenzoJimenez301/Fake-Store-Api.git'} id={'fakeStore'} img={fakeStore} />
        </>
    );
}

const ProjectsGrapich = () => {
    return (
        <div className='grapichContainer'>
            <h4 style={{ color: 'var(--negro)' }}>Coming Soon! :3</h4>
        </div>
    );
}

export const Projects = () => {

    const [isGraphicDesign, setIsGraphicDesign] = useState(false);
    const handleChange = (isGraphic) => {
        setIsGraphicDesign(isGraphic);
    }
    const { backgroundImage } = useContext(ThemeContext);
    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }} className='projectsSection'>
            <div className='projectsTitleContainer'>
                <h2 className='projectTitle p-0'>Projects</h2>
                <h3 className='projectSubTitle p-0 m-0'>Personal & Professional</h3>
            </div>
            <div className='projectsContainer h-100'>
                <div className='projectsCate d-flex flex-row justify-content-start align-items-center'>
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
                    <ModalProject id={'fakeStore'} img={fakeStore} desc={''} title={'Fake-Store-API'} tecno1={Html} tecno2={apiLogo} tecno3={Bootstrap} tecno4={react} />
                </div>
            </div>
        </section>
    );
}