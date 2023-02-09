import React, { useState } from 'react'
import { MdGrid4X4, MdNotifications, MdSearch } from 'react-icons/md'
import styled from 'styled-components'
import avaImg from '../../img/ava.png'
import { Notification, UserDrop } from '../../components'
const ShopNav = () => {
    const [notify, setNotify] = useState(false);
    const [userDrop, setUserDrop] = useState(false);
    return (
        <>
            <ShopNavWrapper>
                <SearchCon>
                    <MdSearch className='ico' />
                    <input type="text" name="" id="" placeholder='Search Product' />
                </SearchCon>
                <ActionWrap>
                    <AWrap>
                        <MdGrid4X4 className='a-ico' />
                    </AWrap>
                    <AWrap onClick={() => setNotify(!notify)}>
                        <MdNotifications className='a-ico' />
                        <span>0</span>
                    </AWrap>
                    <AWrap onClick={() => setUserDrop(!userDrop)}>
                        <img src={avaImg} alt="" />
                    </AWrap>
                </ActionWrap>
            </ShopNavWrapper>
            {notify && <Notification />}
            {userDrop && <UserDrop />}
        </>
    )
}

const ShopNavWrapper = styled.div`
 position: fixed;
 top: 0;
 left: 260px;
 width: calc(100% - 260px);
 height: 55px;
 background-color: #ffffff;
 background-clip: padding-box;
 border-right: 1px solid #e2e3e4;
 transition: all .2s;
 z-index: 16;
 box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 10px;
`

const SearchCon = styled.div`
 width: 30%;
 display: flex;
 align-items: center;
 justify-content: baseline;
 gap: 5px;

 .ico{
    width: 10%;
    background: var(--text-color);
    font-size: 20px;
 }

 input{
    padding: 8px;
    width: 90%;
    background: var(--shop-box-color);
    border-left: 1px solid;
    font-size: 14px;
    font-family: 'Oswald', sans-serif;
 }
`

const ActionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

const AWrap = styled.div`
 width: 20%;
 cursor: pointer;
 .a-ico{
    font-size: 25px;
 }
 img{
    width: 30px;
    height: 30px;
    border-radius: 50px;
 }

 :nth-child(2){
    position: relative;
    span{
      font-size: 10px;
      position: absolute;
      top: 0;
      right: 0;
      background: red;
      width: 16px;
      height: 16px;
      border-radius: 50px;
      color: var(--text-color);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 300;
    }
 }
`

export default ShopNav