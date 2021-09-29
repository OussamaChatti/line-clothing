import React from 'react';

import CollectionItem from '../collection-item/collection-item.jsx';

import { CollectionPreviewContainer,TitleContainer,PreviewContainer } from './preview-collection.styles.jsx';

const CollectionPreview = (props) => (
    <CollectionPreviewContainer>
        <TitleContainer>{props.title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
        {props.items.filter((item,index) => (index<4)).map((item) => (<CollectionItem key={item.id} item={item}/>))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);
export default CollectionPreview;
