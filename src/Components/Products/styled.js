import styled from "styled-components";

export const UlStyled = styled.ul`
    display: flex; 
    gap: 15px;
    overflow-y: auto; 
    padding: 0;
    margin: 20px;

        li{
            height: 400px;
        }

        @media(min-width:763px){
            flex-wrap:wrap;
            overflow: hidden;
            justify-content: center;
            width: 85%;
        }
`