import styled from "styled-components";

export const UlStyled = styled.ul`
    display: flex; 
    gap: 15px;
    overflow-y: auto; 
    width: 100%;

    @media(min-width:763px){
        flex-wrap:wrap;
        overflow: hidden;
        justify-content: center;
       
    }
`