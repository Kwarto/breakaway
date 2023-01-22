import React from 'react'
import styled from 'styled-components'
import { productData } from '../../utils/data'

const ProductCard = () => {
  return (
    <>
      {
        productData && productData.map(pro => (
          <ProductCardWrapper key={pro.id}>
            <ProImg>
              <img src={pro.imgSrc} alt={pro.proName} />
            </ProImg>
            <ProAbt>
              <h3>{ pro.proName}</h3>
              <p>{ pro.desc.substring(0,49)}...</p>
              <span>
                $ {pro.price}.00
              </span>
            </ProAbt>
          </ProductCardWrapper>
        ))
      }
    </>
  )
}

const ProductCardWrapper = styled.div`
  background: #fff;
  border-radius: .2rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.103);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12.8rem;
  min-height: 20rem;

  @media screen and (max-width: 884px) {
    width: 16.5rem;
  }

  @media screen and (max-width: 430px) {
    width: 11rem;
  }
`

const ProImg = styled.div`
 width: 60%;
 img{
  width: 100%;
 }
`

const ProAbt = styled.div`
  text-align: center;
  h3, p{
    padding-bottom: 10px;
  }

  p{
    color: var(--text-variant);
  }

  span{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: var(--main-color);
    font-weight: 600;
  }
`

export default ProductCard