import React from 'react'
import { HeroWrapper, HeroContent, HeroSlide, HeroRight, ImgWrap } from './HeroElement'
import { Category } from '../../sections'
import banner1 from '../../img/huge.png';
import bloc1 from '../../img/bloc1.jpg';
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
            <div>
              <img src={bloc1} alt="" />
            </div>
          </ImgWrap>
          <ImgWrap>
            <div>
            <img src={bloc1} alt="" />
           </div>
          </ImgWrap>
        </HeroRight>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero