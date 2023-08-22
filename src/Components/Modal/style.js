import styled from "styled-components";

export const BackdropStyled = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

    .container{
      min-width: 40%;
      background-color: var(--palet-5);
      border-radius: 10px ;
      height: 50;

    }
    

    header{
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border: 2px solid var(--palet-0);
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 15px;
      gap: 3.5625rem;
      background-color: var(--palet-0);
      color: var( --grey-0);

        h2{
          font-size: var(--font4);
        }

        button{
          background-color: var(--palet-0);
          border: 1px solid var(--palet-0);
          color: var( --grey-0);
        }
    }

    ul{
      overflow: auto;
      height: 200px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      overflow-x: hidden;
    }

    .divLi{
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-items: flex-start;
      margin: 20px;
      gap: 15px;
  }
    .divs{
      display: flex;
      flex-direction: row;
      gap: 15px;
    }
    
    .divSpanName{
      display: flex;
      flex-direction: column;
      gap:10px;
    }

    .divImgTrash{
      svg{
        fill: var(--grey-300);
      }  
    }

    .divRemove{
      display: flex;
      justify-content: center;

      button{
        border: 1px solid var(--grey-100);
        background-color: var(--grey-100);
        height: 42px;
        width: 16.6875rem;
        margin-bottom: 15px;
      }
    }
    
    img{
      width: 160px;
    }

    .divImg{
      img{
      width: 110px;
      background-color: var(--palet-4);
      border-radius: 10px;
    }
    }

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      
    }

    @media (min-width: 736px){
      .container{
        min-width: 32%;
    }

  }

    .divRemove{
      button{
      font-size: var(--font4);
      font-weight: var(--width);
      color: var(--grey-400);
      width: 90%;

  }
    }

    h2{
      font-size: var(--font2);
      font-weight: var(--width);
  }

    span{
      font-size: var(--font4);
      font-weight: var(--width);
      color: var(--palet-2);
  }

`

