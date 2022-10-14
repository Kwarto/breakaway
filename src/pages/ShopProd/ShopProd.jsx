import React from 'react'
import { FaEye, FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ShopBars } from '../../components'
import { productData } from '../../utils/data'

const ShopProd = () => {
  const navigate = useNavigate()
  return (
      <>
          <ShopBars />
          <ShopProdWrapper className='shop-content'>
            <ProductGridBox className='grid-cols-4'>
              {productData && productData.map(shopPro => (
                  <ProdBox key={shopPro.id}>
                      <div className="imgWrap">
                        <img src={shopPro.imgSrc} alt={shopPro.proName} />
                      </div>
                      <div className='proInfo'>
                          <h3 onClick={() => navigate(`/shop/view-product/${shopPro.id}`)}>{shopPro.proName}</h3>
                          <p>{shopPro.desc.substring(0, 70)}</p>
                          <span>${ shopPro.price}.00</span>
                      </div>
                      <small>
                          <FaEye className='u-ico' onClick={() => navigate(`/shop/view-product/${shopPro.id}`)}/>
                          <MdEdit className='u-ico' onClick={() => navigate(`/shop/add-product/${shopPro.id}`)}/>
                          <FaTrash className='u-ico'/>
                      </small>
                </ProdBox>
              ))}
            </ProductGridBox>
          </ShopProdWrapper>
      </>
  )
}

const ShopProdWrapper = styled.section`
 padding: 20px 0;
`

const ProductGridBox = styled.article`
 padding-left: 10px;
`  

const ProdBox = styled.div`
 width: 250px;
 height: 300px;
 background: var(--text-color);
 border-radius: .2rem;
 cursor: pointer;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 1rem;
 .imgWrap{
    width: 60%;
    margin: 0 auto;
    padding: 8px;
    img{
        width: 100%;
        height: 120px;
    }
 }

 .proInfo{
    text-align: center;

    h3{
        color: var(--text-variant);
    }

    p{
        font-weight: 300;
        padding: 5px 0;
    }

    span{
        color: var(--main-dark);
        font-size: 16px;
        font-weight: 600;
    }
 }

 small{
    display: flex;
    gap: 1.5rem;
    padding-bottom: 10px;
    .u-ico{
      font-size: 16px;
      :nth-child(1){
        color: var(--main-dark);
      }
      :nth-child(2){
        color: blue;
      }
      :nth-child(3){
        color: red;
      }
    }
 }

`

export default ShopProd