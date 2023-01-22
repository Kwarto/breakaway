import React from 'react'
import styled from 'styled-components'
import { topCat } from '../../utils/data'
const TopCategories = () => {
  return (
    <TopCatWrapper>
      <h1>Top Categories</h1>
        <CatItems className="grid-cols-4">            {
              topCat && topCat.map(top => (
                <CatList key={top.id}>
                  <img src={top.imgSrc} alt={top.cat} />
                  <h4>{top.cat}</h4>
                </CatList>
              ))
            }
      </CatItems>
    </TopCatWrapper>
  )
}

const TopCatWrapper = styled.div`
 padding: 70px 0;
 h1{
  text-align: center;
  font-size: 30px;
  color: var(--text-variant);
 }
`

const CatItems = styled.div`
 margin-top: 5%;
`

const CatList = styled.div`
 box-shadow: 0 0 4px var(--box-shadow);
 border-radius: .2rem;
 cursor: pointer;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 5px;

 img{
  width: 12rem;
 }

 h4{
  padding: 10px;
  font-size: 20px;
 }

 &:hover{
  box-shadow: none;
  transition: all 2s ease-in-out;
 }
`

export default TopCategories