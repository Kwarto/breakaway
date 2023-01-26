import React from 'react'
import styled from 'styled-components'
import { ProductCard } from '../../components'

const ProductList = () => {
  return (
    <ProductListWrapper className='grid-cols-6'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductListWrapper>
  )
}

const ProductListWrapper = styled.article`
  padding: 30px 0;
`

export default ProductList