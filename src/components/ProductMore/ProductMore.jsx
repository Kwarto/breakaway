import React, { useState } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import styled from 'styled-components'
import ReImg from '../../img/ava.png'

const ProductMore = () => {
    const [isDesc, setIsDesc] = useState(false)
    return (
        <ProductMoreWrapper>
            <Selector>
                <div onClick={() => setIsDesc(true)} setActive={true} className={isDesc ? 'active' : ''}>
                    <h3>Description</h3>
                </div>
                
                <div onClick={() => setIsDesc(false)} className={!isDesc ? 'active' : ''}>
                    <h3>Reviews</h3>
                </div>

            </Selector>
            {isDesc ?
                <>
                    <MoreDesc>
                        <article>
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi.</p>
                            <li>Not just for commute</li>
                            <li>Branded tongue and cuff</li>
                            <li>Super fast and amazing</li>
                            <li>Lorem sed do eiusmod tempor</li>
                            <p>Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.Seitan aliquip quis cardigan american apparel, butcher voluptate nisi.</p>
                        </article>
                    </MoreDesc>
                </> : <>
                    <MoreReviews>
                        <h4>3 Reviews For The Product</h4> 
                        <ReviewArea>
                         <ReviewsBox>
                           <div className="review-msg">
                           <div>
                            <img src={ReImg} alt="" />
                            <span>
                               <h3>James Caviness</h3>
                                <FaStar className='rate' />
                                <FaStar className='rate' />
                                <FaStar className='rate' />
                                <FaStar className='rate' />
                                <FaStarHalf className='rate' />
                            </span>
                            </div>
                            <p>
                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan   
                            </p>
                            <small>Feb 09 2023</small>
                           </div>
                           <div className="review-msg">
                           <div>
                            <img src={ReImg} alt="" />
                            <span>
                               <h3>James Caviness</h3>
                                <FaStar className='rate' />
                                <FaStar className='rate' />
                                <FaStar className='rate' />
                                <FaStar className='rate' />
                                <FaStarHalf className='rate' />
                            </span>
                            </div>
                            <p>
                            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan   
                            </p>
                            <small>Feb 09 2023</small>
                           </div>
                         </ReviewsBox>
                         <CreateReview>
                                <h4>Create a Review</h4> 
                                <form>
                                    <div className="form-wrap">
                                        <label htmlFor="username">Your Name</label>
                                        <input type="text" name="username" placeholder='Your Name' />
                                    </div>
                                    <div className="form-wrap">
                                        <label htmlFor="email">Email ID</label>
                                        <input type="email" name="email" placeholder='Email ID' />
                                    </div>
                                    <div className="form-wrap">
                                        <label htmlFor="rating">Rating Stars</label>
                                        <select name="rating">
                                        {[...Array(5).keys(),].map(number => {
                                            const num = number + 1;
                                            return (
                                              <option value={num} key={num}>
                                                {num}
                                              </option>
                                            )
                                        })}
                                    </select>
                                    </div>
                                    <div className="form-wrap">
                                        <textarea name="rateMsg" cols="10" rows="4" placeholder='Message'/>
                                    </div>
                                    <div className="form-wrap">
                                      <button>Submit Review</button>
                                    </div>
                                </form>
                          </CreateReview>
                        </ReviewArea>
                    </MoreReviews>
                </>}
        </ProductMoreWrapper>
    )
}


const ProductMoreWrapper = styled.section`
 min-height: 70vh;
 padding: 12px;
 width: 95%;
 margin: 0 auto;
 @media screen and (max-width: 430px) {
  min-height: 100vh;
  padding: 50px 0;
 }
`

const Selector = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-variant);
  width: 60%;
  div{
    cursor: pointer;
    padding: 8px 15px;
    width: 15%;
    border-top: 1px solid var(--main-variant);
    border-left: 1px solid var(--main-variant);
    border-right: 1px solid var(--main-variant);
    

    h3{
        font-size: 18px;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
    }
  }
  .active{
        background: var(--sidebar-variant);
        color: var(--text-color);
        transition: all 600ms ease-in;
   }
   @media screen and (max-width: 430px) {
    width: 98%;
    div{
        width: 35%;
    }
   }
`

const MoreDesc = styled.article`
 article{
    p{
        font-size: 16px;
        font-weight: 300;
        max-width: 700px;
        padding: 10px 0;
        line-height: 1.7;
    }
    li{
        list-style-type: circle;
        font-size: 15px;
        padding: 5px 0;
    }
 }

 @media screen and (max-width: 430px) {
   height: 60vh;
 }
`

const MoreReviews = styled.section`
padding: 10px 0;
h4{
    font-size: 20px;
}
`

const ReviewArea = styled.article`
 height: 10vh;
 display: grid;
 grid-template-columns: 68% 30%;
 gap: 2%;

 @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
 }
`

const ReviewsBox = styled.div`
 background: #fff;
 padding: 10px;
 width: 90%;
 height: 60vh;
 overflow-y: scroll;
 .review-msg{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border-bottom: 1px solid var(--box-shadow);
    padding-bottom: 5px;
    margin-top: 10px;
    div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 10px 0;
    img{
      width: 80px;
      border-radius: 50px;
    }

    h3{
        font-size: 18px;
        opacity: 0.7;
        padding-bottom: 5px;
    }
   }
 }
 

 p{
    padding: 2px 0;
    line-height: 1.7;
    max-width: 720px;
    font-weight: 300;
 }

 .rate{
    color: var(--btn-color);
 }

 @media screen and (max-width: 430px) {
    height: 35vh;
 }
`

const CreateReview = styled.div`
  background: var(--shop-box-color);
  box-shadow: 0 .2rem 1rem var(--box-shadow);
  border-radius: .2rem;
  min-height: 60vh;
  padding: 10px;

  form{
    .form-wrap{
        display: flex;
        flex-direction: column;
        label{
            padding: 5px 0;
        }
        input, select, textarea{
            padding: 8px 15px;
            font-family: 'Oswald', sans-serif;
            background: var(--text-color);
            resize: none;
        }

        textarea{
            margin-top: 5px;
        }

        button{
          background: var(--sidebar-variant);
          padding: 7px;
          margin: 5px 0;
          width: 40%;
          cursor: pointer;
          color: var(--text-color);
          font-family: 'Oswald', sans-serif;
        }
    }
  }

  @media screen and (max-width: 430px) {
    min-height: 46vh;
  }
`

export default ProductMore