import React from 'react'
import styled from 'styled-components'

const Search = () => {
  return (
    <SearchWrapper className='search'>
      <input type="text" placeholder='Search products & categories here ..' />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  background: var(--text-color);
  width: 45%;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  input{
    border-radius: 3px;
    width: 100%;
    padding: 10px 10px;
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
    color: var(--text-variant);
  }

  @media screen and (max-width: 430px) {
    position: absolute;
    top: 5rem;
    left: 2px;
    width: 75%;

    input{
      padding: 15px 10px;
    }

  }
`

export default Search