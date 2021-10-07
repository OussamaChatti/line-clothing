import styled from "styled-components";

export const SignInContainer = styled.div`
    width: 380px;
    display:flex;
    flex-direction:column;
    margin-right: 30px;
    @media screen and (max-width: 800px){
        width: 250px;
        margin-right: 0;
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

export const ButtonsContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;