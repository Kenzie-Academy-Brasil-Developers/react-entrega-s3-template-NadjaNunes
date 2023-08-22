import styled from "styled-components";

export const CardStyled = styled.li`
  border: 2px solid var(--grey-400);
  border-radius: 8px;
  margin-top: 10px;

  img{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
  }

    & > div:first-child {
      display: flex;
      justify-content: center;
      width: 280px;
      height: 60%;
      background-color: var(--grey-100);
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
    
    & > div:nth-child(2) {
      height: 40%;
      background-color: var(--grey-0);
    }

    .box_info{
      display: flex;
      flex-direction: column;
      gap: 10px;
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
        div{
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 15px;

        }
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

    &:hover {
      border: 3px solid var(--palet-2);
      transform: translateZ(0);
      backface-visibility: hidden;

        button {
          border: 3px solid var(--palet-2);
          background-color: var(--palet-2);
          transform: translateZ(0);
          backface-visibility: hidden;
        }
    }

    h2 {
      font-size: var(--font0);
      font-weight: var(--width);
    }

    h4 {
      font-size: var(--font5);
      color: var(--grey-300);
    }

    p {
      font-size: var(--font4);
      font-weight: var(--width);
      color: var(--palet-2);
    }
`;