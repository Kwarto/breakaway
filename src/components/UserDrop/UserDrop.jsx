import React from 'react'
import { MdLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import avaImg from '../../img/ava.png'
const UserDrop = () => {
  const navigate = useNavigate();
  return (
    <UserDropWrapper>
     <div className='img-wrap'>
        <img src={avaImg} alt="profile" onClick={() => navigate('/shop/profile')}/>
        <span onClick={() => navigate('/shop/profile')}>
          <h3>Wind wood</h3>
          <p>Expert in delivery</p>
        </span>
      </div>
      <div className="list">
        <p onClick={() => navigate('/shop/profile')}>Profile</p>
        <p onClick={() => navigate('/shop')}>Dashboard</p>
        <p onClick={() => navigate('/shop/#orders')}>Orders</p>
        <p>Earnings</p>
      </div>
      <div className="out" onClick={() => { navigate('/shop/sign-in'); }}>
        <MdLogout />
        <p>Logout</p>
      </div>
    </UserDropWrapper>
  )
}

const UserDropWrapper = styled.article`
 background: var(--text-color);
 border-radius: .3rem;
 box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
 height: 300px;
 width: 20%;
 position: fixed;
 top: 2.5rem;
 right: 5px;
 z-index: 100;
 padding: 10px;

 .img-wrap{
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-bottom: 5px;
   border-bottom: 1px solid var(--text-variant);
   cursor: pointer;
   img{
    width: 25%;
    border-radius: 50px;
   }
 }

 .list{
   p{
    padding: 10px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    &:hover{
      background: var(--shop-box-color);
    }
   }
 }

 .out{
  cursor: pointer;
   border-top: 1px solid var(--text-variant);
   background: var(--text-variant);
   color: var(--text-color);
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   padding: 8px 10px;
   p{
    color: var(--text-color);
   }
 }
`



export default UserDrop