import styled from "styled-components";

export const MainStyled = styled.div`
    width: 100vw;
    height: 100%;
    z-index: -1;
    display: flex;
    gap: 10px;
    background-color: var(--palet-5);
    margin-bottom: 0px;
    position: fixed;
    bottom: 0;
    right: 0;

    .burguer{
        display: flex;
        gap: 10px;
        img{
            width: 50px;
            height: 50px;
            animation: animation calc(70s / var(--1)) linear infinite;
        }
    }
    .burguer{
        display: flex;
        gap: 10px;
        .animation1{
            width: 50px;
            height: 50px;
            animation: animation calc(70s / var(--2)) linear infinite;
        }
    }
    .burguer{
        display: flex;
        gap: 10px;
        .animation2{
            width: 50px;
            height: 50px;
            animation: animation calc(70s / var(--3)) linear infinite;
        }
    }
    .burguer{
        display: flex;
        gap: 10px;
        .animation3{
            width: 50px;
            height: 50px;
            animation: animation calc(70s / var(--4)) linear infinite;
        }
    }
    .burguer{
        display: flex;
        gap: 20px;
        .animation4{
            width: 50px;
            height: 50px;
            animation: animation calc(70s / var(--5)) linear infinite;
        }
    }

    .burguer img:nth-of-type(even){

    }

    @keyframes animation {
        0%{
            transform: translateY(100vh) scale(1);
        }

        100%{
            transform: translateY(0) scale(1);
        }
    }


`