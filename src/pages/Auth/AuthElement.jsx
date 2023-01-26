import styled from "styled-components";

export const ErrorMsg = styled.div`
  width: 35%;
  background: red;
  border-radius: .1rem;
  box-shadow: 0 1rem .5rem var(--main-variant);
  display: none;
  align-items: center;
  justify-content: center;
  height: 40px;
  p{
    text-align: center;
  }
`

export const AuthWrapper = styled.section`
 min-height: 100vh;
 display: grid;
 grid-template-columns: 40% 58%;
 gap: 2%;

 @media screen and (max-width: 884px) {
    grid-template-columns: 100%;
 }

 @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
 }
`

export const LeftWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: var(--main-dark);
 img{
    width: 100%;
 }

 @media screen and (max-width: 884px) {
    min-height: 100vh;
    position: relative;
 }
 @media screen and (max-width: 430px) {
    min-height: 100vh;
    position: relative;
 }
`
export const RightWrapper = styled.div`
    background: var(--text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
    .top-d{
        h1{
            font-size: 30px;
            font-weight: bold;
            letter-spacing: 1.2px;
        }

        p{
            padding-top: 10px;
            color: var(--text-variant);
            span{
                color: var(--main-dark);
                cursor: pointer;
                margin-left: 10px;
                text-decoration: underline;
            }
        }
    }
    .up{

        .sign-with{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2rem;
          padding-top: 20px;
        .w-a{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid var(--main-variant);
            box-shadow: 0 0 10px var(--main-variant);
            border-radius: .2rem;
            padding: 10px 5px;
            width: 13rem;

            .w-ico{
                background: var(--main-color);
                border-radius: 50px;
                color: var(--text-color);
                font-size: 1.8rem;
                padding: 8px;
            }
        }
    }

    h3{
        padding: 8px;
        text-align: center;
        font-size: 20px;
        width: 60%;
        color: var(--text-variant);
    }

    .form-container{
        width: 80%;

        form{
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;

            .form-control{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                padding: 5px 0;
                width: 100%;
                label{
                    padding: 5px 0;
                }

                input{
                    padding: 15px 15px;
                    width: 80%;
                    box-shadow: 0 0 10px var(--main-variant);
                    border-radius: .2rem;
                    font-family: 'Oswald', sans-serif;
                    font-size: 16px;
                    letter-spacing: 1.2px;
                }
            }

            .btn{
                
                width: 100%;
                margin-top: 5px;
                button{
                    box-shadow: 0 0 10px var(--main-variant);
                    background: var(--btn-color);
                    border-radius: .2rem;
                    text-align: center;
                    padding: 10px;
                    font-family: 'Oswald', sans-serif;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    width: 40%;
                }
            }
        }
    }

    }

    @media screen and (max-width: 884px) {
      position: absolute;
      left: 0;
      right: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, var(--main-dark), var(--text-variant));
      color: var(--text-color);

      .top-d{
        h1{
            color: var(--text-color);
        }
        p{
            font-size: 18px;
            color: var(--text-color);
            span{
              color: var(--btn-color);
              font-size: 18px;
            }
        }
      }

      .up{
        .sign-with{
            .w-a{
                font-size: 18px;
                background: var(--text-color);
                color: var(--text-b-color)
            }
        }

        h3{
            padding: 20px 0;
            color: var(--text-color);
        }
      }
    }

    @media screen and (max-width: 430px) {
      position: absolute;
      left: 0;
      right: 0;
      min-height: 100vh;
      background: linear-gradient(-135deg, var(--main-dark), var(--text-variant));
      color: var(--text-color);
      padding-left: 2%;

      .top-d{
        h1{
            color: var(--text-color);
        }
        p{
            font-size: 18px;
            color: var(--text-color);
            span{
              color: var(--btn-color);
              font-size: 18px;
            }
        }
      }

      .up{
        .sign-with{
            gap: 5px;
            .w-a{
                font-size: 18px;
                background: var(--text-color);
                color: var(--text-b-color);
                width: 12rem;
                font-size: 16px;
            }
        }

        h3{
            padding: 20px 0;
            color: var(--text-color);
            width: 100%;
        }

        .form-container{
            width: 100%;
            form{
            .form-control{
                width: 100%;

                input{
                    width: 99%;
                }
            }
            }
        }
      }
    }
`