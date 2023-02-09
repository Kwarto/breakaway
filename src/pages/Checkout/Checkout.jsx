import React from 'react'
import styled from 'styled-components'
import { Check } from '../../components'

const Checkout = () => {
  return (
    <CheckoutWrapper>
     <Check />
      <CheckWrapper>
         <CompleteWrapper>
          <div className='head'>
            <h1>Order Summary</h1>
          </div>
         </CompleteWrapper>
      </CheckWrapper>
    </CheckoutWrapper>
  )
}

const CheckoutWrapper = styled.section`
  min-height: 100vh;
  background: var(--main-dark);
  display: grid;
  grid-template-columns: 58% 40%;
  gap: 2%;
`

const CheckWrapper = styled.article`
 padding: 10px;
 background-color: var(--text-color);
 display: flex;
 align-items: center;
 justify-content: center;
`

const CompleteWrapper = styled.div`
 width: 90%;
 height: 85vh;
 background: var(--main-variant);
 border-radius: .5rem;
 padding: 10px 0;

 .head{
  background: var(--text-color);
  transform: translateY(-5rem);
  h1{
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  color: var(--text-variant);
 }
 }
`
export default Checkout