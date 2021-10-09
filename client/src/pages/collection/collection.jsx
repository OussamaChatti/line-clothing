import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer,TitleContainer,ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
  // quick fix for collection erroring if it's null and Error-Boundary doesn't fully catch it 
  if (!collection) {throw Error};
  // this issue only happens if the connection is very slow
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem className='collection-item' key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);