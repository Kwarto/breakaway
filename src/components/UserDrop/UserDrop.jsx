import React from 'react'
import styled from 'styled-components'

const UserDrop = () => {
  return (
    <UserDropWrapper>
  
    </UserDropWrapper>
  )
}

const UserDropWrapper = styled.article`
 background: var(--text-color);
 border-radius: .3rem;
 box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
 height: 200px;
 width: 20%;
 position: fixed;
 top: 2.5rem;
 right: 5px;
 z-index: 100;
`



export default UserDrop