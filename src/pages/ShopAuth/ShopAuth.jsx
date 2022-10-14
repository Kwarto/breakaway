import React from 'react'
import { useNavigate } from 'react-router-dom'
import ApIco from '../../img/apple-black-logo.png'
import fbIco from '../../img/facebook.png'
import GoIco from '../../img/google.png'
import { ShopAuthForm, ShopAuthWrapper } from './ShopAuthElement'
const ShopAuth = () => {
  const navigate = useNavigate()
  return (
      <>
        <ShopAuthWrapper>
            <ShopAuthForm>
             <div className="head">
                <h3>Sign In</h3>
                <p>Sign in to your shop</p>
             </div>
             <div className="form-box">
                <form>
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
                        <p>Remember Me</p>
                      </span>  
                      <p>Forgot Password?</p>
                    </div>
                    <div className='btn-wrap'>
                      <button>Sign In</button>
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
                      <p>Don't have an account? <span onClick={() => {navigate('/shop/sign-up')}}>Sign Up</span></p>
                    </div>
                </form>
             </div>
            </ShopAuthForm>  
        </ShopAuthWrapper>
      </>
  )
}

export default ShopAuth