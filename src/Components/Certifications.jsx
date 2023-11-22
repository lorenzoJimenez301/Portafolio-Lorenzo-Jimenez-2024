import React from 'react';
import '../Styles/Certifications.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import cert1 from '../Images/Certifications/Cert1.png';
import cert2 from '../Images/Certifications/Cert2.png';
import cert3 from '../Images/Certifications/Cert3.png';
import cert4 from '../Images/Certifications/Cert4.png';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            className="mySwiper text-center"
        >
            <SwiperSlide>
                <img className='imgCarrusel' src={cert1} />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src={cert2} />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src={cert3} />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src={cert4} />
            </SwiperSlide>
        </Swiper>
    );
};

export const Certifications = () => {
    return (
        <section className='certificationsContainer d-flex flex-column flex-lg-row'>
            <article className='certi1 d-flex justify-content-center align-items-center'>
                <div className='cert1TitleContainer'>
                    <h2 className='certiTitle'>Certifications</h2>
                    <h3 className='certiSubTitle'>and Degrees</h3>
                </div>
            </article>
            <article className='certi2 d-flex justify-content-center align-items-center'>
                <MySlider />
            </article>
        </section>
    );
}