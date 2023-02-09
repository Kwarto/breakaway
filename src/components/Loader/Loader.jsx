import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoaderWrapper>Loader</LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
 min-height: 100vh;
 background: var(--main-color);
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 z-index: 1000;
`
export default Loader