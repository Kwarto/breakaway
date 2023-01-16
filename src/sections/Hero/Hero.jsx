import React from 'react'
import { HeroWrapper, HeroContent, HeroSlide, HeroRight, ImgWrap } from './HeroElement'
import { Category } from '../../sections'
import banner1 from '../../img/huge.png';
import bloc1 from '../../img/bloc1.jpg';
import bloc2 from '../../img/bloc2.jpg';
const Hero = () => {
  return (
    <HeroWrapper>
      <Category />
      <HeroContent>
        <HeroSlide>
          <img src={banner1} alt="" />
        </HeroSlide>
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
  )
}

export default Hero