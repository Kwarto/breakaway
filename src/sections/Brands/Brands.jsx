import React from 'react'
import styled from 'styled-components'

const Brands = () => {
  return (
      <BrandsWrapper>
       <h1>Popular Brands</h1>   
      </BrandsWrapper>
  )
}

const BrandsWrapper = styled.section`
 padding: 40px 0;
 min-height: 50vh;
 h1{
  color: var(--text-variant);
  font-size: 30px;
  padding-left: 20px;
  font-weight: bold;
 }
`

export default Brands