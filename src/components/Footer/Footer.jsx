import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdFacebook } from 'react-icons/md'
import styled from 'styled-components'
import NewsLetter from '../NewsLetter/NewsLetter'

const Footer = () => {
  return (
    <FooterWrapper>
      <NewsLetter />
      <FooterContentWrapper className='grid-cols-4'>
        <FooterItem>
          <h1>Breakaway</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Nisi corrupti modi, asperiores ipsum incidunt rem cumque molestiae impedit,
            exercitationem doloribus inventore tempora ut sed illum.
          </p>
          <span>
            <h3>Follow Us On</h3>
            <MdFacebook className='f-ico' />
            <FaInstagram className='f-ico' />
            <FaTwitter className='f-ico' />
            <FaLinkedin className='f-ico' />
          </span>
        </FooterItem>
        <FooterItem>
          <h1>Company</h1>
          <div>
            <li>About Us</li>
            <li>Breakaway</li>
            <li>Users Reviews</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </div>
        </FooterItem>
        <FooterItem>
          <h1>Support</h1>
          <div>
            <li>Help Center</li>
            <li>How Buy & Sell With Us</li>
            <li>Returns & Refunds Terms and Conditions</li>
            <li>Report a Product</li>
            <li>Delivery timelines and fees</li>
          </div>
        </FooterItem>
        <FooterItem>
          <h1>Make Money</h1>
          <div>
            <li>Help Center</li>
            <li>How Buy & Sell With Us</li>
            <li>Returns & Refunds Terms and Conditions</li>
            <li>Report a Product</li>
            <li>Delivery timelines and fees</li>
          </div>
        </FooterItem>
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
 padding: 40px 0;
 background: var(--text-variant);
 min-height: 50vh;

 @media screen and (max-width: 884px) {
  min-height: 35vh;
 }

 @media screen and (max-width: 430px) {
  min-height: 80vh;
 }
`

const FooterContentWrapper = styled.div`
 transform: translateY(-4rem);
 padding: 0 10px;
`

const FooterItem = styled.div`
  width: 20rem;
  height: 43vh;
  background: #f1f1f1;
  border-radius: .2rem;
  color: var(--text-b-color);
  padding: 8px;

  h1{
    color: var(--text-variant);
    font-size: 30px;
  }

  span{
      margin: 12px 0;
      h3{
        font-size: 20px;
      }
      .f-ico{
        font-size: 25px;
        margin: 10px 2px;
      }
  }

  div{
    li{
      padding: 8px 0;
      font-size: 18px;
      cursor: pointer;
      transition: all 2s ease-in-out;

      &:hover{
         color: var(--text-variant);
      }
    }
  }

  @media screen and (max-width: 884px) {
    width: 26rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    p{
      font-size: 20px;
    }

    div{
    li{
      padding: 9px 0;
      font-size: 20px;
    }
  }
  }

  @media screen and (max-width: 430px) {
    width: 25rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    p{
      font-size: 18px;
      line-height: 1.7;
    }
    span{
      margin: 12px 0;
      .f-ico{
        font-size: 30px;
      }
    }
    div{
      li{
        padding: 8px 0;
        font-size: 18px;
        color: var(--text-b-color);
      }
    }
  }
`

export default Footer