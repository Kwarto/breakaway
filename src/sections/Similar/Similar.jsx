import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

// styles
import 'swiper/css'
import 'swiper/css/navigation'
import { productData } from '../../utils/data'

const Similar = () => {
    return (
        <SimilarWrapper>
            <h1>Similar Products</h1>
            <SimilarPro>
                <Swiper modules={[Navigation]} navigation={true} slidesPerView='auto' spaceBetween={30} className='swiper'>
                    {
                        productData && productData.map(sim => (
                            <SwiperSlide className='slide' key={sim.id}>
                                <div className="imgWrap">
                                    <img src={sim.imgSrc} alt="" />
                                </div>
                                <h3>{sim.proName}</h3>
                                <p>{ sim.desc.substring(0, 49) }</p>
                                <span>$ { sim.price }</span>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </SimilarPro>
        </SimilarWrapper>
    )
}

const SimilarWrapper = styled.section`
  padding: 80px 0;
  min-height: 90vh;

  h1{
    padding-left: 2%;
    font-size: 30px;
    font-weight: bold;
    color: var(--text-variant);
  }

  @media screen and (max-width: 884px) {
    min-height: 75vh;
  }
`

const SimilarPro = styled.article`
 background: var(--main-variant);
 padding: 50px 0;
 width: calc(100% - 20px);
 margin: 0 auto;

 .swiper{
    width: 100%;
    height: 100%;
    .swiper-button-next, .swiper-button-prev{
      color: var(--btn-color);
    }
    .slide{
       background: var(--text-color);
       width: 15rem;
       height: 320px;
       box-shadow: 0 0 10px var(--main-variant);
       border-radius: .5rem;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       gap: 1rem;
       cursor: pointer;
    }
    .imgWrap{
      width: 50%;
      height: 100px;
      img{
         width: 100%;
      }
    }

    h3{
        padding: 15px 0;
    }

    p{
        text-align: center;
        max-width: 200px;
        font-size: 15px;
    }

    span{
        font-size: 18px;
        font-weight: bold;
        color: var(--main-dark);
    }
 }
`

export default Similar