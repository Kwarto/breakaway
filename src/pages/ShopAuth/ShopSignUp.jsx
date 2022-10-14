import React from 'react'
import { useNavigate } from 'react-router-dom'
import ApIco from '../../img/apple-black-logo.png'
import fbIco from '../../img/facebook.png'
import GoIco from '../../img/google.png'
import { ShopAuthForm, ShopAuthWrapper } from './ShopAuthElement'
const ShopSignUp = () => {
  const navigate = useNavigate()
  return (
    <ShopAuthWrapper>    
     <ShopAuthForm>
             <div className="head">
                <h3>Sign Up</h3>
                <p>Create New Shop</p>
             </div>
             <div className="form-box">
                <form>
                    <fieldset>
                        <label htmlFor="shopName">Shop Name</label>
                        <input type="text" name="ShopName" placeholder='wind wood' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='debbie@example.com' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='********' />
                    </fieldset>
                    <div className='rem'>
                      <span>
                        <input type="checkbox" name="remember" />
                        <p>Agree to Terms & Conditions</p>
                      </span>  
                    </div>
                    <div className='btn-wrap'>
                      <button>Sign Up</button>
                    </div>
                    <div className="divider">
                        <p>or continue with</p>
                    </div>
                    <div className="wit-ico">
                      <div className="ico-wrap">
                        <img src={fbIco} alt={'facebook-ico'} />
                      </div>
                      <div className="ico-wrap">
                        <img src={GoIco} alt={'facebook-ico'} />
                      </div>
                      <div className="ico-wrap">
                        <img src={ApIco} alt={'facebook-ico'} />
                      </div>
                    </div>
                    <div className="switch-acc">
                      <p>Already have an account? <span onClick={() => {navigate('/shop/sign-in')}}>Sign In</span></p>
                    </div>
                </form>
             </div>
            </ShopAuthForm>
    </ShopAuthWrapper>
  )
}

export default ShopSignUp