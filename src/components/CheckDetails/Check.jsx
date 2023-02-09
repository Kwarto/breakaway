import React from 'react'
import styled from 'styled-components'
const Check = () => {
    return (
        <FormWrapper>
            <PersonalWrapper>
                <h1>
                    <span>1.</span>
                    Personal Information
                </h1>
                <div className="form-control">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder='John Doe' id='name' />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder='joe@gmail.com' id='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="number">Personal Contact</label>
                    <input type="number" placeholder='(233) 204 378 020' id='number' />
                </div>  
            </PersonalWrapper>
            <ShippingWrapper>
                <h1><span>2.</span>Shipping Address</h1>
                <article className='gridForm'>
                    <div className="form-control">
                        <label htmlFor="address1">Address Line 1</label>
                        <input type="address" placeholder='Lemon Street' id='address1' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="address2">Address Line 2</label>
                        <input type="address" placeholder='AK-220 3454' id='address2' />
                    </div>
                </article>


                <article className='gridForm'>
                    <div className="form-control">
                        <label htmlFor="country">Country</label>
                        <input type="country" placeholder='Ghana' id='country' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="zipCode">Zip Code</label>
                        <input type="zipCode" placeholder='00233' id='zipCode' />
                    </div>
                </article>

                <article className='gridForm'>
                    <div className="form-control">
                        <label htmlFor="city">City / Town</label>
                        <input type="city" placeholder='Kumasi' id='city' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="postal">Postal Address</label>
                        <input type="postal" placeholder='P O BOX 233' id='postal' />
                    </div>
                </article>
                <button>Submit</button>
            </ShippingWrapper>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
 background-color: var(--text-variant);
 display: grid;
 grid-template-rows: 1fr 1fr;
 gap: 1rem;

`

const PersonalWrapper = styled.div`
  background: var(--text-color);
  padding: 5px 2%;
  h1{
    font-size: 20px;

    span{
      padding-right: 10px;
    }
  }
`

const ShippingWrapper = styled.div`
  background: var(--text-color);
  padding: 5px 2%;
  h1{
    font-size: 20px;

    span{
      padding-right: 10px;
    }
  }

  button{
    width: 35%;
    background: var(--btn-color);
    border-radius: .2rem;
    color: var(--text-b-color);
    cursor: pointer;
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    padding: 10px 0;
    margin-top: 5px;
  }
`

export default Check