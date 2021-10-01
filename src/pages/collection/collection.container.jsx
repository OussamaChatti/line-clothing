import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsIsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/spinner/spinner';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectCollectionsIsLoaded(state)
});

const CollectionPageContainer = compose(
connect(mapStateToProps),
WithSpinner
)(CollectionPage);

export default CollectionPageContainer;