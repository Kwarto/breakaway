import React from 'react'
import { Hero } from '../../sections'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrap>
      <Hero />
    </HomeWrap>
  )
}

const HomeWrap = styled.section`
 width: var(--container-lg);
 margin: 0 auto;
 padding: 10px 0;
`

export default Home