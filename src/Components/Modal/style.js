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
    width: 300px;
    background-color: #ffffff;
    border-radius: 10px ;

  }
  

  header{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 15px;
    gap: 3.5625rem;
    background-color: var(--color-prymary);
    color: var( --grey-0);

    button{
      background-color: var(--color-prymary);
      border: 1px solid var(--color-prymary);
      color: var( --grey-0);
    }
  }

  ul{
    overflow: auto;
    height: 200px;
    display: flex;
    flex-direction: column;
    gap: 16px

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

  .divImg{
    background-color: var(--grey-100);
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
    width: 110px;
  }

  .cart{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    
  }

  @media (min-width: 736px){
    .container{
      width: 35%;
  }


}

  .divRemove{
    button{
    width: 90%;
    font-size: var(--font4);
    font-weight: var(--width);
    color: var(--grey-400);

}
  }

  h2{
    font-size: var(--font0);
    font-weight: var(--width);
}

  span{
  font-size: var(--font4);
    font-weight: var(--width);
    color: var(--color-prymary);
}

`

