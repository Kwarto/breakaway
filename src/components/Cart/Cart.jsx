import React, {useState} from 'react'
import { MdArrowBack, MdClearAll, } from 'react-icons/md'
import { FaMinus, FaPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import emptyImg from '../../img/empty-cart.png'
import item1 from '../../img/macbook13.jpeg'

const Cart = ({closeCart}) => {
  const [isItemCart, setIsItemCart] = useState(true)
  return (
    <CartWrapper>
      <CartHeader>
        <h4>{ isItemCart ? 'Available Cart' : 'Empty Cart' }</h4>
        {isItemCart ? 
          <button onClick={() => setIsItemCart(false)}>
          Clear
          <MdClearAll />
        </button> :
          <button onClick={() => closeCart(false)}>
           Back & Shop
          <MdArrowBack />
          </button> 
        }
      </CartHeader>
      <CartContent>
        {
          isItemCart ?
            <>
             
              <ItemWrap>
              <img src={item1} alt='item-1' />
              <div className='abt'>
                <h3>Macbook Air 13Pro</h3>
                  <p>$ 120</p>
              </div>
              <div>
              <span>
                  <button>
                  <FaMinus />
                </button>
                <button>
                  <FaPlus />
                </button>
              </span>
              </div>
              </ItemWrap>
            </> :
            <>
               <img src={emptyImg} alt="cart-is-empty" />
            </>
          
        }
      </CartContent>
      {isItemCart && <EstimateWrap>
        <div className='subTotal'>
          <div>
          <h2>Subtotal</h2>
          <h3>$ 400</h3>
          </div>
          <div>
          <h2>Delivery</h2>
          <h3>$ 400</h3>
          </div>
        </div>
        <div className='total'>
          <h2>Total</h2>
          <h3>$ 800</h3>
        </div>
        <Link to={'/checkout'}>
        <div className='cBtn' onClick={() => closeCart(false)}>
          <p>Checkout</p>
        </div>
        </Link>
      </EstimateWrap>}
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
position: fixed;
top: 4.8rem;
right: 2px;
width: 25rem;
min-height: 88vh;
z-index: 1000;
background: linear-gradient(var(--text-color), var(--text-variant));
border-radius: 0 0 .5rem .5rem;
box-shadow: 0 1rem .5rem var(--box-shadow);
padding: 10px;

 @media screen and (max-width: 430px) {
  top: 8rem;
  width: 100%;
  min-height: 85vh;
 }
`

const CartHeader = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 background: var(--text-color);
 border-top: 1px solid var(--main-color);
 padding: 8px 20px;
 h4{
  font-size: 25px;
 }

 button{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Oswald', sans-serif;
  padding: 8px;
 }
`

const CartContent = styled.article`
 height: 45vh;
 background: rgba(6, 6, 116, 0.116);
 border-radius: 0 0 15px 15px;
 overflow-y: scroll;
 ::-webkit-scrollbar{
  display: none;
 }

 img{
  width: 100%;
 }
`

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:var(--text-color) ;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  img{
    width: 80px;
  }

  .abt{
    display: flex;
    flex-direction: column;
    p{
      font-size: 18px;
      font-weight: 600;
    }
  }

  div{
    display: flex;
    align-items: center;
    gap: 5px;
    span{
      display: flex;
      align-items: center;
      button{
        cursor: pointer;
        font-size: 20px;
        font-weight: 700;
        padding: 5px;
        background: none;
      }
    }
  }
`

const EstimateWrap = styled.div`
 background: #f1f1f1;
 color: var(--text-b-color);
 min-height: 38vh;
 border-radius: 10px;
 transform: translateY(-3rem);
 padding: 10px;
 .subTotal{
  min-height: 13vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--main-variant);

  h2{
    padding-bottom: 8px;
    color: var(--text-variant);
  }
 }

 .total{
  min-height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--main-variant);
  margin-bottom: 10px;
  padding: 0 25px;
 }

 .cBtn{
  background: var(--btn-color);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;

  p{
    font-size: 26px;
    font-weight: bold;
    color: var(--text-b-color);
  }
 }
`

export default Cart