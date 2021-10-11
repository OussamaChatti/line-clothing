import styled from "styled-components";

export const SignInSignUpContainer = styled.div`
    width:850px;
    display:flex;
    justify-content: center;
    margin: 10px auto;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
        align-items: center;
        > *:first-child {
          margin-bottom: 50px;
          margin-top:30px;
          @media screen and (max-width: 800px){
            margin-bottom: 80px;
          }
        }
      }
`;
