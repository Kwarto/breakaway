import React, { useState } from 'react';
import {
  MdEmail,
  MdLogin,
  MdShoppingBasket,
} from 'react-icons/md';
// import { BiSupport, BiMapPin } from 'react-icons/bi';
import {
  NavBarWrapper,
  TopBar,
  TopList,
  MidBar,
  Logo,
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
            <span className='mail'>
              <MdEmail />
              <p>support@breakaway.com</p>
            </span>
          </TopList>
          <TopList>
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
