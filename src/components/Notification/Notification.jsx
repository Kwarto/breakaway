import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import styled from 'styled-components'

const Notification = () => {
  return (
    <NotifyWrapper>
      <div className='head'>
        <h3>Notifications</h3>
        <p>Mark all as read</p>
      </div>
      <MsgBox>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
        <MsgWrap>
          <MdShoppingBasket />
          <span>
          <h4>New Orders</h4>
          <p>You have received new orders</p>
          </span>
          <small>2m ago</small>
        </MsgWrap>
      </MsgBox>
    </NotifyWrapper>
  )
}

const NotifyWrapper = styled.article`
position: relative;
 background: var(--text-color);
 border-radius: .3rem;
 box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
 height: 70vh;
 width: 25%;
 position: fixed;
 top: 2.5rem;
 right: 4rem;
 z-index: 100;
 overflow-y: scroll;

 .head{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid red;
  position: fixed;
  z-index: 100;
  width: 25%;
  background: #fff;
  box-shadow: 0 .2rem 1rem rgb(0 0 0 / 15%);
  h3{
    font-weight: 400;
  }
  p{
    font-size: 15px;
    color: var(--text-variant);
    cursor: pointer;
  }
 }
`

const MsgBox = styled.div`
 background: var(--shop-box-color);
 height: 90%;
 position: absolute;
 top: 3rem;
 left: 0;
 right: 0;
 padding: 0 10px;
`

const MsgWrap = styled.div`
 background: var(--text-color);
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: space-evenly;
 gap: 8px;
 padding: 8px;
 margin: 6px 0;
 transition: all 300ms ease-in-out;

 &:hover{
  background: var(--shop-box-color);
 }

 span{
   h4{
    font-weight: 500;
    font-size: 16px;
   }
   p{
    color: var(--text-variant);
    font-size: 15px;
   }
 }
`



export default Notification