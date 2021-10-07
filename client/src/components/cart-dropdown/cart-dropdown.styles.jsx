import styled from "styled-components";

import CustomButton from '../custom-button/custom-button';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    @media screen and (max-width: 800px){
        top:50px;
        right:20px;
        width: 200px;
        height: 300px;
    }
`;

export const CartItemsContainer = styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
    @media screen and (max-width: 800px){
        height:200px;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
    @media screen and (max-width: 800px){
        font-size:12px;

    }
`;

export const CustomButtonStyled = styled(CustomButton)`
    margin-top: 5px;
    @media screen and (max-width: 800px){
        font-size:12px;
    }

`;