import React from 'react'
import styled from 'styled-components'
import { ShopBars } from '../../components'
import avaImg from '../../img/ava.png'
const EditShop = () => {
    return (
        <>
            <ShopBars />
            <EditShopWrapper className='shop-content'>
                <EditProfile>
                    <h2>* Edit Profile</h2>
                    <ImgWrapper>
                        <img src={avaImg} alt="" />
                    </ImgWrapper>
                    <form>
                        <div className="cp">
                            <input type="file" name="file" id="file" style={{ display: 'none' }} />
                            <label htmlFor="file">Change Photo</label>
                        </div>
                        <h2>* User Information</h2>
                        <div className="form-box">
                            <div className="input-box">
                                <label htmlFor="username">Shop Name</label>
                                <input type="text" name="username" placeholder='Shop Name' />
                            </div>
                            <div className="input-box">
                                <label htmlFor="shopName">Shop Email</label>
                                <input type="email" name="shopEmail" placeholder='Shop Email Address' />
                            </div>
                        </div>
                        <div className="form-box">
                            <div className="input-box">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" placeholder={`Owner's First Name`} />
                            </div>
                            <div className="input-box">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="email" name="lastName" placeholder={`Owner's Last Name`} />
                            </div>
                        </div>
                        <h2>* Contact Information</h2>
                        <div className="form-box">
                            <div className="input-box">
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" placeholder='Address' />
                            </div>
                        </div>
                        <div className="form-box">
                            <div className="input-box">
                                <label htmlFor="country">State / Country</label>
                                <input type="text" name="country" placeholder={`Country`} />
                            </div>
                            <div className="input-box">
                                <label htmlFor="city">City / Town</label>
                                <input type="text" name="city" placeholder={`City`} />
                            </div>
                        </div>
                        <h2>* Shop Details</h2>
                        <div className="form-box">
                            <div className="input-box">
                                <label htmlFor="about">About Shop</label>
                                <textarea name="about" cols="10" rows="5" placeholder='Describe your shop' />
                            </div>
                        </div>
                        <div className="form-box">
                            <div className="input-box">
                                <button>Save Changes</button>
                            </div>
                        </div>
                    </form>
                </EditProfile>
            </EditShopWrapper>
        </>
    )
}

const EditShopWrapper = styled.section`

`
const EditProfile = styled.article`
 background: var(--text-color);
 box-shadow: 0 0.5rem 1rem var(--box-shadow);
 min-height: 100%;
 width: 75%;
 margin: 0 auto;
 padding: 10px;

 h2{
    font-size: 20px;
    font-weight: 400;
    padding-left: 10px;
 }
 .cp{
    width: 25%;
    background: var(--text-color);
    border-radius: 50px;
    border: 1px solid var(--sidebar-variant);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    padding: 7px;
    transition: all 2s ease-in-out;
    label{
      width: 100%;
      text-align: center;
      cursor: pointer;
    }
    &:hover{
        background: var(--sidebar-variant);
        color: var(--text-color);
    }
 }

 form{
    padding-left: 10px;
    h2{
        padding-left: 0;
        margin-top: 12px;
    }
    .form-box{
       display: flex;
       align-items: center;
       justify-content: space-between;
       gap: 1.5rem;
       margin-top: 10px;
       .input-box{
        width: 100%;
        display: flex;
        flex-direction: column;

        label{
            font-size: 18px;
            color: var(--text-variant);
        }

        input, textarea{
            width: 100%;
            padding: 10px 8px;
            margin-top: 5px;  
            border: 1px solid var(--sidebar-variant);
            border-radius: .2rem;
            font-size: 16px;
            font-family: 'Oswald', sans-serif;
            resize: none;
        }

        button{
            background: var(--sidebar-variant);
            width: 30%;
            cursor: pointer;
            padding: 12px;
            border-radius: .2rem;
            font-size: 16px;
            font-weight: bold;
            font-family: 'Oswald', sans-serif;
            color: var(--text-color);
        }
       }
    }

    
  } 
`

const ImgWrapper = styled.div`
 background: var(--text-color);
 border-radius: 100%;
 box-shadow: 0 0.5rem 1rem var(--box-shadow);
 cursor: pointer;
 aspect-ratio: 1/1;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 20%;
 margin: 0 auto;

 img{
    width: 90%;
    border-radius: 100%;
 }
`

export default EditShop