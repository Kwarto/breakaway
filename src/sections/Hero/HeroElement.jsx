import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const HeroContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 65% 33%;
  gap: 2%;
`;

export const HeroSlide = styled.div`
  img {
    width: 100%;
  }
`;
export const HeroRight = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

export const ImgWrap = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  div {
    width: 52%;
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`;
