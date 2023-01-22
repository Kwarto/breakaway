import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../../sections'

const Products = () => {
  return (
    <ProductWrapper>
      <h1>Available Products</h1>
      <ProductList />
    </ProductWrapper>
  )
}

const ProductWrapper = styled.section`
  padding: 80px 5px;
  background: var(--main-variant);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 30px;
    margin-bottom: 20px;
    color: var(--text-variant);
  }
`

export default Products