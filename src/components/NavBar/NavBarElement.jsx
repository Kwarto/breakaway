import styled from 'styled-components';

export const NavBarWrapper = styled.nav`
  min-height: 20vh;
`;

export const TopBar = styled.div`
  min-height: calc(20vh - 12vh);
  background: var(--text-color);
  border-bottom: 1px solid rgb(241, 241, 241);
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: var(--text-variant);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  p {
    cursor: pointer;
    font-size: 15px;
  }
  
  @media screen and (max-width: 430px) {
    .mail{
      display: none;
    }
  }
`;

export const MidBar = styled.div`
 min-height: 12vh;
 padding: 8px 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;

 @media screen and (max-width: 430px) {
  flex-direction: column;
  min-height: 16vh;
 }
`;

export const Logo = styled.div`
 cursor: pointer;
 h1{
   font-size: 2rem;
   color: var(--text-b-color);
   span{
    color: var(--main-dark);
   }
 }

 @media screen and (max-width: 430px) {
    position: absolute;
    top: 9px;
    left: 5px;
  }
`
// export const CallUs = styled.div`
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  gap: 10px;

//  .call-ico{
//   font-size: 1.8rem;
//   background: var(--btn-color);
//   border-radius: 50px;
//   padding: 3px;
//  }

//  span{
//    p{
//     font-size: 14px;
//     text-transform: uppercase;
//    }
//  }
// `

export const CartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .cart{
    font-size: 1.8rem;
    background: var(--btn-color);
    border-radius: 50px;
    padding: 4px;
  }

  small{
    position: relative;
    top: 18px;
    left: -18px;
    background: var(--text-b-color);
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1/1;
    width: 1.2rem;
    border-radius: 50px;
    color: var(--text-color);
    font-size: 10px;
  }

  span{
    p{
      font-size: 14px;

      span{
        color: var(--main-color);
      }
    }
  }

  @media screen and (max-width: 430px) {
    position: absolute;
    right: 8px;
  }
`