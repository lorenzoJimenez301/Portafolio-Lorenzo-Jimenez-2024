import React from 'react';
import '../Styles/Certifications.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper text-center bg-danger"
        >
            <SwiperSlide>
                <img className='imgCarrusel' src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='imgCarrusel' src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
        </Swiper>
    );
};

export const Certifications = () => {
    return (
        <section className='certificationsContainer d-flex flex-column flex-lg-row'>
            <article className='certi1 bg-danger d-flex justify-content-center align-items-center'>
                <div className='cert1TitleContainer'>
                    <h2 className='certiTitle'>Certifications</h2>
                    <h3 className='certiSubTitle'>and Degrees</h3>
                </div>
            </article>
            <article className='certi2 bg-warning d-flex justify-content-center align-items-center'>
                <MySlider />
                <button className="swiper-button-prev">
                    left
                </button>
                <button className="swiper-button-next">
                    right
                </button>
            </article>
        </section>
    );
}