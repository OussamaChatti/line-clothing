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
`;

export const NameContainer = styled.span`
    width: 85%;
    margin-bottom: 15px;
    font-size: 18px;
    @media screen and (max-width: 800px){
        width:75%;
        font-size:10px;
    }
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
    @media screen and (max-width: 800px){
        width:25%;
        align-items:right;
        font-size:9px;
        &::after{
            font-size:6px;
            letter-spacing: unset;
    }
`;

export const CustomButtonStyled = styled(CustomButton)`
    width:80%;
    opacity:0.7;
    position: absolute;
    top : 255px;
    display: none;
    @media screen and (max-width: 800px){
        top:150px;
        display:block;
        opacity:0.9;
        min-width:unset;
        padding: 0 5px;
        font-size:8px;
        align-items:center;
        height:30px;
        line-height:30px;
    }
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
    @media screen and (max-width: 800px){
        width:21vw;
        height: 200px;
        margin-bottom: 15px;
        &:hover ${ImageContainer}{
            opacity: unset;
          }
        &:hover ${CustomButtonStyled}{
            opacity: unset;
        }
      }
`; 



