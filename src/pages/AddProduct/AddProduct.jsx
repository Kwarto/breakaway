import React from 'react'
import styled from 'styled-components'
import { ShopBars } from '../../components'
import { AddProForm } from '../../sections'

const AddProduct = () => {
  return (
      <>
          <ShopBars />
          <AddProductWrapper className='shop-content'>
            <AddProForm />  
          </AddProductWrapper>
      </>
  )
}

const AddProductWrapper = styled.section`
  padding: 20px 0;
`

export default AddProduct