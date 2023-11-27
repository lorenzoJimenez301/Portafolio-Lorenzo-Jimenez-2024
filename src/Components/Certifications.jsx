import React from 'react';
import '../Styles/Certifications.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import cert1 from '../Images/Certifications/Cert1.png';
import cert2 from '../Images/Certifications/Cert2.png';
import cert3 from '../Images/Certifications/Cert3.png';
import cert4 from '../Images/Certifications/Cert4.png';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';


const MySlider = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            modules={[EffectFade, Navigation]}
            loop={true}
            navigation={{
                nextEl: '.custom-next-button',
                prevEl: '.custom-prev-button',
            }}
            className='carrusel m-0 p-0'
        >
            <SwiperSlide style={{backgroundColor: 'var(--piel)'}} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img  alt='img'loading='lazy' className='imgCarrusel' src={cert1} />
                <h3 className='titleCerti'>Responsive Web Design</h3>
                <button className='btnMore' data-bs-toggle='modal' data-bs-target='#ResponsiveWeb'>More</button>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: 'var(--piel)'}} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img'  loading='lazy' className='imgCarrusel' src={cert2} />
                <h3 className='titleCerti'>Front End Developer</h3>
                <button className='btnMore' data-bs-toggle='modal' data-bs-target='#frontEndLibraries'>More</button>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: 'var(--piel)'}} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img'  loading='lazy' className='imgCarrusel' src={cert3} />
                <h3 className='titleCerti'>Soft Skills</h3>
                <button className='btnMore' data-bs-toggle='modal' data-bs-target='#softSkills'>More</button>
            </SwiperSlide>
            <SwiperSlide style={{backgroundColor: 'var(--piel)'}} className='swiper-slide text-center d-flex flex-column align-items-center'>
                <img alt='img'  loading='lazy' className='imgCarrusel' src={cert4} />
                <h3 className='titleCerti'>High school</h3>
                <button className='btnMore' data-bs-toggle='modal' data-bs-target='#bachi'>More</button>
            </SwiperSlide>
        </Swiper>
    );
};

const Modal = ({ id, title, img, provider, desc }) => {

    const isMobile = useMediaQuery({maxWidth: 992});

    return (
        <div className='modal fade' id={`${id}`} data-bs-backdrop='static' data-bs-keyboard='false' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered p-0 m-0'>
                <div style={{ fontFamily: 'var(--mont)' }} className='modal-content modelCerti m-auto'>
                    <div className='modal-header'>
                        <h2 className='p-0 m-0' style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '5vw' : '2vw'}` }} >{title}</h2>
                        <RxCross1 style={{ color: '#000', fontSize: `${isMobile ? '6.5vw' : '1.7vw'}` }} type="button" className="btnclose" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className='d-flex flex-column flex-lg-row align-items-center modal-body'>
                        <div className='w-50 d-flex justify-content-center align-items-center'>
                            <img loading='lazy' className='imgModal' src={img} alt="imgModal" />
                        </div>
                        <div style={{width: `${isMobile ? '100' : '50'}`}} className='textModalContainer text-center d-flex flex-column justify-content-center align-items-center'>
                            <div style={{ gap: '.8vw' , padding: `${isMobile ? '3vw' : ''}`}} className='d-flex flex-row align-items-center justify-content-center'>
                                <h3 style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '5vw' : '1.2vw'}` }} className='p-0 m-0'>Provider:</h3>
                                <p style={{ fontFamily: 'var(--mont)', fontSize: `${isMobile ? '4vw' : '1vw'}` }} className='p-0 pt-0 m-0 textCerti'>{provider}</p>
                            </div>
                            <div style={{ marginTop: '2vw', padding: '5vw' }} className='d-flex flex-column align-items-center'>
                                <h3 style={{ fontFamily: 'var(--mont)', fontWeight: 'bold', fontSize: `${isMobile ? '5vw' : '1.2vw'}` }} className='p-0 m-0'>Description:</h3>
                                <p style={{ fontFamily: 'var(--mont)', fontSize: `${isMobile ? '3.5vw' : '1vw'}`, marginTop: '1vw' }} className='p-0'>{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Certifications = () => {
    const { backgroundImage } = useContext(ThemeContext);
    return (
        <section style={{backgroundImage: `url(${backgroundImage})`}} className='certificationsContainer d-flex flex-column justify-content-center align-items-center flex-lg-row'>
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
                <Modal provider={'freeCodeCamp'} desc={'The freeCodeCamp Responsive Web Design certification is an educational program focused on teaching how to design and develop websites that adapt and are functional on different devices and screen sizes.'} img={cert1} title={'Responsive Web Design'} id={'ResponsiveWeb'} />
                <Modal provider={'freeCodeCamp'} desc={'This certification validates skill in front-end development, focusing on the use of essential libraries and frameworks in building dynamic and attractive user interfaces. The curriculum includes mastery of popular libraries such as React.js and Redux, as well as advanced DOM manipulation with jQuery. Holders of this certification are equipped with the skills necessary to create interactive and optimized user experiences for various devices.'} img={cert2} title={'Front End Developer'} id={'frontEndLibraries'} />
                <Modal provider={'COVAO'} desc={'This section highlights interpersonal and emotional skills that complement and strengthen my technical competencies. It includes skills such as effective communication, teamwork, problem solving, adaptability and leadership, essential for successful collaboration and balanced performance in professional environments.'} img={cert3} title={'Soft Skills'} id={'softSkills'} />
                <Modal provider={'LIMERE'} desc={'This title certifies the successful completion of the secondary educational level. It provides a solid academic foundation, covering areas such as mathematics, science, humanities and arts. Graduates acquire critical thinking skills, effective communication, and preparation for higher education or entry into the workforce.'} img={cert4} title={'High school'} id={'bachi'} />
            </article>
        </section>
    );
}