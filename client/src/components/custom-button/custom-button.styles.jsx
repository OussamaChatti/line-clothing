import styled, {css} from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color:white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

const googleSignInStyles = css`
    background-color:#4285f4;
    color:white;
    width: 200px;
    margin : 0 5px;
    &:hover{
     background-color:#357ae8;
     border:none;
    } 
    @media screen and (max-width: 800px){
        width: 150px;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover{
    background-color: black;
    color: white;
    border: none;
    }
`;

const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return (props.inverted ? invertedButtonStyles : buttonStyles);
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    border: none;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display : flex;
    justify-content: center;
    ${getButtonStyles}
    @media screen and (max-width: 800px){
        min-width:unset;
        padding: 5px 15px;
        font-size:12px;
        align-items:center;
        height:30px;
        line-height:30px;
        }
`;
 
