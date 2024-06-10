import React from 'react';
import '../Styles/Certifications.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import cert1 from '../Images/Certifications/Bootcamp full.webp';
import cert2 from '../Images/Certifications/Covao.webp';
import cert3 from '../Images/Certifications/Front End.webp';
import cert4 from '../Images/Certifications/Fumuigadora.webp';
import cert5 from '../Images/Certifications/UX.webp';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';


const MySlider = () => {
    const isMobile = useMediaQuery({ maxWidth: 992 });
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            modules={[EffectFade, Navigation, Autoplay]}
            loop={true}
            navigation={{
                nextEl: '.custom-next-button',
                prevEl: '.custom-prev-button',
            }}
            autoplay={{
                delay: 2000,
            }}
            className='carrusel m-0 p-0'
        >
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : 'auto'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img loading='lazy' alt='img' className='imgCarrusel' src={cert1} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : 'auto'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img loading='lazy' alt='img' className='imgCarrusel' src={cert2} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : 'auto'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img loading='lazy' alt='img' className='imgCarrusel' src={cert3} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : 'auto'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img loading='lazy' alt='img' className='imgCarrusel' src={cert4} />
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : 'auto'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img loading='lazy' alt='img' className='imgCarrusel' src={cert5} />
            </SwiperSlide>
        </Swiper>
    );
};
export const Certifications = () => {
    const { backgroundImage } = useContext(ThemeContext);
    return (
        <section style={{ backgroundImage: `url(${backgroundImage})` }} className='certificationsContainer d-flex flex-column justify-content-center align-items-center flex-lg-row'>
            <article className='certi1 d-flex justify-content-center align-items-center'>
                <div className='cert1TitleContainer'>
                    <h2 className='certiTitle m-0 p-0'>Certifications</h2>
                    <h3 className='certiSubTitle m-0 p-0'>& Degrees</h3>
                </div>
            </article>
            <article className='certi2 d-flex justify-content-center align-items-center'>
                <BsChevronLeft className="custom-prev-button btnNavigation " />
                <MySlider />
                <BsChevronRight className="custom-next-button btnNavigation " />
            </article>
        </section>
    );
}