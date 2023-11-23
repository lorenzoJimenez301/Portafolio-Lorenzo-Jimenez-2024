import { Link } from 'react-router-dom';
import Logo from '../Images/1.png';
import LogoBlanco from '../Images/2.png';
import '../Styles/Navbar.css';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CSSTransition } from 'react-transition-group';
import samuraiBlanco from '../Images/Samurai_White.png';
import samuraiNegro from '../Images/Samurai_Black.png';
import { useImage } from 'react-image';



export const Navbar = ({ onImagenCambiada }) => {

    const tuRef = useRef(null);

    const { src: srcImagen1 } = useImage({
        srcList: samuraiNegro,
    });

    const { src: srcImagen2 } = useImage({
        srcList: samuraiBlanco,
    });


    const [foto, setFoto] = useState(Logo);

    const [isOn, setIsOn] = useState(false);

    const [activo, setActivo] = useState(false);

    const active = () => setActivo(!activo);

    const isMobile = useMediaQuery({ maxWidth: 992 });

    const root = document.documentElement;

    const grisPrincipal = '#1D1D1D';

    const pielPrincipal = '#F6DEBF';

    const toggleSwitch = () => {
        setIsOn(!isOn);

        if (!isOn) {
            setFoto(LogoBlanco);
            root.style.setProperty('--piel', grisPrincipal);
            root.style.setProperty('--negro', '#ffffff');
            root.style.setProperty('--grisPrincipal', pielPrincipal);
            onImagenCambiada(srcImagen1);
        } else {
            setFoto(Logo)
            root.style.setProperty('--piel', pielPrincipal);
            root.style.setProperty('--negro', '#000000');
            root.style.setProperty('--grisPrincipal', grisPrincipal);
            onImagenCambiada(srcImagen2);
        }

    }

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30
    };

    return (
        <nav className={`navBar position-${isMobile ? 'absolute' : 'relative'} navbar navbar-expand-lg m-0 p-0`}>
            <div style={{ backgroundColor: 'transparent' }} className='navBar2 container-fluid d-flex flex-row-reverse flex-lg-row justify-content-between align-items-center px-0'>
                <a href='/'><img src={foto} className='logoPrincipal me-0 ' alt='logo' /></a>
                <CSSTransition
                    in={activo}
                    timeout={100}
                    nodeRef={tuRef}
                >
                    <div ref={tuRef}>
                        {!activo ? <RxHamburgerMenu onClick={active} id='hambur' className='d-lg-none ms-2' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation' /> : <RxCross1 onClick={active} id='hambur' className='d-lg-none ms-2' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation' />}
                    </div>
                </CSSTransition>
                <div className='collapse navbar-collapse d-lg-flex justify-content-center justify-content-lg-end align-items-center' id='navbarNavDropdown'>
                    <ul className='navbar-nav navList d-flex align-items-center justify-content-evenly'>
                        <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} to={'/'}>Menu</Link></li>
                        <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} to={'/AboutMe'}>About Me</Link></li>
                        <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} to={'/Certifications'}>Certifications</Link></li>
                        <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} to={'/Projects'}>Projects</Link></li>
                        <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} to={'/Contact'}>Contact</Link></li>
                        <li className='navItemContainer d-none d-lg-flex align-items-center' >
                            <div className='switch' data-ison={isOn} onClick={toggleSwitch}>
                                <motion.div className='handle' layout transition={spring} />
                            </div>
                            {isOn ? <MdSunny className='navIcono text-white' /> : <FaMoon className='navIcono' />}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}      