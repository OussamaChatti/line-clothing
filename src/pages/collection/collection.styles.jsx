import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.h1`
    font-size: 28px;
    margin: 0 auto 25px;
    
`;

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content:space-evenly;

    & .collection-item {
    margin-bottom: 30px;
    }
`;