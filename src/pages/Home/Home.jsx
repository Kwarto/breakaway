import React from 'react'
import { Brands, Deals, Hero, TopCat } from '../../sections'
import {Products} from '../../pages'
import styled from 'styled-components'
import { NavBar, Footer } from '../../components'

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeWrap>
      <Hero />
      <TopCat />
      <Products />
      <Deals />
      <Brands />
      </HomeWrap>
      <Footer />
    </>
  )
}

const HomeWrap = styled.section`
 width: var(--container-lg);
 margin: 0 auto;
 padding: 10px 0;
`

export default Home