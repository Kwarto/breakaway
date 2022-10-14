import React, { useState } from 'react';
import {
  MdAdd,
  MdCircle,
  MdEditNote,
  MdHome,
  MdInfo,
  MdInventory,
  MdList,
  MdLock,
  MdLogin,
  MdMenu,
  MdMore,
  MdNewReleases,
  MdPages,
  MdPrivacyTip,
  MdQuestionAnswer,
  MdRestore,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdSupport,
  MdUpdate
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dashLogo from '../../img/dash-logo.png';
const ShopSidePanel = () => {
  const navigate = useNavigate();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const [isSub, setIsSub] = useState(true);
  const [isDrop, setIsDrop] = useState(true);
  const [isAuth, setIsAuth] = useState(true);
  const [isExtra, setIsExtra] = useState(true);
  return (
    <ShopSideWrapper className={toggleSideBar ? 'slideBack' : ''}>
      <div className="header">
        <div className="logoWrap">
          <img src={dashLogo} alt={'dashboard-logo'} />
        </div>
        <div className="act">
          <h3>
            BREAK<span>AWAY</span>
          </h3>
          <MdMenu
            className="m-ico"
            onClick={() => {
              setToggleSideBar(!toggleSideBar);
            }}
          />
        </div>
      </div>
      <MenuListWrapper>
        <UList>
          <LWrap
            onClick={() => {
              setIsSub(!isSub);
            }}>
            <MdHome className="l-ico" />
            <p>Dashboard</p>
          </LWrap>
          <SubList className={isSub ? 'dropDown' : ''}>
            <SLWrap
              onClick={() => {
                navigate('/shop');
              }}>
              <MdCircle className="sl-ico" />
              <p>Default</p>
            </SLWrap>
            <SLWrap>
              <MdCircle className="sl-ico" />
              <p>Alternate</p>
            </SLWrap>
          </SubList>
        </UList>
        <UList>
          <LWrap
            onClick={() => {
              setIsDrop(!isDrop);
            }}>
            <MdShoppingBag className="l-ico" />
            <p>eCommerce</p>
          </LWrap>
          <SubList className={isDrop ? 'showPro' : ''}>
            <SLWrap
              onClick={() => {
                navigate('/shop/add-product');
              }}>
              <MdAdd className="sl-ico" />
              <p>Add Product</p>
            </SLWrap>
            <SLWrap
              onClick={() => {
                navigate(`/shop/add-product`);
              }}>
              <MdUpdate className="sl-ico" />
              <p>Update Product</p>
            </SLWrap>
            <SLWrap
              onClick={() => {
                navigate('/shop/products');
              }}>
              <MdList className="sl-ico" />
              <p>All Products</p>
            </SLWrap>
            <SLWrap
              onClick={() => {
                navigate('/shop/view-product/1');
              }}>
              <MdMore className="sl-ico" />
              <p>Products Detail</p>
            </SLWrap>
          </SubList>
        </UList>
        <div className="divider">
          <span>Pages</span>
        </div>
        <UList>
          <LWrap
            onClick={() => {
              navigate('/shop/profile');
            }}>
            <MdSupervisedUserCircle className="l-ico" />
            <p>Shop Profile</p>
          </LWrap>
        </UList>
        <UList
          onClick={() => {
            navigate('/shop/edit-profile');
          }}>
          <LWrap>
            <MdEditNote className="l-ico" />
            <p>Edit Shop Profile</p>
          </LWrap>
        </UList>
        <UList>
          <LWrap
            onClick={() => {
              setIsAuth(!isAuth);
            }}>
            <MdLock className="l-ico" />
            <p>Authentication</p>
          </LWrap>
          <SubList className={isAuth ? 'showAuth' : ''}>
            <SLWrap
              onClick={() => {
                navigate('/shop/sign-in');
              }}>
              <MdLogin className="sl-ico" />
              <p>Sign In</p>
            </SLWrap>
            <SLWrap
              onClick={() => {
                navigate('/shop/sign-up');
              }}>
              <MdLogin className="sl-ico" />
              <p>Sign Up</p>
            </SLWrap>
            <SLWrap>
              <MdRestore className="sl-ico" />
              <p>Reset Password</p>
            </SLWrap>
          </SubList>
        </UList>
        <div className="divider">
          <span>Extra Pages</span>
        </div>
        <UList>
          <LWrap
            onClick={() => {
              setIsExtra(!isExtra);
            }}>
            <MdPages className="l-ico" />
            <p>Other Pages</p>
          </LWrap>
          <SubList className={isExtra ? 'showExtra' : ''}>
            <SLWrap>
              <MdInventory className="sl-ico" />
              <p>Invoice</p>
            </SLWrap>
            <SLWrap>
              <MdQuestionAnswer className="sl-ico" />
              <p>FAQs</p>
            </SLWrap>
            <SLWrap>
              <MdNewReleases className="l-ico" />
              <p>Blog</p>
            </SLWrap>
          </SubList>
        </UList>
        <div className="divider">
          <span>About</span>
        </div>
        <UList>
          <LWrap>
            <MdInfo className="l-ico" />
            <p>About Breakaway</p>
          </LWrap>
          <LWrap>
            <MdSupport className="l-ico" />
            <p>Support</p>
          </LWrap>
          <LWrap>
            <MdPrivacyTip className="l-ico" />
            <p>Privacy Policy</p>
          </LWrap>
        </UList>
      </MenuListWrapper>
    </ShopSideWrapper>
  );
};

const ShopSideWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100%;
  background-color: var(--sidebar-variant);
  background-clip: padding-box;
  border-right: 1px solid #000;
  transition: all 0.2s;
  z-index: 16;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);

  .header {
    width: 260px;
    height: 55px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    padding: 0 15px;
    z-index: 5;
    background: var(--text-color);

    .logoWrap {
      width: 15%;
      img {
        width: 100%;
      }
    }

    .act {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: calc(100% - 15%);
      h3 {
        font-size: 20px;
        color: var(--main-dark);
        margin-left: 5px;
        span {
          font-size: 20px;
          color: var(--text-b-color);
          margin-left: 4px;
        }
      }
      .m-ico {
        cursor: pointer;
        font-size: 25px;
        font-weight: bold;
      }
    }
  }
`;

const MenuListWrapper = styled.div`
  padding: 0 0 20px 0;
  transform: translateY(3.4rem);
  overflow-y: scroll;
  height: 95%;
  .divider {
    margin: 6% 0;
    span {
      padding: 0 10px;
      color: rgb(255 255 255 / 70%);
    }
  }
`;

const UList = styled.ul`
  margin-top: 2%;
`;

const LWrap = styled.li`
  background: var(--list-bg-color);
  border: 1px solid var(--sidebar-variant);
  color: var(--text-color);
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  transition: all 2s ease-in-out;

  p {
    font-size: 16px;
  }

  .l-ico {
    font-size: 20px;
  }
`;

const SLWrap = styled.li`
  background: var(--sidebar-variant);
  border: 1px solid var(--list-bg-color);
  color: var(--text-color);
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  &:hover {
    background: var(--list-bg-color);
  }

  p {
    font-size: 16px;
  }

  .sl-ico {
    font-size: 15px;
  }
`;

const SubList = styled.ul``;

export default ShopSidePanel;
