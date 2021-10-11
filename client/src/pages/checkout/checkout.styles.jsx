import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
    width: 70%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px){
    margin: 10px auto 0;
    width: 87%;
  }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    @media screen and (max-width: 800px){
        font-size:10px;
      }
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
    width: 8%;
    }
    @media screen and (max-width: 800px){
        font-size:12px;
    }
    @media screen and (max-width: 370px){
      font-size:8px;
    }
`;
export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 22px;
    @media screen and (max-width: 800px){
        margin-top:10px;
        font-size:18px;
    }
    @media screen and (max-width: 300px){
      font-size:12px;
    }
`;

export const TestWarning = styled.div`
    text-align: center;
    margin-top: 20px;
    font-size: 18px;
    color: red;
    font-weight: bold;
    
    &::first-line{
    color:gray;
    font-size: 10px;
    font-style: italic;
    }

    & pre{
    font-size: 12px;
    font-weight: lighter;
    }
    @media screen and (max-width: 800px){
        font-size: 10px;
        &::first-line{
            font-size: 6px; 
        }
        & pre{
            font-size: 6px;
        }
    }
    @media screen and (max-width: 300px){
        font-size: 6px;
        &::first-line{
            font-size: 4px; 
        }
        & pre{
            font-size: 4px;
        }
    }
`;