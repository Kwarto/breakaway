import React from 'react'
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa'
import { useNavigate,  useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, NavBar } from '../../components'
import dImg from '../../img/ip8.jpeg'
import { Similar } from '../../sections'
const Detail = () => {  
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <>
      <NavBar />
      <DetailWrapper>
      <DetailItem>
        <h1>Apple iPhone 8</h1>
        <ProdImg>
           <img src={dImg} alt="" />
        </ProdImg>
        <SoldBy>
            <h2>Sold By</h2>
            <p>Wooded Shop</p>
        </SoldBy>
       </DetailItem>
       <DetailItemDesc>
        <ProAbt>
          <h3>Phones & Accessories - Apple</h3>
          <h2>Apple iPhone 8</h2>
          <div className="price">
              <h4>$ 150</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <span className='sel'>
                <p>Select Qty</p>
                <p>Qty Chart</p>
              </span>
            <div className="qty">
              {[...Array(10).keys(),].map(number => {
                const num = number + 1;
                return (
                  <option value={num} key={num}>
                    {num}
                  </option>
                )
            })}
            </div>
            <div className="addToCart">
              <FaShoppingCart />
              Add To Cart
            </div>

            <div className="product-detail">
              <h3>Product Detail</h3>
              <h4>Apple iPhone 8</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, doloribus qui quo officiis, quam recusandae et dolorem modi explicabo, praesentium exercitationem voluptate accusamus nostrum molestias corrupti ullam laborum blanditiis cum.</p>
            </div>
            <div className="back-shop" onClick={() => navigate('/')}>
              <FaArrowLeft />
              <p>Continue Shopping</p>
            </div>
         </ProAbt>
       </DetailItemDesc>
      </DetailWrapper>
      <Similar />
      <Footer />
    </>
  )
}

const DetailWrapper = styled.section`
 min-height: 100vh;
 background: var(--text-color);
 display: grid;
 grid-template-columns: 40% 58%;
 gap: 2%;

 @media screen and (max-width: 884px) {
   min-height: 70vh;
   place-items: center;
 }

 @media screen and (max-width: 430px) {
  grid-template-columns: 100%;
 }
`


const DetailItem = styled.article`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  padding: 10px 5%;

  h1{
    font-size: 40px;
    color: var(--text-variant);
    opacity: 0.8;
  }
`

const ProdImg = styled.div`
 width: 100%;
 display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 img{
  width: 80%;
  height: 100%;
 }
`

const SoldBy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2{
    font-size: 18px;
    opacity: 0.5;
  }
  p{
    font-size: 25px;
    font-weight: 500;
    color: var(--main-dark);
  }
`

const DetailItemDesc = styled.article`
 background: var(--main-variant);
 display: flex;
 align-items: flex-start;
 justify-content: flex-start;
 padding: 10px 5%;

 @media screen and (max-width: 430px) {
  padding: 10px 3%;
 }
`

const ProAbt = styled.div`
 width: 100%;
 padding: 10px;
 h3{
  color: var(--main-dark);
  font-size: 20px;
 }

 h2{
  color: var(--text-b-color);
  font-size: 30px;
  padding-top: 10px;
 }

 .price{
    margin-top: 4%;
    h4{
      font-size: 25px;
      color: var(--main-color);
    }
    p{
      font-size: 15px;
      opacity: 0.8;
    }
 }

 .sel{
   padding-top: 20px;
   display: flex;
   justify-content: flex-start;
   gap: 18rem;
   align-items: center;
   p{
    :nth-child(1){
      color: var(--text-variant);
      font-size: 16px;
    }
    :nth-child(2){
      color: var(--main-dark);
      font-size: 16px;
    }
   }
 }


 .qty{
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 10px;
  padding-top: 10px;

  option{
    background: var(--main-dark);
    border-radius: 50px;
    box-shadow: 0 0 10px var(--main-variant);
    color: var(--text-color);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    transition: all 500ms ease-in-out;

    &:hover{
      background: var(--text-color);
      color: var(--main-dark);
    }
  }
 }
 .addToCart{
    margin-top: 20px;
    width: 30%;
    background: var(--main-dark);
    border-radius: .2rem;
    box-shadow: 0 1rem .5rem var(--box-shadow);
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 10px 0;
    transform: all 2s ease-in-out;
    &:active{
      box-shadow: none;
    }
  }

  .product-detail{
    padding-top: 30px;
    h3{
      color: var(--text-variant);
      opacity: 0.8;
      font-size: 18px;
    }

    h4{
      padding: 15px 0;
    }
    p{
      max-width: 500px;
      opacity: 0.7;
      line-height: 1.6;
      letter-spacing: 1.2px;
    }
  }

  .back-shop{
    color: var(--main-dark);
    text-decoration: underline;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin-top: 10px;
    padding: 15px 0;
    cursor: pointer;
    transition: all 2s ease-in;

    &:hover{
      text-decoration: none;
    }
  }

  @media screen and (max-width: 884px) {
    .sel{
      gap: 12rem;
    }
    .qty{
      gap: 7px;
      option{
        width: 26px;
        height: 26px;
        font-size: 12px;
      }
    }
    .addToCart{
      width: 45%;
    }
    .product-detail{
      p{
       font-size: 15px;
      }
    }
  }

  @media screen and (max-width: 430px) {
    .sel{
      gap: 12rem;
    }
    .qty{
      gap: 7px;
      option{
        width: 26px;
        height: 26px;
        font-size: 12px;
      }
    }
    .addToCart{
      width: 45%;
    }
    .product-detail{
      p{
       font-size: 15px;
      }
    }
  }
`

export default Detail