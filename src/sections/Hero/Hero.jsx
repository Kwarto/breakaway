import React from 'react'
import { HeroWrapper, HeroContent, HeroSlide, HeroRight, ImgWrap } from './HeroElement'
import { Category, WhyShop } from '../../sections'
import bloc1 from '../../img/bloc1.jpg';
import bloc2 from '../../img/bloc2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { heroSlideData } from '../../utils/data';
const Hero = () => {
  return (
    <>
      <HeroWrapper>
      <Category />
      <HeroContent>
          <Swiper modules={[Autoplay, Navigation, Pagination]}
            navigation={true}
            pagination={{clickable: true}}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }} className='swiper'>
          {
              heroSlideData && heroSlideData.map(hs => (
                <SwiperSlide key={hs.id} className='slide'>
                 <HeroSlide>
                  <img src={hs.imgSrc} alt={hs.name} width={200} />
                 </HeroSlide>
               </SwiperSlide>
            ))
          }
        </Swiper>
        <HeroRight>
          <ImgWrap>
            <div className='img'>
              <img src={bloc1} alt="" />
            </div>
            <div className='txt'>
              <h2>Sell on breakaway</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim numquam eveniet ullam vero.</p>
            </div>
          </ImgWrap>
          <ImgWrap>
          <div className='img'>
              <img src={bloc2} alt="" />
            </div>
            <div className='txt'>
              <h2>Shop with confidence</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim numquam eveniet ullam vero.</p>
            </div>
          </ImgWrap>
        </HeroRight>
      </HeroContent> 
      </HeroWrapper>
      <WhyShop />
    </>
  )
}

export default Hero