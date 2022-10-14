import styled from "styled-components";

export const ShopAuthWrapper = styled.section`
 background: var(--shop-box-color);
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 40px 0;
 min-height: 100vh;
`

export const ShopAuthForm = styled.article`
 width: 30%;
 height: 88%;
 background-color: var(--text-color);
 box-shadow: 0 0 10px var(--box-shadow);
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 

 .head{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10px 0;
    h3{
        font-size: 18px;
    }
    p{
        font-weight: 300;
    }
 }

 .form-box{
   width: 100%;
   form{
    padding: 0 20px;
    fieldset{
        width: 94%;
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        label{
            padding-bottom: 10px;
        }
        input{
            padding: 10px 15px;
            box-shadow: 0 0 5px var(--box-shadow);
            border-radius: .2rem;
            font-family: 'Oswald', sans-serif;
        }
    }
    .rem{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 3px;
            width: 94%;

            span{
                display: flex;
                align-items: center;
                gap: 8px;
                p{
                    font-weight: 300;
                    color: var(--text-b-color);
                }
            }
            p{
             font-weight: 300;
             color: rgb(33, 5, 136);
             cursor: pointer;
            }
        }
   }
   .btn-wrap{
     width: 95%;
     margin: 5% 0;
     cursor: pointer;
    button{
        background: var(--sidebar-variant);
        border-radius: .3rem;
        box-shadow: 0 0.5rem 1rem var(--box-shadow);
        color: var(--text-color);
        width: 100%;
        padding: 10px 8px;
        cursor: pointer;
        font-family: 'Oswald', sans-serif;
        font-size: 16px;
    }
   }
   .divider{
     p{
        text-align: center;
     }
   }

   .wit-ico{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    .ico-wrap{
        width: 13%;
        background: rgb(253, 251, 251);
        border: 1px solid var(--sidebar-variant);
        border-radius: 7px;
        box-shadow: 0 0.2rem 1rem var(--box-shadow);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        transition: all 400ms ease-in-out;
        &:hover{
            background: var(--text-color);
        }
        img{
            width: 80%;
        }
    }
   }

   .switch-acc{
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;

    span{
        color: rgb(33, 5, 136);
        cursor: pointer;
        padding-left: 5px;
        transition: all 300ms ease-in-out;

        &:hover{
            text-decoration: underline;
        }
    }
   }
 }
`