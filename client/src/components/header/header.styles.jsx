import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;

    @media screen and (max-width: 800px){
        height:50px;
        padding:5px;
        margin-bottom:9px;
    } 
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
    @media screen and (max-width: 800px){
        width:50px;
        padding:0px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: right;
    @media screen and (max-width: 800px){
        width:80%;
    }
    
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    @media screen and (max-width: 800px){
        padding: 7px;
        font-size: 12px;
    }
`;

export const Logo = styled.img`
    width:100px;
    height:80px;
    position:absolute;
    left:50px;
    top: 15px;
    @media screen and (max-width: 800px){
        width:65px;
        height:50px;
        left:4px;
        top: 9px;
    }
`;
