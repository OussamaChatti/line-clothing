import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const TitleContainer = styled.h1` 
    font-size: 25px;
    margin-bottom: 25px;
    cursor:pointer;
    margin: 5px 15px;
    @media screen and (max-width: 800px){
        font-size:18px;
      }
`;

export const PreviewContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 800px){
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;