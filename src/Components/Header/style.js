import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    height: 152px;
    background-color: var(--grey-0);

    .container__logo{
        font-size: 62.5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-items: flex-end;
        
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
        margin-bottom: 15px;
            
        .logo{
            width: 11.625rem;
        }
                        
            svg{
                fill: var(--grey-300);
            }

            p{
                background-color: var(--color-prymary);
                color: var(--grey-0);
                width: 18px;
                height: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                position: relative;
                left: 15px;  
                top: 10px;
                
            }
            
        }

        form{
            display: flex;
            position: relative;
            justify-content: center;
            width: 90%;
            margin: 0 auto;
        }

        .inputText{
            height: 55px;
            border-radius: 10px;
            border: 1px solid var(--grey-100);
            width: 100%;
            margin: 0 auto;
        }

        input{
            text-indent: 10px;
            color: var(--grey-300);
            font-size: var(--font4);
        }

        input::placeholder{
            color: var(--grey-300);
            font-size: var(--font4);
        margin: 10px;
           
        }

        .inputButton{
            display: flex;
            position: absolute;
            inset: 7px 7px 10px auto;
            
        }

        @media (min-width: 736px){
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            align-items: baseline;
            height: 100px;

            .container{
                max-width: 1200px;
                width: 90%;
                display: flex;
                align-items: center;
                height: 100%;
                margin: 0 auto;
                gap: 20px;
            }

            .container__logo{
                margin: 0;
                justify-content: space-between;
                width: 70%;
                margin-bottom: 7px;
            }

            .cart{
                position: relative;
            }

            form{
                width: 30%;
                margin: 0;
            }



        }



`