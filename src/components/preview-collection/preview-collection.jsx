import React from 'react';
import { withRouter } from 'react-router-dom';


import CollectionItem from '../collection-item/collection-item.jsx';

import { CollectionPreviewContainer,TitleContainer,PreviewContainer } from './preview-collection.styles.jsx';

const CollectionPreview = (props) => (
    <CollectionPreviewContainer>
        <div onClick={()=> props.history.push(`${props.match.url}/${encodeURI(props.title.toLowerCase())}`)}><TitleContainer>{props.title.toUpperCase()}</TitleContainer></div>
        <PreviewContainer>
        {props.items.filter((item,index) => (index<4)).map((item) => (<CollectionItem key={item.id} item={item}/>))}
        </PreviewContainer>
    </CollectionPreviewContainer>
);
export default withRouter(CollectionPreview);
