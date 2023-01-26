import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { productData } from '../../utils/data'
// import { useParams } from 'react-router-dom'

const ProductCard = () => {
  // const { id } = useParams();
  return (
    <>
      {
        productData && productData.map(pro => (
          <Link to={`/detail/${pro.id}`} key={pro.id}>
            <ProductCardWrapper>
              <ProImg>
                <img src={pro.imgSrc} alt={pro.proName} loading='lazy' />
              </ProImg>
              <ProAbt>
                <h3>{pro.proName}</h3>
                <p>{pro.desc.substring(0, 49)}...</p>
                <span>
                  $ {pro.price}.00
                </span>
              </ProAbt>
            </ProductCardWrapper>
          </Link>
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
  gap: 1.2rem;
  width: 12.8rem;
  min-height: 18.5rem;

  @media screen and (max-width: 884px) {
    width: 16.5rem;
    min-height: 20rem ;
  }

  @media screen and (max-width: 430px) {
    width: 11rem;
  }
`

const ProImg = styled.div`
 width: 60%;
 height: 100px;
 img{
  width: 100%;
 }
`

const ProAbt = styled.div`
  text-align: center;
  h3{
    color: var(--text-b-color);
  }
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
    color: var(--main-dark);
    font-weight: 600;
  }

  @media screen and (max-width: 884px) {
    padding-top: 20px;
  }
`

export default ProductCard