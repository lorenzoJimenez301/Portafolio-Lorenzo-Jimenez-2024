import React, { useEffect, useState, useRef } from 'react';
import '../Styles/WebDevelopment.css';
import HtmlLogo from '../Images/LogoTecno/Html_Logo.svg';
import CSSLogo from '../Images/LogoTecno/Css_Logo.svg';
import jsLogo from '../Images/LogoTecno/Js_Logo.svg';
import ReactLogo from '../Images/LogoTecno/React_Logo.svg';
import BootsLogo from '../Images/LogoTecno/Bootstrap_Logo.svg';
import NodeJs from '../Images/LogoTecno/Node_Logo.svg';
import Php from '../Images/LogoTecno/Php_Logo.svg';
import c from '../Images/LogoTecno/C_Logo.svg';
import nextLogo from '../Images/LogoTecno/Next.js_Logo.svg';
import twLogo from '../Images/LogoTecno/Tailwind_CSS_Logo.svg';
import { CSSTransition } from 'react-transition-group';

export const ProgressBar = ({ logo, color, porcent, clase }) => {

    return (
        <li className='d-flex align-items-center justify-content-center'>
            <img className={`${clase}`} src={logo} alt="icon" />
            <div style={{ height: '1vw' }} className="progress mx-auto" role="progressbar" aria-label="Basic example" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                <div style={{ backgroundColor: color, width: `${porcent}%`, transition: 'width 2s ease', height: '1vw' }} className={`progress-bar`}></div>
            </div>
            <p className='p-0 pBar' style={{
                fontFamily: 'var(--mont)',
                fontWeight: 'bold',
                color: 'var(--negro)',
                margin: '0 0 0 1vw',
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
        setAncho4(70);
        setAncho5(80);
    }, []);

    return (
        <>
            <ProgressBar clase={'iconTecno'} logo={HtmlLogo} color={'#e44d26'} porcent={ancho1} />
            <ProgressBar clase={'iconTecno'} logo={CSSLogo} color={'#0277BD'} porcent={ancho2} />
            <ProgressBar clase={'iconTecno'} logo={jsLogo} color={'#ffd600'} porcent={ancho3} />
            <ProgressBar clase={'iconTecno'} logo={ReactLogo} color={'#00d7fe'} porcent={ancho4} />
            <ProgressBar clase={'iconTecno'} logo={BootsLogo} color={'#8512fa'} porcent={ancho5} />
            <ProgressBar clase={'tail'} logo={twLogo} color={'#35bef8'} porcent={ancho5} />
        </>
    );
}
export const BackEnd = () => {
    const [ancho1, setAncho1] = useState(0);
    const [ancho2, setAncho2] = useState(0);
    const [ancho3, setAncho3] = useState(0);
    const [ancho4, setAncho4] = useState(0);

    useEffect(() => {
        setAncho1(70);
        setAncho2(45);
        setAncho3(45);
        setAncho4(70);
    }, []);

    return (
        <>
            <ProgressBar clase={'iconTecno'} logo={NodeJs} color={'#83b33a'} porcent={ancho1} />
            <ProgressBar clase={'iconTecno'} logo={Php} color={'#777bb3'} porcent={ancho2} />
            <ProgressBar clase={'iconTecno'} logo={c} color={'#516b77'} porcent={ancho3} />
            <ProgressBar clase={'tail'} logo={nextLogo} color={'#000'} porcent={ancho4} />
        </>

    );
}


export const WebDevelopment = ({ section }) => {
    const transitionRef = useRef(null);

    return (
        <ul ref={transitionRef} className='listSkills p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
            <CSSTransition nodeRef={transitionRef} in={section} timeout={500} classNames={"my-node"}>
                {section ? <FrontEnd /> : <BackEnd />}
            </CSSTransition>
        </ul>
    );
}