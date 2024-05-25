import React from 'react';
import { motion } from 'framer-motion';
import { GiSamuraiHelmet } from 'react-icons/gi';
import { useImage } from 'react-image';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../Styles/Index.css';
import Typewriter from 'typewriter-effect';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export const Index = React.memo(({ imagenURL1, imagenURL2, mostrarPrimeraImagen }) => {
  const { src: srcImagenMostrada } = useImage({
    srcList: mostrarPrimeraImagen ? imagenURL1 : imagenURL2,
  });

  const isMobile = useMediaQuery({ maxWidth: 992 });
  const words = ['Developer', 'Graphic Designer'];

  const [transitionRef, setTransitionRef] = useState(null);

  return (
    <section className="indexContainer d-flex align-items-end justify-content-evenly">
      <div className="heroContainer">
        <div className="titleContainer">
          <h1 className="title d-flex flex-column d-lg-inline">
            Hi!, I'm{' '}
            <Link className="text-decoration-none Lorenzo" to={isMobile ? '/AboutMe' : ''} id="Lorenzo">
              Lorenzo
            </Link>
          </h1>
          <h2 className="subTitle m-0 p-0 d-flex gap-2 gap-lg-3 text-center">
            <span style={{ color: 'var(--grisPrincipal)' }}>Programmer &{' '}</span>
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
              }}
              onInit={typewriter => {
                typewriter
                  .typeString('Developer Web')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Graphic Designer')
                  .start();
              }}
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
