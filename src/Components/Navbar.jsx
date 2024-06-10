import { Link } from 'react-router-dom';
import Logo from '../Images/Logo_Dark.svg';
import LogoBlanco from '../Images/Logo_White.svg';
import '../Styles/Navbar.css';
import { motion } from 'framer-motion';
import { useState, useContext, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { MdSunny } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import samuraiBlanco from '../Images/Samurai_White.png';
import samuraiNegro from '../Images/Samurai_Black.png';
import { useImage } from 'react-image';
import { ThemeContext } from './ThemeContext';

export const Navbar = ({ onImagenCambiada }) => {

    const { changeTheme } = useContext(ThemeContext);

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
            root.style.setProperty('--pielDesvanecido', '#3f3f3fa9');
            root.style.setProperty('--pielEspecial', grisPrincipal);
            root.style.setProperty('--negro', '#ffffff');
            root.style.setProperty('--negroOpa', '#ffffffde');
            root.style.setProperty('--blancoLink', '#000');
            root.style.setProperty('--grisPrincipal', '#fff');
            onImagenCambiada(srcImagen1);// Cambio de fondo a gris
            changeTheme('light');
        } else {
            setFoto(Logo)
            root.style.setProperty('--piel', pielPrincipal);
            root.style.setProperty('--pielDesvanecido', null);
            root.style.setProperty('--negro', '#000000');
            root.style.setProperty('--negroOpa', '#000000de');
            root.style.setProperty('--blancoLink', '#fff');
            root.style.setProperty('--grisPrincipal', '');
            onImagenCambiada(srcImagen2); // Volver al fondo de piel original
            changeTheme('dark');
        }
    }

    const spring = {
        type: 'spring',
        stiffness: 500,
        damping: 30
    };

    const [activo, setActivo] = useState(true);

    const active = () => {
        setActivo(!activo);

    }

    useEffect(()=>{
        if(activo){
            document.body.style.overflowY = 'auto';
        }else{
            document.body.style.overflowY = 'hidden';

        }
    },[activo]);

    return (
        <nav style={{ position: 'absolute' }} className={`${!activo ? 'collapsar' : ''} navBarPrincipal m-0 p-0`}>
            <div className='btnNavContainer'>
                <a href='/'><img loading='eager' src={foto} className='logoPrincipal me-0 ' alt='logo' /></a>
                {activo ? <RxHamburgerMenu onClick={active} id='hambur' className='d-lg-none' /> : <RxCross1 onClick={active} id='hambur' className='d-lg-none' />}
            </div>
            <div className={`${!activo ? 'collapsar' : ''} navBar2`}>
                <ul className={`navList`}>
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
