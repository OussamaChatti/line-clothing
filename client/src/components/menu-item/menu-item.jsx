import React from 'react';
import {withRouter} from 'react-router-dom';

import { MenuItemContainer,BackgroundImageContainer,ContentContainer,ContentTitle,ContentSubtitle } from './menu-item.styles';

const MenuItem = props => (
    <MenuItemContainer size={props.size} onClick={()=> props.history.push(`${props.match.url}${props.url}`)}>
        <BackgroundImageContainer className='background-image' imageUrl={props.img} />
            <ContentContainer className='content'>
                <ContentTitle>{props.title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>{props.subtitle}</ContentSubtitle>
            </ContentContainer>
    </MenuItemContainer>
    );
export default withRouter(MenuItem);
