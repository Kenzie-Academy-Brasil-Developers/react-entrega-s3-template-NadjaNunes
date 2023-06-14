import styled from "styled-components";

export const CardStyled = styled.li`

    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 280px;
    border: 2px solid var(--grey-400);
    border-radius: 8px;
    

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-100);
    height: 100%;
    width: 267px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 100%;
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
    width: 300px;
  }

  button {
    width: 100px;
    height: 36px;
    background-color: var(--grey-400);
    border: 1px solid var(--grey-400);
    color: var(--grey-0);
    border-radius: 8px;
    cursor: pointer;
  }

  &:hover{
    border: 3px solid var(--color-prymary);
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  button:hover{
    border: 3px solid var(--color-prymary);
    background-color: var(--color-prymary);
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  h2{
    font-size: var( --font0);
    font-weight: var(--width);
  }

  h4{
    font-size: var(--font5);
    color: var(--grey-300);
  }

  p{
    font-size: var(--font4);
    font-weight: var(--width);
    color: var(--color-prymary);
  }

  @media (min-width: 768px) {

  & > div:first-child{
    width: 100%;
    height: 200px;
  }
}

`;