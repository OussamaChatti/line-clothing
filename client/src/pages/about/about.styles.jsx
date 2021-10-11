import styled from 'styled-components';

export const AboutContainer = styled.div`
    margin: 30px;
    text-align: center;
    p{
        color: gray;
        font-size: 20px;
        @media screen and (max-width: 800px){
            font-size: 15px;
        }
        @media screen and (max-width: 300px){
            font-size:10px
        }
    }
    h1{
        @media screen and (max-width: 800px){
            font-size: 22px;
        }
        @media screen and (max-width: 300px){
            font-size:16px
        }
    }
    h2{
        font-size: 30px;
        padding: 0 10px;
        text-align: center;
        color: #8b8b8b;
        @media screen and (max-width: 800px){
            font-size: 20px;
        }
        @media screen and (max-width: 300px){
            font-size: 14px;
        }
    }
    @media screen and (max-width: 800px){
        margin: 10px;
    }
    @media screen and (max-width: 300px){
        margin : 5px;
    }
    
`;

export const IconContainer = styled.img`
    height: 50px;
    width: 50px;
    margin-bottom: -15px;
    margin-left: 5px;
    @media screen and (max-width: 800px){
        height: 40px;
        width: 40px;
    }
    @media screen and (max-width: 300px){
        height: 30px;
        width: 30px;
    }
`;

export const PhotoContainer = styled.img`
    border-radius: 50%;
    height: 300px;
    width: 300px;
    @media screen and (max-width: 800px){
        height: 200px;
        width: 200px;
    }
    @media screen and (max-width: 300px){
        height: 100px;
        width: 100px;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;

    a{
        margin: 5px 5px;
        color:  #007a99;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    
        &:hover{
           background-color: #007a99;
           color:white; 
        }
        i{
            font-size: 25px; 
        }
        @media screen and (max-width: 800px){
            i{
                font-size: 20px; 
            }
        }
        @media screen and (max-width: 300px){
            i{
                font-size: 14px; 
            }
        }
    }
`;
