import React, { useState } from 'react';
import {
  MdEmail,
  MdLogin,
  MdPhoneInTalk,
  MdShoppingBasket,
} from 'react-icons/md';
import { BiSupport, BiMapPin } from 'react-icons/bi';
import {
  NavBarWrapper,
  TopBar,
  TopList,
  MidBar,
  Logo,
  CallUs,
  CartWrap,
} from './NavBarElement';
import { Search } from '../../pages';
const NavBar = () => {
  const [fixNav, setFixNav] = useState(false);

  function addFix() {
    if (window.scrollY >= 130) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  }
  window.addEventListener('scroll', addFix);
  return (
    <>
      <NavBarWrapper>
        <TopBar>
          <TopList>
            <span>
              <MdEmail />
              <p>support@breakaway.com</p>
            </span>
            <span>
              <BiSupport />
              <p>Help & Contact</p>
            </span>
          </TopList>
          <TopList>
            <span>
              <BiMapPin />
              <p>Store Locator</p>
            </span>
            <span>
              <MdLogin />
              <p>Sign In</p>
            </span>
          </TopList>
        </TopBar>
        <MidBar className={fixNav ? 'nav-fixed' : ''}>
          <Logo>
            <h1>
              <span>Break</span>away
            </h1>
          </Logo>
          <Search />
          <CallUs>
            <MdPhoneInTalk className="call-ico" />
            <span>
              <p>Call Us Now</p>
              <p>0234 680 000</p>
            </span>
          </CallUs>
          <CartWrap>
            <MdShoppingBasket className="cart" />
            <small>0</small>
            <span>
              <p>My Cart</p>
              <p>
                <span>$</span> 00.00
              </p>
            </span>
          </CartWrap>
        </MidBar>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
