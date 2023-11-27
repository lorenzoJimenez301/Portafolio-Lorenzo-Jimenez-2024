import { Link } from 'react-router-dom';
import Logo from '../Images/1.png';
import LogoBlanco from '../Images/2.png';
import '../Styles/Navbar.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import samuraiBlanco from '../Images/Samurai_White.png';
import samuraiNegro from '../Images/Samurai_Black.png';
import { useImage } from 'react-image';


export const Navbar = ({ onImagenCambiada }) => {

    document.addEventListener('DOMContentLoaded', () => {
        var img1 = new Image();
        img1.src = Logo;
    })  
    document.addEventListener('DOMContentLoaded', () => {
        var img1 = new Image();
        img1.src = samuraiBlanco;
    })
    document.addEventListener('DOMContentLoaded', () => {
        var img2 = new Image();
        img2.src = samuraiNegro;
    })
    document.addEventListener('DOMContentLoaded', () => {
        var img2 = new Image();
        img2.src = LogoBlanco;
    })

    const { src: srcImagen1 } = useImage({
        srcList: samuraiNegro,
    });

    const { src: srcImagen2 } = useImage({
        srcList: samuraiBlanco,
    });
    const [foto, setFoto] = useState(Logo);
    const [isOn, setIsOn] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 992 });
    const root = document.documentElement;
    const grisPrincipal = '#1D1D1D';
    const pielPrincipal = '#F6DEBF';
    const toggleSwitch = () => {
        setIsOn(!isOn);

        if (!isOn) {
            setFoto(LogoBlanco);
            root.style.setProperty('--piel', grisPrincipal);
            root.style.setProperty('--pielEspecial', grisPrincipal);
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
    const [activo, setActivo] = useState(true);
    const active = () => {
        setActivo(!activo);
    }

    return (
        <nav className={`navBarPrincipal m-0 p-0`}>
            <div style={{ backgroundColor: 'var(--piel)', top: '0px' }} className='btnNavContainer'>
                <a href='/'><img src={foto} className='logoPrincipal me-0 ' alt='logo' /></a>
                {activo ? <RxHamburgerMenu onClick={active} id='hambur' className='d-lg-none' /> : <RxCross1 onClick={active} id='hambur' className='d-lg-none' />}
            </div>
            <div className={`${!activo ? 'collapsar' : ''} navBar2`}>
                <ul className={`${!activo ? 'collapsar' : ''} navList`}>
                    <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} onClick={isMobile ? active : null} to={'/'} >Menu</Link></li>
                    <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} onClick={isMobile ? active : null} to={'/AboutMe'} >About Me</Link></li>
                    <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} onClick={isMobile ? active : null} to={'/Certifications'} >Certifications</Link></li>
                    <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} onClick={isMobile ? active : null} to={'/Projects'} >Projects</Link></li>
                    <li className='navItemContainer'><Link className='text-decoration-none navItem' data-ison={isOn} onClick={isMobile ? active : null} to={'/Contact'} >Contact</Link></li>
                    <li className='navItemContainer d-none d-lg-flex align-items-center' >
                        <div className='switch' data-ison={isOn} onClick={toggleSwitch}>
                            <motion.div className='handle' layout transition={spring} />
                        </div>
                        {isOn ? <MdSunny className='navIcono text-white' /> : <FaMoon className='navIcono' />}
                    </li>
                </ul>
            </div>
        </nav>
    );
}      