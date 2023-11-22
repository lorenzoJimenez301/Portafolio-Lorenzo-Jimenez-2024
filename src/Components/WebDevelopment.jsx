import React, { useEffect, useState, useRef } from 'react';
import '../Styles/WebDevelopment.css';
import HtmlLogo from '../Images/LogoTecno/HTML LOGO.png';
import CSSLogo from '../Images/LogoTecno/CSS LOGO.png';
import jsLogo from '../Images/LogoTecno/JS LOGO.png';
import ReactLogo from '../Images/LogoTecno/REACT LOGO.png';
import BootsLogo from '../Images/LogoTecno/BOOTSTRAP LOGO.png';
import NodeJs from '../Images/LogoTecno/NODE LOGO.png';
import Php from '../Images/LogoTecno/PHP LOGO.png';
import c from '../Images/LogoTecno/C LOGO.png';
import { CSSTransition } from 'react-transition-group';

export const ProgressBar = ({ logo, color, porcent }) => {

    return (
        <li className='d-flex align-items-center justify-content-center'>
            <img loading='lazy' className='progressBarImg' src={logo} alt="icon" />
            <div className="progress mx-auto" role="progressbar" aria-label="Basic example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                <div style={{ backgroundColor: color, width: `${porcent}%`, transition: 'width 2s ease' }} className={`progress-bar`}></div>
            </div>
            <p className='ms-3 m-0 p-0 pBar' style={{
                fontFamily: 'var(--mont)',
                fontWeight: 'bold',
                color: 'var(--negro)',
            }}>{porcent}%</p>
        </li>
    );
}

export const FrontEnd = () => {
    const [ancho1, setAncho1] = useState(0);
    const [ancho2, setAncho2] = useState(0);
    const [ancho3, setAncho3] = useState(0);
    const [ancho4, setAncho4] = useState(0);
    const [ancho5, setAncho5] = useState(0);

    useEffect(() => {
        setAncho1(90);
        setAncho2(90);
        setAncho3(70);
        setAncho4(80);
        setAncho5(80);
    }, []);

    return (
        <>
            <ProgressBar logo={HtmlLogo} color={'#e44d26'} porcent={ancho1} />
            <ProgressBar logo={CSSLogo} color={'#0277BD'} porcent={ancho2} />
            <ProgressBar logo={jsLogo} color={'#ffd600'} porcent={ancho3} />
            <ProgressBar logo={ReactLogo} color={'#00d7fe'} porcent={ancho4} />
            <ProgressBar logo={BootsLogo} color={'#8512fa'} porcent={ancho5} />
        </>
    );
}
export const BackEnd = () => {
    const [ancho1, setAncho1] = useState(0);
    const [ancho2, setAncho2] = useState(0);
    const [ancho3, setAncho3] = useState(0);

    useEffect(() => {
        setAncho1(90);
        setAncho2(90);
        setAncho3(70);
    }, []);

    return (
        <>
            <ProgressBar logo={NodeJs} color={'#83b33a'} porcent={ancho1} />
            <ProgressBar logo={Php} color={'#777bb3'} porcent={ancho2} />
            <ProgressBar logo={c} color={'#516b77'} porcent={ancho3} />
        </>

    );
}


export const WebDevelopment = ({ section }) => {
    const transitionRef = useRef(null);
    return (
        <ul ref={transitionRef} className='listSkills p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
            <CSSTransition
                in={section}
                timeout={200}
                nodeRef={transitionRef}
            >
                {section ? <FrontEnd /> : <BackEnd />}
            </CSSTransition>
        </ul>
    );
}