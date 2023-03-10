import styled from "styled-components";

export const CatWrap = styled.div`
 width: 30%;
 background: var(--text-color);
 box-shadow: 0 3px 3px 3px rgba(0, 255, 106, 0.034);
 padding: 10px;

 @media screen and (max-width: 884px) {
    display: none;
  }

 @media screen and (max-width: 430px) {
   display: none;
 }

 h3{
    color: var(--text-variant);
    padding-bottom: 8px;
 }
`

export const CatList = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-bottom: 1px solid #f1f1f1;
 cursor: pointer;
 transition: all 800ms ease-in-out;

 &:hover{
   background: #f1f1f1;
   width: 100%;
 }
 p{
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
 }

 span{
  background: var(--sidebar-variant);
  color: var(--text-color);
  padding: 2px 12px;
  border-radius: 50px;
  font-size: 12px;
 }
`