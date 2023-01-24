import React from 'react'
import styled from 'styled-components'

const NewsLetter = () => {
  return (
    <NewsLetterWrapper>
          <h1>New To <span>Break</span>away</h1>  
          <p>Join our newsletter to get updates on our latest offers!</p>
          <form>
             <div className='sub'>
                 <input type="email" placeholder='Enter Email Address' />
             </div>
             <button type='submit'>Subscribe</button>
          </form>

    </NewsLetterWrapper>
  )
}

const NewsLetterWrapper = styled.div`
 background: var(--text-color);
 box-shadow: .2rem 1rem  var(--main-variant);
 border-radius: .5rem;
 min-height: 30vh;
 width: calc(100% - 18%);
 margin: 0 auto;
 padding: 10px;
 transform: translateY(-10rem);

 h1{
    font-size: 30px;
    color: var(--text-b-color);
    text-align: center;
    span{
        color: var(--main-dark);
    }
 }

 p{
    text-align: center;
    padding-top: 8px;
    font-size: 18px;
 }

 form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .sub{
    background: red;
     width: 45%;
     height: 48px;
     margin: 10px auto;
     border-radius: .2rem;
    input{
        width: 100%;
        height: 100%;
        border: 1px solid var(--main-dark);
        padding: 0 20px;
        font-family: 'Oswald', sans-serif;
        border-radius: .2rem;

        ::placeholder{
            font-size: 17px;
        }
    }
 }
 button{
        background: var(--main-color);
        border-radius: .5rem;
        box-shadow: 0 1rem .5rem var(--box-shadow);
        cursor: pointer;
        color: var(--text-color);
        font-family: 'Oswald', sans-serif;
        font-size: 17px;
        font-weight: bold;
        padding: 10px 15px;
        width: 12rem;

    }
 }

 @media screen and (max-width: 884px) {
    width: 98%;
    form{
        padding: 12px 0;
        .sub{
            width: 90%;
            margin-bottom: 12px;
        }
    }
 }

 @media screen and (max-width: 430px) {
    width: 98%;
    form{
        padding: 12px 0;
        .sub{
            width: 100%;
            margin-bottom: 12px;
        }
    }
 }

`

export default NewsLetter