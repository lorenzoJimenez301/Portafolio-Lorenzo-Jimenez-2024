import React from 'react';
import { motion } from 'framer-motion';
import { GiSamuraiHelmet } from 'react-icons/gi';
import { useImage } from 'react-image';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../Styles/Index.css';

export const Index = React.memo(({ imagenURL1, imagenURL2, mostrarPrimeraImagen }) => {
  const { src: srcImagenMostrada } = useImage({
    srcList: mostrarPrimeraImagen ? imagenURL1 : imagenURL2,
  });

  const words = ['Developer', 'Designer'];
  const isMobile = useMediaQuery({ maxWidth: 992 });

  return (
    <section className="indexContainer d-flex align-items-end justify-content-evenly">
      <div className="heroContainer d-flex flex-column flex-lg-row align-items-center justify-content-beetween w-100">
        <div className="titleContainer d-flex flex-column align-items-center align-items-lg-start justify-content-center justify-content-lg-start mb-lg-0">
          <h1 className="title m-0">
            Hi!, I'm{' '}
            <Link className="text-decoration-none Lorenzo" to={isMobile ? '' : '/AboutMe'} id="Lorenzo">
              Lorenzo
            </Link>
          </h1>
          <h2 className="subTitle m-0 p-0">
            Programmer &{' '}
            <Typed
              className="letterType"
              strings={words}
              typeSpeed={100}
              backSpeed={100}
              backDelay={3000}
              loop
              smartBackspace
              shuffle={false}
              showCursor
              cursorChar="|"
            />
          </h2>
          <Link className="text-decoration-none" to="/AboutMe">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btnPrincipal text-decoration-none m-0 d-lg-none"
            >
              Let's Go!
              <GiSamuraiHelmet className="SH" />
            </motion.p>
          </Link>
        </div>
        <div className="samuraiContainer d-flex align-items-end justify-content-center justify-content-lg-end">
          <img className="samurai" src={srcImagenMostrada} alt="samurai" />
        </div>
      </div>
    </section>
  );
});
