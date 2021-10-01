import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectCollectionsIsFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../spinner/spinner';
import CollectionOverview from './collection-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionsIsFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;

