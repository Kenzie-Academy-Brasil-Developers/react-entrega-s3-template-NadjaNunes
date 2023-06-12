import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 280px;
    border: 2px solid var(--grey-400);
    border-radius: 8px;
  }

  li > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-100);
    height: 100%;
  }

  li > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px
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

  li:hover{
    border: 3px solid var(--color-prymary);
    transition: none;
  }

  button:hover{
    border: 3px solid var(--color-prymary);
    background-color: var(--color-prymary);
    transition: none;
  }

`;