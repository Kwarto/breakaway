import React from 'react'
import styled from 'styled-components'
import { ShopBars } from '../../components'
import proImg from '../../img/beats.jpg'

const ShopProDetail = () => {
  return (
      <>
          <ShopBars />
          <ShopProDetailWrapper className='shop-content'>
            <ProWrapper>
              <div className="imgWrap">
                <img src={proImg} alt="" />
              </div>
              <div className="shop-info">
                <p>Sold By</p>
                <h3>Wind Wood</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, accusamus facere. Officiis et nemo architecto. Ullam, dolorem? In, architecto repellat.</p>
              </div>
            </ProWrapper>
            <ProDeWrapper>
             <div className="pro-meta">
              <h2>Lorem ipsum dolor sit</h2>
              <p>$ 150</p>
              <h2>Description :</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum fugiat sit distinctio nihil aperiam cupiditate totam eos debitis doloribus unde quis nulla quae officia porro sapiente hic incidunt laudantium id, aut possimus? Hic obcaecati reiciendis in dignissimos commodi, ad necessitatibus voluptatum laborum cupiditate placeat, optio ducimus quo. Earum ea illum, quo quam blanditiis accusamus laboriosam dignissimos excepturi suscipit hic fugiat!</p>
             </div>
            </ProDeWrapper>
          </ShopProDetailWrapper>
      </>
  )
}

const ShopProDetailWrapper = styled.section`
 padding: 10px;
 display: grid;
 grid-template-columns: 40% 58%;
 gap: 2%;
 overflow-y: scroll;
`

const ProWrapper = styled.article`
 padding: 10px;
 background: var(--text-color);
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;

 .imgWrap{
    border: 1px solid var(--main-variant);
    width: 98%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
 }

 .shop-info{
  padding: 40px 0;
  height: 40%;

  h3{
    padding: 8px 0;
    opacity: 0.78;
  }

  p{
    font-size: 16px;
    font-weight: 300;
    max-width: 700;
  }
 }
`

const ProDeWrapper = styled.article`
  background: var(--text-color);
  padding: 10px;

  .pro-meta{
    h2{
      text-transform: capitalize;
      font-size: 24px;
      color: var(--text-variant);
    }
  }
`
export default ShopProDetail