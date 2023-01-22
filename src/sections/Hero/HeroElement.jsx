import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: 884px) {
    flex-direction: column;
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 28%;
  gap: 2%;

  @media screen and (max-width: 884px) {
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
  }

  .swiper{
    width: 100%;
   .swiper-button-next, .swiper-button-prev{
    color: var(--btn-color);
   }
   .swiper-pagination-bullet{
    background: var(--btn-color);
    width: 13px;
    height: 13px;
    transform: translateY(-2rem);
   }
  }
`;

export const HeroSlide = styled.div`
  img {
    width: 100%;
  }
`;
export const HeroRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-content: center;
  place-items: center;
  gap: 10px;

  @media screen and (max-width: 884px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrap = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  box-shadow: 0 3px 3px 3px rgba(68, 0, 255, 0.034);
  cursor: pointer;
  .img {
    text-align: center;
    width: 100%;
    img {
      width: 30%;
      border-radius: 10px;
    }

    @media screen and (max-width: 884px) {
      height: 260px;
    }

    @media screen and (max-width: 430px) {
     height: 200px;
    }
  }

  .txt{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 2px;
    h2{
      color: var(--main-color);
    }
    p{
        text-align: center;
        font-size: 15px;
        font-weight: 400;
    }

    @media screen and (max-width: 884px) {
     transform: translateY(-2rem);
    }
    @media screen and (max-width: 430px) {
     transform: translateY(-2rem);

     p{
      font-size: 17px;
      max-width: 380px;
     }
    }
  }

  @media screen and (max-width: 430px) {
    gap: 1rem;
  }
`;
