import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
const Detail = () => {  
  const { id } = useParams();
  console.log(id);
  return (
    <DetailWrapper>
       <DetailItem>
       </DetailItem>
       <DetailItemDesc>

       </DetailItemDesc>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.section`
 min-height: 100vh;
 background: var(--text-color);
 display: grid;
 grid-template-columns: 40% 58%;
 gap: 2%;
`


const DetailItem = styled.article`
  background: var(--main-color);
  padding: 20px;
`

const DetailItemDesc = styled.article`
 background: var(--text-b-color);
  padding: 20px;
`

export default Detail