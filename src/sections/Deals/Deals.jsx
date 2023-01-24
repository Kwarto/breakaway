import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

// styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { productData } from '../../utils/data';
const Deals = () => {
    return (
        <DealsWrapper>
            <h1>Deals Of The Day</h1>
            <DealContent>
                <Swiper modules={[Autoplay, Pagination]} slidesPerView='auto' spaceBetween={20} autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }} pagination={{ clickable: true }}
                    className='swiper'
                >
                    {productData && productData.map(deal => (
                        <SwiperSlide key={deal.id} className='slide'>
                            <div className='imgWrap'>
                                <img src={deal.imgSrc} alt={deal.id} />
                            </div>
                            <div className="deal-abt">
                                <h3>{deal.proName}</h3>
                                <p>{deal.desc.substring(0, 49)}</p>
                                <span>$ {deal.price}.00</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </DealContent>
        </DealsWrapper>
    )
}

const DealsWrapper = styled.div`
 padding: 40px 0;
 background: var(--main-dark);
 margin-top: 10px;

 h1{
    padding: 0 20px;
    font-size: 30px;
    color: var(--text-color);
 }
`

const DealContent = styled.div`
  padding: 15px;
 .swiper{
    width: 100%;
    .slide{
        background: var(--text-color);
        border-radius: .3rem;
        box-shadow: 0 1rem .5rem var(--main-variant);
        width: 230px;
        height: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        justify-content: center;

        .imgWrap{
            width: 60%;
            height: 100px;
            img{
                width: 100%;
            }
        }

        .deal-abt{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h3{
                padding-bottom: 8px;
            }
            p{
                text-align: center;
            }
            span{
                color: var(--main-dark);
                font-weight: 900;
                padding: 15px 0;
            }
        }
    }
    .swiper-pagination-bullet{
      background: var(--btn-color);
      width: 13px;
      height: 13px;
      transform: translateY(5px);
   }
 }
`

export default Deals