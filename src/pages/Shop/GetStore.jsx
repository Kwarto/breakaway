import React from 'react'
import styled from 'styled-components'
import { ShopBars } from '../../components'
import { ShopContent } from '../../sections'

const GetStore = () => {
  return (
    <ShopWrapper>
      <ShopBars />
      <ShopContent />
    </ShopWrapper>
  )
}

const ShopWrapper = styled.section`
 background: red;
 min-height: 100vh;
`

export default GetStore