import React from 'react'
import { FaFacebook, FaGlobe, FaLinkedinIn, FaMapMarker, FaTwitter } from 'react-icons/fa'
import { MdEdit, MdMap } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ShopBars } from '../../components'
import avaImg from '../../img/ava.png'
const ShopProfile = () => {
  const navigate = useNavigate();
  return (
    <>
    <ShopBars />
    <ShopProfileWrapper className='shop-content'>
      <LeftContent>
        <ShopInfo>
          <ShopBg>
            <ShopImgWrap>
              <img src={avaImg} alt="" />
            </ShopImgWrap>
          </ShopBg>
          <ShopMeta>
            <div className='meta-info'>
              <h2>Wind Wood</h2>
              <p>Expert in delivery</p>
              <span>New York, United State</span>
            </div>
            <div className='btn' onClick={() => navigate(`/shop/edit-profile`)}>
              <MdEdit />
              Edit Profile
            </div>
          </ShopMeta>
        </ShopInfo>
        <AboutShop>
          <h1>About Shop</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. <br />
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
          </p>
        </AboutShop>
      </LeftContent>
      <RightContent>
        <LocWrapper>
          <h2>Location</h2>
          <p><MdMap /> AK-224 9097, Lemon Street, Ghana</p>
          <p><FaMapMarker />Kumasi, Kwadaso</p>
        </LocWrapper>
        <ConnectWrapper>
          <h2>Connection</h2>
          <p><FaGlobe /> www.breakaway.com/wind-wood</p>
          <p><FaFacebook /> Facebook</p>
          <p><FaTwitter /> Twitter</p>
          <p><FaLinkedinIn /> LinkedIn</p>
        </ConnectWrapper>
        <ProdCatWrapper>
          <h2>Category</h2>
          <p>Health & Beauty</p>
          <p>Fashion</p>
          <p>Sporting Product</p>
        </ProdCatWrapper>
      </RightContent>
    </ShopProfileWrapper>
    </>
  )
}

const ShopProfileWrapper = styled.section`
 height: 90%;
 display: grid;
 grid-template-columns: 68% 30%;
 gap: 2%;
`
const LeftContent = styled.article`
 padding: 5px;
`

const ShopInfo = styled.div`
 background: #fff;
 height: 60%;
 box-shadow: 0 0 10px var(--box-shadow);
`

const ShopBg = styled.div`
  min-height: 20vh;
  background: var(--sidebar-variant);
  border-radius: 5px;
`

const ShopImgWrap = styled.div`
 width: 18%;
 background: #fff;
 border-radius: 100%;
 aspect-ratio: 1/1;
 display: flex;
 align-items: center;
 justify-content: center;
 transform: translate(2rem ,3.5rem);
 box-shadow: 0 0.5rem 1rem var(--box-shadow);
 cursor: pointer;
 img{
  width: 90%;
  height: 90%;
  border-radius: 100%;
 }
`

const ShopMeta = styled.div`
 position: relative;
 top: 5rem;
 left: 10px;
 display: flex;
 align-items: center;
 justify-content: space-between;

 .meta-info{
  h2{
    font-size: 25px;
    opacity: 0.9;
  }
  p{
    padding: 5px 0;
  }
  span{
    opacity: 0.8;
  }
 }

 .btn{
  background: var(--sidebar-variant);
  border-radius: .2rem;
  box-shadow: 0 0.3rem 1rem var(--box-shadow);
  color: var(--text-color);
  cursor: pointer;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;
  width: 25%;
  transition: all 400ms ease-in-out;
  &:active{
    box-shadow: none;
  }
 }
`

const AboutShop = styled.div`
 background: #fff;
 height: 50%;
 box-shadow: 0 0 10px var(--box-shadow);
 border-radius: 0 0 5px 5px;
 margin-top: 3%;
 padding: 8px;

 h1{
  font-size: 26px;
  color: var(--text-variant);
 }

 p{
  font-size: 15px;
  opacity: 0.9;
  font-weight: 400;
  line-height: 1.8;
  padding: 5px 0;
 }
`
const RightContent = styled.article`
 background: #fff;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: flex-start;
 gap: 1.5rem;
 padding: 10px 3%;
`

const LocWrapper = styled.div`
  background: var(--text-color);
  width: 100%;
  box-shadow: 0 .5rem 1rem var(--box-shadow);
  border-radius: .3rem;
  padding: 8px;

  h2{
    padding: 8px 0;
  }

  p{
    padding: 5px 0;
    color: var(--text-variant);
  }
;
`

const ConnectWrapper = styled(LocWrapper)`
`

const ProdCatWrapper = styled(LocWrapper)`
  
`


export default ShopProfile