import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
    width: 30px;
    height: 30px;
    @media screen and (max-width: 800px){
        width:25px;
        height:25px;
    }
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    @media screen and (max-width: 800px){
        font-size:9px;
    }
`;