import React from 'react'
import styled from 'styled-components'

const ShopSidePanel = () => {
  return (
    <ShopSideWrapper>ShopSidePanel</ShopSideWrapper>
  )
}

const ShopSideWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 260px;
    height: 100%;
    background-color: var(--sidebar-variant);
    background-clip: padding-box;
    border-right: 1px solid #000;
    transition: all .2s;
    z-index: 16;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
`

export default ShopSidePanel