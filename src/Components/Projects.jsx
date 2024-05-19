import React, { useEffect } from 'react';
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import '../Styles/Projects.css';
import { RxCross1 } from "react-icons/rx";
import { BsGithub, BsGlobe2, BsInfoCircle } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import { ColorRing } from 'react-loader-spinner';
import { FaBehanceSquare } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Data from '../Datos_Dev.json';
import graphicData from '../Datos_Gra.json';



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
                <div className={`p-2 projectInfo ${hovered ? 'isHover' : ''} ${isloading ? 'd-none' : ''}`}>
                    <a className='linkProject d-flex justify-content-center align-items-center' rel='noreferrer' target='_blank' href={urlGit}><BsGithub className='projectOpc' /></a>
                    <a className='linkProject d-flex justify-content-center align-items-center' rel='noreferrer' target='_blank' href={urlPage}><BsGlobe2 className='projectOpc' /></a>
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
                    <img className={`projectImg`} src={`${img}`} alt="project" />
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
                            <img loading='eager' className='imgTecnoModal' src={tecno1} alt="tecno" />
                            <img loading='eager' className='imgTecnoModal' src={tecno2} alt="tecno" />
                            <img loading='eager' className='imgTecnoModal' src={tecno3} alt="tecno" />
                            <img loading='eager' className='imgTecnoModal' src={tecno4} alt="tecno" />
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
            {
                Data.map(data =>
                    <ProjectItem
                        key={data.id}
                        id={data.key}
                        img={data.img}
                        urlPage={data.urlPage}
                        urlGit={data.urlGit}
                    />
                )
            }
        </>
    );
}

const GraphicDesignItem = ({ url }) => {
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = url;
        imageLoader.onload = () => {
            setIsLoading(false);
        };
    }, [url]);
    return (
        <div className={`${isloading ? 'graphicItems' : ''}`}>
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
                <img className='gdImg' src={url} alt="project" />
            )}
        </div>
    );
}

const ProjectsGrapich = () => {
    return (
        <div className='grapichContainer'>
            {graphicData.map( datos =>
                <GraphicDesignItem url={datos.url} />
            )}
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
                <h3 className={`projectSubTitle p-0 `}>Personal & Professional</h3>
                <div className='projectsCate d-flex flex-row justify-content-start align-items-center'>
                    <button className={`btnProjects ${!isGraphicDesign ? 'selected' : ''}`} onClick={() => handleChange(false)}>Web Development</button>
                    <button className={`btnProjects ${isGraphicDesign ? 'selected' : ''}`} onClick={() => handleChange(true)}>Grapich Design</button>
                </div>
            </div>
            <div className='projectsContainerGrid'>
                {isGraphicDesign ? <ProjectsGrapich /> : <ProjectsWebDevelopment />}
                {
                    Data.map(data =>
                        <ModalProject
                            key={data.id}
                            id={data.key}
                            img={data.img}
                            desc={data.modal.desc}
                            title={data.modal.title}
                            tecno1={data.modal.tecno1}
                            tecno2={data.modal.tecno2}
                            tecno3={data.modal.tecno3}
                            tecno4={data.modal.tecno4}
                        />
                    )
                }
            </div>
            <div className='w-100 d-flex justify-content-center d-none d-lg-flex' style={{ padding: '5vw' }}>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`btnBehance text-decoration-none m-0 justify-content-center align-items-center ${isGraphicDesign ? 'd-flex' : 'd-none'}`}
                    href='https://www.behance.net/lorenzojimenez4'
                    target='_blank'
                >
                    More
                    <FaBehanceSquare style={{ margin: '0 0 0 .5vw', padding: '0' }} />
                </motion.a>
            </div>
        </section>
    );
}