import React from 'react'
import styled from 'styled-components'

const Search = () => {
  return (
    <SearchWrapper>
       <input type="text" placeholder='Search products & categories here ..' />
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  background: red;
  width: 40%;
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
`

export default Search