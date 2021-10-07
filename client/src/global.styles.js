import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Open Sans Condenced";
        font-weight: normal;
        color :rgb(50, 50, 50);
        padding: 20px 60px;

        @media screen and (max-width: 800px){
            padding:5px;
        }
    }
    a{
        text-decoration: none;
        color:black;
    }
    *{
        box-sizing: border-box;
    }
`;