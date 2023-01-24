import React, { useState } from 'react'
import { AuthWrapper, LeftWrapper, RightWrapper } from './AuthElement'
import bg from '../../img/auth1.svg'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <AuthWrapper>
      <LeftWrapper>
        <img src={bg} alt="" />
      </LeftWrapper>
      <RightWrapper>
        <div className='top-d'>
          <h1>Get's Started</h1>
          {
            signUp ?
            <p>Already have an account? <span onClick={() => setSignUp(false)}>Sign In</span></p>
            :
              <p>Don't have an account? <span onClick={() => setSignUp(true)}>Sign Up</span></p>
          }
        </div>
        <div className="up">
          <div className="sign-with">
            <div className="w-a">
              <FaGoogle className='w-ico' />
              <p>Sign Up With Google</p>
            </div>
            <div className="w-a">
              <FaFacebook className='w-ico' />
              <p>Sign Up With Google</p>
            </div>
          </div>
          <h3>OR</h3>
          <div className="form-container">
            <form>
              {
                signUp &&
                <div className="form-control">
                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder='Username' />
                </div>
              }
              <div className="form-control">
                <label htmlFor="email">Email Address</label>
                <input type="email" placeholder='Enter Email' required />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Password' />
              </div>
              {
                signUp &&
                <div className="form-control">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" placeholder='Confirm Password'/>
                </div>
              }

              <div className='btn'>
                <button>{signUp ? 'Sign Up' : 'Sing In'}</button>
              </div>
            </form>
          </div>
        </div>
      </RightWrapper>
    </AuthWrapper>
  )
}

export default Auth