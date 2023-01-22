import React from 'react'
import { Hero, TopCat } from '../../sections'
import {Products} from '../../pages'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrap>
      <Hero />
      <TopCat />
      <Products />
    </HomeWrap>
  )
}

const HomeWrap = styled.section`
 width: var(--container-lg);
 margin: 0 auto;
 padding: 10px 0;
`

export default Home