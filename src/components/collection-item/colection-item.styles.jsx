import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";


export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`;

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 85%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 15%;
    &::after{
    content:'TND';
    font-size:12px;
    color: red;
    font-family: 'Bebas Neue', cursive;
    letter-spacing: 1px;
    }
`;

export const CustomButtonStyled = styled(CustomButton)`
    width:80%;
    opacity:0.7;
    position: absolute;
    top : 255px;
    display: none;
`;

export const CollectionItemContainer = styled.div`
    width: 24vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin: 5px 5px;
    &:hover ${ImageContainer}{
        opacity: 0.8;
      }
    &:hover ${CustomButtonStyled}{
        opacity: 0.85;
        display: flex;
    }
`; 



