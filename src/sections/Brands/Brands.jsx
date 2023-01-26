import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper';

// styles

import 'swiper/css'
import 'swiper/css/autoplay'
import { brandData} from '../../utils/data';

const Brands = () => {
  return (
      <BrandsWrapper>
       <h1>Popular Brands</h1>  
       <BrandsContainer>
        <Swiper modules={[Autoplay]} slidesPerView='auto' spaceBetween={20}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
           className='swiper'
        >
          {
            brandData && brandData.map(brand => (
              <SwiperSlide className='slide' key={brand.id}>
               <BrandLogo>
                <img src={brand.imgSrc} alt="" />
               </BrandLogo>
               <div className="brand-abt">
                  <h2>{ brand.proName}</h2>
               </div>
              </SwiperSlide>
            ))
          }

          </Swiper>
       </BrandsContainer> 
      </BrandsWrapper>
  )
}

const BrandsWrapper = styled.section`
 padding: 40px 0;
 min-height: 85vh;
 h1{
  color: var(--text-variant);
  font-size: 30px;
  padding-left: 20px;
  font-weight: bold;
  padding-bottom: 20px;
 }

 @media screen and (max-width: 884px) {
  min-height: 50vh;
 }
 @media screen and (max-width: 430px) {
  min-height: 65vh;
 }
`

export const BrandsContainer = styled.div`
 padding: 15px;

 .swiper{
    .slide{
        background: var(--text-color);
        border-radius: .3rem;
        box-shadow: 0 0 5px var(--text-variant);
        cursor: pointer;
        width: 230px;
        height: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        justify-content: center;

        .brand-abt{
          h2{
            color: var(--main-dark);
          }
        }
    }
 }
`

const BrandLogo = styled.div`
  width: 80%;

  img{
    width: 100%;
    height: 160px;
  }
`

export default Brands