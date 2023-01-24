import React from 'react'
import styled from 'styled-components'
import { ProductList } from '../../sections'

const Products = () => {
  return (
    <>
      <h1 style={{fontSize: '30px', fontWeight: 'bold', color: 'var(--text-variant)', paddingLeft: '25px'}}>Available Products</h1>
      <ProductWrapper>
        <ProductList />
      </ProductWrapper>
    </>
  )
}

const ProductWrapper = styled.section`
  padding: 20px 5px;
  background: var(--main-variant);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Products