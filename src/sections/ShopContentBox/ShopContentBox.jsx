import React from 'react'
import styled from 'styled-components'

const ShopContentBox = () => {
  return (
    <ShopContentBoxWrapper>
    </ShopContentBoxWrapper>
  )
}


const ShopContentBoxWrapper = styled.section`
 background: var(--shop-box-color);
 height: calc(100vh - 55px);
 width: calc(100% - 260px);
 position: absolute;
 top: 55px;
 left: 260px;
 right: 0;
 overflow-y: scroll;
`

export default ShopContentBox