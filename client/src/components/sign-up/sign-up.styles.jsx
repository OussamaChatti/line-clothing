import styled from "styled-components";

export const SignUpContainer = styled.div`
    width: 380px;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 800px){
        width: 250px;
    }
`;

export const TitleContainer = styled.h1`
    margin:10px 0;
    font-size:25px;
    @media screen and (max-width: 800px){
        margin:5px 5px;
        font-size:16px;
    }
`;

export const ButtonContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;