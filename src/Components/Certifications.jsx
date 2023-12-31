import React from 'react';
import '../Styles/Certifications.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import cert1 from '../Images/Certifications/Cert1.png';
import cert2 from '../Images/Certifications/Cert2.png';
import cert3 from '../Images/Certifications/Cert3.png';
import cert4 from '../Images/Certifications/Cert4.png';
import cert5 from '../Images/Certifications/Cert5.png';
import cert6 from '../Images/Certifications/Cert6.png';
import cert7 from '../Images/Certifications/Cert7.png';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';


const MySlider = () => {
    const isMobile = useMediaQuery({maxWidth: 992});
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            lazy={true}
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
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert1} />
                <h3 className='titleCerti'>Responsive Web Design</h3>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert2} />
                <h3 className='titleCerti'>Front End Developer</h3>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert3} />
                <h3 className='titleCerti'>Soft Skills</h3>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert4} />
                <h3 className='titleCerti'>High school</h3>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}`}} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert6} />
                <h3 className='titleCerti'>Web development technician</h3>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert5} />
                <h3 className='titleCerti'>Fullstack Developer in "Fumigadora Coroin"</h3>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: 'var(--piel)', height: `${isMobile ? '60vw' : '27vw'}` }} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img' className='imgCarrusel' src={cert7} />
                <h3 className='titleCerti'>The complete development 2024 bootcamp</h3>
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