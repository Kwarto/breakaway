import React from 'react'
import styled from 'styled-components'
import { whyData } from '../../utils/data'

const WhyShop = () => {
  return (
    <WhyShopWrapper>
      <WhyContent className='grid-cols-4'>
        {whyData && whyData.map(i => (
          <WhyItem key={i.id}>
            {i.Icon}
            <span>
              <h3>{i.title}</h3>
              <p>{i.desc}</p>
            </span>
          </WhyItem>
        ))}
      </WhyContent>
    </WhyShopWrapper>
  )
}

const WhyShopWrapper = styled.div`
 padding: 60px 5px;
 background: var(--main-variant);

`

const WhyContent = styled.div`
 height: 180px;

 @media screen and (max-width: 884px){
  height: 400px;
 }

 @media screen and (max-width: 430px){
  height: 600px;
 }
`
const WhyItem = styled.div`
  background: var(--text-color);
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: 2s ease-in;

  .w-ico{
    font-size: 3.2rem;
    background: var(--main-color);
    border-radius: 50px;
    color: var(--text-color);
    padding: 10px;
  }

  span{
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3{
        color: var(--text-variant);
        font-size: 1.3rem;
    }

    p{
        font-size: 1.1rem;
    }
  }

  &:hover{
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.103);
  }
`

export default WhyShop