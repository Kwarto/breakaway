import React from 'react'
import styled from 'styled-components'
import { MdHome } from 'react-icons/md'
const ShopContentHead = () => {
  return (
      <ShopProHead>
          <MdHome className='md-ico'/>
        <h3>Shop</h3>
        <span>
          <p>User Profile</p>
        </span>
      </ShopProHead>
  )
}

const ShopProHead = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 15px;
  span{
    display: flex;
    align-items: center;
    gap: 6px;
    border-left: 1px solid var(--text-variant);
    p{
        padding-left: 8px;
    }
  }

  .md-ico{
    font-size: 20px;
  }
`

export default ShopContentHead