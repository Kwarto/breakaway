import React from 'react'
import { FaBriefcase, FaEye, FaTrash } from 'react-icons/fa'
import { MdArrowDropUp, MdCreditCard, MdEdit, MdProductionQuantityLimits, MdShoppingBag } from 'react-icons/md'
import styled from 'styled-components'
import proAva from '../../img/ava.png'

const ShopContentBox = () => {
  return (
    <ShopContentBoxWrapper>
     <StatGridBox className='grid-cols-4'>
        <StatList>
          <MdShoppingBag className='st-ico'/>
          <h2>4.5k</h2>
          <p>Total Orders</p>
          <small>
            <MdArrowDropUp />
            45%
          </small>
        </StatList>
        <StatList>
          <MdCreditCard className='st-ico'/>
          <h2>4.5k</h2>
          <p>Total Income</p>
          <small>
            <MdArrowDropUp />
            45%
          </small>
        </StatList>
        <StatList>
          <MdProductionQuantityLimits className='st-ico'/>
          <h2>4.5k</h2>
          <p>Total Stock Products</p>
          <small>
            <MdArrowDropUp />
            45%
          </small>
        </StatList>
        <StatList>
          <FaBriefcase className='st-ico'/>
          <h2>4.5k</h2>
          <p>Total Earnings</p>
          <small>
            <MdArrowDropUp />
            45%
          </small>
        </StatList>
     </StatGridBox>
      <RecentOrderTable id='#orders'>
        <h3>Recent Orders</h3>
        <table>
          <thead>
           <tr>
              <td>#ID</td>
              <td>Product</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Date</td>
              <td>Status</td>
              <td>Actions</td>
           </tr>
          </thead>
          <tbody>
            <tr>
              <td>#89742</td>
              <td className='proAbt'>
                <img src={proAva} alt="product-banner" />
                Smart Mobile Phone
              </td>
              <td>2</td>
              <td>$150</td>
              <td>02 / 09 / 2023</td>
              <td>Pending</td>
              <td className='action'>
                <FaEye className='ac-ico'/>
                <MdEdit className='ac-ico'/>
                <FaTrash className='ac-ico'/>
              </td>
            </tr>
            <tr>
              <td>#89742</td>
              <td className='proAbt'>
                <img src={proAva} alt="product-banner" />
                Smart Mobile Phone
              </td>
              <td>2</td>
              <td>$150</td>
              <td>02/ 09/ 2023</td>
              <td>Pending</td>
              <td className='action'>
                <FaEye className='ac-ico'/>
                <MdEdit className='ac-ico'/>
                <FaTrash className='ac-ico'/>
              </td>
            </tr>
          </tbody>
        </table>
     </RecentOrderTable>
    </ShopContentBoxWrapper>
  )
}


const ShopContentBoxWrapper = styled.section`
 background: var(--shop-box-color);
 height: calc(100vh - 55px);
 width: calc(100% - 260px);
 position: absolute;
 top: 55px;
 left: 260px;
 right: 0;
 overflow-y: scroll;
 padding: 10px;
`
const StatGridBox = styled.article`
 
`

const StatList = styled.div`
 background: var(--text-color);
 box-shadow: 0 0.5rem 1rem var(--box-shadow);
 border-radius: .2rem;
 cursor: pointer;
 padding: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 10px;

 .st-ico{
   background: var(--main-variant);
   font-size: 2rem;
   width: 40px;
   height: 40px;
   border-radius: 50px;    
   padding: 5px;
 }

 small{
  color: var(--main-color);
 }
`

const RecentOrderTable = styled.article`
 height: 90%;
 background: var(--text-color);
 border-radius: .2rem;
 box-shadow: 0 0 10px var(--box-shadow);
 margin-top: 10px;
 padding: 8px;
 overflow: scroll;

 table{
  width: 100%;
  overflow-x: scroll;
  thead{
    background: var(--main-variant);
    tr{
      td{
        padding: 9px;
        text-align: center;
      }
    }
  }
  tbody{
    background: var(--text-color);
    tr{
      td{
        padding: 9px;
        text-align: center;
      }
      .action{
        margin: auto;
        cursor: pointer;

        .ac-ico{
          margin: 5px;
          :nth-child(1){
            color: var(--main-color);
          }
          :nth-child(2){
            color: rgb(0, 0, 255);
          }
          :nth-child(3){
            color: rgb(255, 0, 0);
          }
        }
      }
      .proAbt{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        img{
        width: 30px;
        border-radius: 50px;
      }
      }
    }
  }
 }
`
export default ShopContentBox