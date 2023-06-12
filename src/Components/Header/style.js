import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    height: 152px;
    background-color: var(--grey-0);

    > div:nth-child(1){
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-items: flex-end;
        
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
        margin-bottom: 15px;
            
            .logo{
                width: 10.625rem;
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
            justify-content: center;
            margin-left: 30px;
            margin-right: 30px;
        }
        .inputText{
            height: 55px;
            width: 316px;
            border-radius: 10px;
            border: 1px solid var(--grey-100);

            ::placeholder{
                padding: 7px;
            }
        }
        .inputButton{
            display: flex;
            position: relative;
            bottom: 48px;
            left: 256px;
            
        }

        @media (min-width: 736px){
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            align-items: baseline;
            height: 8.125rem;

            > div:nth-child(1){
                margin-top: 30px;
                margin-left: 200px;
                justify-content: space-between;
            }
            div > div:nth-child(2){
                position: relative;
            }

            form{
                margin-right: 200px;
            }

        }

`