import styled from 'styled-components';

export const AboutContainer = styled.div`
    margin: 30px;
    text-align: center;
    p{
        color: gray;
        font-size: 20px;
    }
    h2{
        font-size: 30px;
        padding: 0 10px;
        text-align: center;
        color: #8b8b8b;

    }
`;

export const IconContainer = styled.img`
    height: 50px;
    width: 50px;
    margin-bottom: -15px;
    margin-left: 5px;
`;

export const PhotoContainer = styled.img`
    border-radius: 50%;
    height: 300px;
    width: 300px;
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;

    a{
        margin: 5px 30px;
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
    }
`;
